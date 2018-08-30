import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import './TableList.css'

class TableList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: [],
            redirect: false,
            csvData: []
        }
    }

    handleOnSelect = (row, isSelect) => {
        if (isSelect) {
            this.state.selected.push(row.id)
        } else {
            this.state.selected.splice(this.state.selected.indexOf(row.id), 1)
        }

    }

    handleOnSelectAll = (isSelect, rows) => {
        if (isSelect) {
            const ids = rows.map(function(row) {
                return row.id
            })

            this.setState({
                selected: ids,
            })
        } else {
            this.state.selected.splice(0, this.state.selected.length)
        }
    }

    handleBtnUpdateClick = () => {
        if (this.state.selected.length >= 1) {
            this.setState({
                redirect: true
            })
            
            localStorage.setItem('userListIds', this.state.selected)  
            
            this.props.history.push(this.props.configData.urlEdit)
        }
    }

    setCsvHeader = () => {
        let csvHeader = ''
        this.props.configData.csvHeader.forEach(row => {
            csvHeader += row.text + ';'
        })
        csvHeader += '\n'

        return csvHeader
    }

    handleCSVExport = () => {

        if ( this.state.selected.length > 0 ) {

            const serverData = {
                listIds: this.state.selected
            }
            const keyList = []
            const csvHeader = this.setCsvHeader()
            let csvFields = ''
    
            console.log(this.props.configData.urlExportCSV)

            fetch(this.props.configData.urlExportCSV, {
                method: 'POST',
                body: JSON.stringify(serverData)
            }).then((response) => {
                if ( response.status === 200 ) {
                    return response.json();
                }
            })
            .then((responseJSON) => {
                //Insert the header ids into the key list
                this.props.configData.csvHeader.forEach(header => {
                    keyList.push(header.dataField);
                })
        
                //Insert the row keys into the key list
                responseJSON.forEach(row => {
                    const keys = Object.keys(row);
            
                    keys.forEach(headerKey => {
                        if (keyList.indexOf(headerKey) >= 0) {
                            
                            Object.entries(row).forEach(([key, value]) => {
                                if ( headerKey === key ) {
                                    if ( value === null ) {
                                        csvFields += ' ;'    
                                    } else {
                                        csvFields += `${value};`
                                    }
                                }
                            })
                        }
                    })
        
                    csvFields += '\n'
                });
        
                const csvData = csvHeader + csvFields
                
                const FileSaver = require('file-saver')
                const blob = new Blob(['\uFEFF', csvData], {type: "text/plain;charset=utf-8"})
                FileSaver.saveAs(blob, this.props.configData.csvFileName+".csv")
            })
            .catch((responseError) => {
                this.setState({
                    error: responseError
                })
            })
        }
    }

    render() {
        this.setCsvHeader()

        const { SearchBar } = Search
        const columns = this.props.configData.csvHeader

        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true,
            selected: this.state.selected,
            onSelect: this.handleOnSelect,
            onSelectAll: this.handleOnSelectAll
        }

        const customTotal = (from, to, size) => (
            <span className="react-bootstrap-table-pagination-total">
                Mostrando { from } até { to } de { size } Resultados
            </span>
        )
          
        const options = {
            paginationSize: 10,
            pageStartIndex: 0,
            alwaysShowAllBtns: false, // Always show next and previous button
            withFirstAndLast: false, // Hide the going to First and Last page button
            hideSizePerPage: false, // Hide the sizePerPage dropdown always
            hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
            firstPageText: 'Anterior',
            prePageText: 'Voltar',
            nextPageText: 'Próxima',
            lastPageText: 'Última',
            nextPageTitle: 'Primeira página',
            prePageTitle: 'Página anterior',
            firstPageTitle: 'Próxima página',
            lastPageTitle: 'Última pagina',
            showTotal: true,
            paginationTotalRenderer: customTotal,
            sizePerPageList: [50, 100, 200, 500, 1000] // A numeric array is also available. the purpose of above example is custom the text
        }
          
        return (
            <Fragment>
                <ToolkitProvider
                    keyField='id'
                    data={ this.props.configData.serverResponse }
                    columns={ columns }
                    search
                >
                    {
                        props => (
                            <Fragment>
                                <h3>Buscar por:</h3>
                                <SearchBar 
                                    { ...props.searchProps }
                                    placeholder="Digite aqui..." 
                                />
                                <br/>
                                <button className="btn btn-success" onClick={ this.handleBtnUpdateClick }>Alterar selecionados</button>
                                <br/>
                                <button className="btn btn-primary btn-margin" onClick={this.handleCSVExport}>Exportar CSV</button>
                                <BootstrapTable
                                    { ...props.baseProps }
                                    selectRow={ selectRow }
                                    caption="Lista de Usuários"
                                    noDataIndication="Carregando informações..."
                                    pagination={paginationFactory(options)}
                                />
                                <button className="btn btn-primary btn-margin" onClick={this.handleCSVExport}>Exportar CSV</button>
                                <br/>
                                <button className="btn btn-success" onClick={ this.handleBtnUpdateClick }>Alterar selecionados</button>
                                <br/>
                            </Fragment>
                        )
                    }
                </ToolkitProvider>
            </Fragment>
        )
    }
}

export default withRouter(TableList)

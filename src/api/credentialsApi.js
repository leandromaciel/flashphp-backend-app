class credentialsApi {  
    static getCredentials() {
        const credentialsData = {
            USER_LOGIN: localStorage.getItem('USER_LOGIN'),
            CSRF_TOKEN_VALUE: localStorage.getItem('CSRF_TOKEN_VALUE')
        }

        return fetch('http://localhost/flashphp/public/backend/usuario/validar-credenciais', {
            method: 'POST',
            body: JSON.stringify(credentialsData)
        }).then((response) => {
            return response.json()
        })
        .catch(error => {
            return error
        })
    }
}    
export default credentialsApi;  

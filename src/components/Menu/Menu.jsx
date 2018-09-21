import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/entrar'>Fazer Login</NavLink>
    </div>
    
)

export default Menu
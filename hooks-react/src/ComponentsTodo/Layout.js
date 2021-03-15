import React from 'react'
import { Link} from 'react-router-dom'

function Layout() {
    return (
        <header style={layoutStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to='/'>Home</Link> |   <Link style={linkStyle} to='/about'>About</Link>
        </header>
    )
}

const layoutStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color : '#fff',
    textDecoration: 'none'
}

export default Layout

import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import { FaUser } from 'react-icons/fa' // Importing user icon from react-icons
import './Nav.css'

const Nav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }

    return (
        <nav className="navbar">
            <NavLink className="logo" to="/">FinMate</NavLink>

            {user ? (
                <div className="links">
                    <NavLink className="nav-item" to="/home">Home</NavLink>
                    <NavLink className="nav-item" to="showproduct">Products</NavLink>
                    <NavLink className="nav-item" to="/addProduct">Add Products</NavLink>
                    <NavLink className="nav-item" to="/addProduct">About</NavLink>
                    <NavLink className="nav-logout" to="/" onClick={handleLogout}>Logout</NavLink>
                    <NavLink className="nav-item user-icon" to="/profile">
                        <FaUser size={16} /> 
                    </NavLink>
                </div>
            ) : null}
        </nav>
    )
}

export default Nav

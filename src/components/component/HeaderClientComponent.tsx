import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import '../../style/Header.css'
const HeaderClientComponent = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen)
    }
    return (
        <div>
            <nav className='sb-topnav navbar navbar-expand navbar-dark d-flex justify-content-end bg-light'>
                
                <ul className='navbar-nav ms-auto ms-md-0 me-3 me-lg-4'>
                    <div className='dropdown-container'>
                    <Icon icon="iconamoon:profile" onClick={() => toggleDropdown()} />

                        <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                            <li>
                                <Link className='dropdown-item' to='#'>
                                    Settings
                                </Link>
                            </li>
                            <li>
                                <Link className='dropdown-item' to='#'>
                                    Activity Log
                                </Link>
                            </li>
                            <li>
                                <hr className='dropdown-divider' />
                            </li>
                            <li>
                                <Link className='dropdown-item' to='#'>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderClientComponent

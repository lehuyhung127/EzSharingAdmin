import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
const SidebarAdmin = () => {
    return (
        <div className='d-flex justify-content-between'>
            <div className=' bg-light'>
                <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
                    <div className='d-flex py-4'>
                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='' className='w-10' />
                        <div className='ml-4'>
                            <h4 className='text-black fw-bold'>Ezsharing</h4>
                            <p className='text-body-tertiary'>Admin</p>
                        </div>
                    </div>
                    <ul
                        className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start'
                        id='menu'
                    >
                        <li className='nav-item'>
                            <Link
                                to='/admin/dashboard'
                                className='nav-link align-middle px-0 d-flex align-items-center'
                            >
                                <Icon icon='mingcute:dashboard-line' />
                                <span className='ms-1 d-none d-sm-inline'>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/admin/user' className='nav-link px-0 align-middle  d-flex align-items-center'>
                                <Icon icon='ph:user' />
                                <span className='ms-1 d-none d-sm-inline'>User</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/admin/article' className='nav-link px-0 align-middle  d-flex align-items-center'>
                                <Icon icon='lucide:newspaper' />
                                <span className='ms-1 d-none d-sm-inline'>Article</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/admin/course' className='nav-link px-0 align-middle  d-flex align-items-center'>
                                <Icon icon='carbon:book' />
                                <span className='ms-1 d-none d-sm-inline'>Course</span>{' '}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/admin/quiz-question'
                                className='nav-link px-0 align-middle  d-flex align-items-center'
                            >
                                <Icon icon='fa6-solid:spell-check' />
                                <span className='ms-1 d-none d-sm-inline'>Quiz Question</span>{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='/admin/survey' className='nav-link px-0 align-middle  d-flex align-items-center'>
                                <Icon icon='fa6-solid:road' />
                                <span className='ms-1 d-none d-sm-inline'>Survey</span>{' '}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/admin/configure'
                                className='nav-link px-0 align-middle  d-flex align-items-center'
                            >
                                <Icon icon='gala:settings' />
                                <div className="nav-item dropdown">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    ><i className="fa-solid fa-gear"></i> Configure</a >
                                    <div className="dropdown-menu bg-transparent border-0">
                                        <a href="" className="dropdown-item"><i className="fa-regular fa-circle"></i> Admin Accounts</a>
                                        <a href="" className="dropdown-item"><i className="fa-regular fa-circle"></i> Role</a>
                                        <a href="" className="dropdown-item"><i className="fa-regular fa-circle"></i> Article Category</a>
                                        <a href="#" className="dropdown-item"><i className="nav-icon fas fa-th"></i> Quiz Question Category</a>
                                        <a href="#" className="dropdown-item"><i className="nav-icon fas fa-th"></i> Job Felix</a>
                                        <a href="#" className="dropdown-item"><i className="nav-icon fas fa-th"></i> Jon Type</a>

                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/admin/pages' className='nav-link px-0 align-middle  d-flex align-items-center'>
                                <Icon icon='iconoir:multiple-pages' />
                                <span className='ms-1 d-none d-sm-inline'>Pages</span>{' '}
                            </Link>
                        </li>
                    </ul>
                    <hr />
                </div>
            </div>
            {/* <div className=''>
                <h1>Content</h1>
            </div> */}
        </div>
    )
}

export default SidebarAdmin

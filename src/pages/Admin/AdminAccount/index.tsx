import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
const AdminAccount = () => {
    const [showActions, setShowActions] = useState({})

    const data = [
        // Dữ liệu người dùng
        {
            id: 1,
            Username: 'Zungtr',
            Fullname: 'Vu Dung',
            Rolename: 'Quan Tri He Thong',
            status: 'Active'
        },

        {
            id: 1,
            Username: 'Zungtr',
            Fullname: 'Vu Dung',
            Rolename: 'Quan Tri He Thong',
            status: 'Active'
        },

        {
            id: 1,
            Username: 'Zungtr',
            Fullname: 'Vu Dung',
            Rolename: 'Quan Tri He Thong',
            status: 'Active'
        },

        {
            id: 1,
            Username: 'Zungtr',
            Fullname: 'Vu Dung',
            Rolename: 'Quan Tri He Thong',
            status: 'Active'
        },

        {
            id: 1,
            Username: 'Zungtr',
            Fullname: 'Vu Dung',
            Rolename: 'Quan Tri He Thong',
            status: 'Active'
        },

        {
            id: 1,
            Username: 'Zungtr',
            Fullname: 'Vu Dung',
            Rolename: 'Quan Tri He Thong',
            status: 'Active'
        },

        {
            id: 1,
            Username: 'Zungtr',
            Fullname: 'Vu Dung',
            Rolename: 'Quan Tri He Thong',
            status: 'Active'
        }
    ]

    const toggleActions = (id) => {
        setShowActions((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    return (
        <div className='q-table border border-light border-3 rounded-3'>
            <div className='p-4'>
                <div className='d-flex justify-content-between align-items-center mb-7'>
                    <h2 className='fw-bold text-uppercase'>Admin Account MANAGEMENT</h2>

                    <div className='card-tools'>
                        <Link className='btn btn-success btn-sm' to=''>
                            <Icon icon='ic:baseline-plus' />
                        </Link>
                    </div>
                </div>
                <table className='table table-bordered'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Full Name</th>
                            <th>Role Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.Username}</td>
                                    <td>{item.Fullname}</td>
                                    <td>{item.Rolename}</td>

                                    <td>
                                        <span className='badge bg-success'>Active</span>
                                    </td>
                                    <td>
                                        <div className=''>
                                            <button className='btn btn-danger me-2'>Xóa</button>
                                            <button className='btn btn-primary'>Sửa</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan='10' className='text-center'>
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className='col-sm-12 col-xl-12 d-flex justify-content-end'>
                    <div className=' rounded h-100   '>
                        <div className='btn-toolbar ' role='toolbar'>
                            <div
                                className='btn-group me-2 border border-secondary'
                                role='group'
                                aria-label='First group'
                            >
                                <button
                                    type='button'
                                    className='btn btn-primary text-white bg-secondary border border-secondary'
                                >
                                    «
                                </button>
                                <button
                                    type='button'
                                    className='btn btn-primary text-white bg-secondary border border-secondary'
                                >
                                    1
                                </button>
                                <button
                                    type='button'
                                    className='btn btn-primary text-white bg-secondary border border-secondary'
                                >
                                    2
                                </button>
                                <button
                                    type='button'
                                    className='btn btn-primary text-white bg-secondary border border-secondary'
                                >
                                    3
                                </button>
                                <button
                                    type='button'
                                    className='btn btn-primary text-white bg-secondary border border-secondary'
                                >
                                    4
                                </button>
                                <button
                                    type='button'
                                    className='btn btn-primary text-white bg-secondary border border-secondary'
                                >
                                    »
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAccount

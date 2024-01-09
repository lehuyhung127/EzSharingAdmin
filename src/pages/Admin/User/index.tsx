import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'
const User = () => {

    const [showActions, setShowActions] = useState({})

    const data = [
        // Dữ liệu người dùng
        {
            id: 1,
            fullname: 'John Doe',
            role: 'Admin',
            email: 'john.doe@example.com',
            phoneNumber: '123-456-7890',
            parentName: 'Jane Doe',
            rank: 'Gold',
            member: true,
            lastLogin: '2024-01-09'
        },
        {
            id: 1,
            fullname: 'John Doe',
            role: 'Admin',
            email: 'john.doe@example.com',
            phoneNumber: '123-456-7890',
            parentName: 'Jane Doe',
            rank: 'Gold',
            member: true,
            lastLogin: '2024-01-09'
        },
        {
            id: 1,
            fullname: 'John Doe',
            role: 'Admin',
            email: 'john.doe@example.com',
            phoneNumber: '123-456-7890',
            parentName: 'Jane Doe',
            rank: 'Gold',
            member: true,
            lastLogin: '2024-01-09'
        },
        {
            id: 1,
            fullname: 'John Doe',
            role: 'Admin',
            email: 'john.doe@example.com',
            phoneNumber: '123-456-7890',
            parentName: 'Jane Doe',
            rank: 'Gold',
            member: true,
            lastLogin: '2024-01-09'
        },
        {
            id: 1,
            fullname: 'John Doe',
            role: 'Admin',
            email: 'john.doe@example.com',
            phoneNumber: '123-456-7890',
            parentName: 'Jane Doe',
            rank: 'Gold',
            member: true,
            lastLogin: '2024-01-09'
        },
        {
            id: 1,
            fullname: 'John Doe',
            role: 'Admin',
            email: 'john.doe@example.com',
            phoneNumber: '123-456-7890',
            parentName: 'Jane Doe',
            rank: 'Gold',
            member: true,
            lastLogin: '2024-01-09'
        },
        {
            id: 1,
            fullname: 'John Doe',
            role: 'Admin',
            email: 'john.doe@example.com',
            phoneNumber: '123-456-7890',
            parentName: 'Jane Doe',
            rank: 'Gold',
            member: true,
            lastLogin: '2024-01-09'
        },
        {
            id: 1,
            fullname: 'John Doe',
            role: 'Admin',
            email: 'john.doe@example.com',
            phoneNumber: '123-456-7890',
            parentName: 'Jane Doe',
            rank: 'Gold',
            member: true,
            lastLogin: '2024-01-09'
        },
        {
            id: 1,
            fullname: 'John Doe Le Huy Hung',
            role: 'Admin',
            email: 'john.doe@example.com',
            phoneNumber: '123-456-7890',
            parentName: 'Jane Doe',
            rank: 'Gold',
            member: true,
            lastLogin: '2024-01-09'
        }
    ]

    const toggleActions = (id) => {
        setShowActions((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    return (
        <div className='border border-light border-3 rounded-3'>
            <div className='p-4'>


                <div class="d-flex justify-content-between align-items-center">
                    <h2 className='fw-bold text-uppercase'>User management</h2>

                    <form className="nosubmit">
                        <input className="nosubmit" type="search" placeholder="Search..." />
                    </form>
                </div>
                <table className='table table-bordered'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Parent Name</th>
                            <th>Rank</th>
                            <th>Member</th>
                            <th>Last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.fullname}</td>
                                    <td>{item.role}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.parentName}</td>
                                    <td>{item.rank}</td>
                                    <td>{item.member ? 'Yes' : 'No'}</td>
                                    <td>{new Date(item.lastLogin).toLocaleDateString()}</td>
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
                <div className="col-sm-12 col-xl-12 d-flex justify-content-end">
                    <div className=" rounded h-100   ">
                        <div className="btn-toolbar " role="toolbar">
                            <div
                                className="btn-group me-2 border border-secondary"
                                role="group"
                                aria-label="First group"
                            >
                                <button type="button" className="btn btn-primary text-white bg-secondary border border-secondary">«</button>
                                <button type="button" className="btn btn-primary text-white bg-secondary border border-secondary">1</button>
                                <button type="button" className="btn btn-primary text-white bg-secondary border border-secondary">2</button>
                                <button type="button" className="btn btn-primary text-white bg-secondary border border-secondary">3</button>
                                <button type="button" className="btn btn-primary text-white bg-secondary border border-secondary">4</button>

                                <button type="button" className="btn btn-primary text-white bg-secondary border border-secondary">»</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User

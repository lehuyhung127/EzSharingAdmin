import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'
import ReactPaginate from 'react-paginate'
const User = () => {
    const [showActions, setShowActions] = useState({})
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 5 // Số lượng mục hiển thị trên mỗi trang
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
    // Tính toán số trang
    const pageCount = Math.ceil(data.length / itemsPerPage)

    // Hiển thị các mục trên trang hiện tại
    const currentItems = data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected)
    }

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <h2 className='fw-bold text-uppercase'>User management</h2>

                <form className='nosubmit'>
                    <input className='nosubmit' type='search' placeholder='Search...' />
                </form>
            </div>
            <table className='table table-bordered'>
                <thead className='thead-dark rounded-3'>
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
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    )
}

export default User

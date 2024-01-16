import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { Modal, Button, Form } from 'react-bootstrap'
const Article = () => {
    const [showActions, setShowActions] = useState({})
    const [showModal, setShowModal] = useState(false)

    const handleShow = () => setShowModal(true)
    const handleClose = () => setShowModal(false)
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
            <div class='d-flex justify-content-between align-items-center mb-3'>
                <h2 className='fw-bold text-uppercase'>Article management</h2>

                <div className='card-tools'>
                    <button type='button' className='btn btn-success' onClick={handleShow}>
                        <Icon icon='ic:baseline-plus' className='text-primary' />
                    </button>
                </div>
            </div>
            <Modal show={showModal} onHide={handleClose} className='my-custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Article</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Nội dung của form ở đây */}
                    <Form className='d-block border-0'>
                        {/* Các trường form */}
                        <Form.Group controlId='formTitle'>
                            <Form.Label className='text-black'>Title</Form.Label>
                            <Form.Control type='text' />
                        </Form.Group>
                        <Form.Group controlId='formTitle'>
                            <Form.Label>Category</Form.Label>
                            <Form.Select>
                                <option value='author1'>Author 1</option>
                                <option value='author2'>Author 2</option>
                                <option value='author3'>Author 3</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId='formTitle'>
                            <Form.Label>Author</Form.Label>
                            <Form.Select>
                                <option value='author1'>Category</option>
                                <option value='author2'>Category</option>
                                <option value='author3'>Category</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId='formTitle'>
                            <Form.Label>Status</Form.Label>
                            <Form.Select>
                                <option value='author1'>Author 1</option>
                                <option value='author2'>Author 2</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId='formDescription'>
                            <Form.Label>Brief Content</Form.Label>
                            <Form.Control as='textarea' placeholder='Enter description' />
                        </Form.Group>
                        <Form.Group controlId='formFile'>
                            <Form.Label>Thumbnail</Form.Label>
                            <Form.Control type='file' />
                        </Form.Group>
                        <Form.Group controlId='formFile'>
                            <Form.Label>Cover Photo</Form.Label>
                            <Form.Control type='file' />
                        </Form.Group>
                        <Form.Group controlId='formTitle'>
                            <Form.Label className='text-black'>Content</Form.Label>
                            <Form.Control type='text' />
                        </Form.Group>
                        {/* Thêm các trường form khác tương tự */}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose} className='text-black'>
                        Close
                    </Button>
                    <Button variant='primary' onClick={handleClose} className='text-black'>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
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

export default Article

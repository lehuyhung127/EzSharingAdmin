import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'
import { Modal, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
const Course = () => {
    const [showActions, setShowActions] = useState({})
    const [showModal, setShowModal] = useState(false)

    const handleShow = () => setShowModal(true)
    const handleClose = () => setShowModal(false)
    const data = [
        // Dữ liệu người dùng
        {
            id: 1,
            title: '30 NGÀY THÀNH CÔNG NGHỀ TƯ VẤN',
            author: 'Vu Dung',
            price: '100000',
            lessoncount: '30 Lessons',
            status: 'Active'
        },

        {
            id: 1,
            title: '30 NGÀY THÀNH CÔNG NGHỀ TƯ VẤN',
            author: 'Vu Dung',
            price: '100000',
            lessoncount: '30 Lessons',
            status: 'Active'
        },

        {
            id: 1,
            title: '30 NGÀY THÀNH CÔNG NGHỀ TƯ VẤN',
            author: 'Vu Dung',
            price: '100000',
            lessoncount: '30 Lessons',
            status: 'Active'
        },

        {
            id: 1,
            title: '30 NGÀY THÀNH CÔNG NGHỀ TƯ VẤN',
            author: 'Vu Dung',
            price: '100000',
            lessoncount: '30 Lessons',
            status: 'Active'
        },

        {
            id: 1,
            title: '30 NGÀY THÀNH CÔNG NGHỀ TƯ VẤN',
            author: 'Vu Dung',
            price: '100000',
            lessoncount: '30 Lessons',
            status: 'Active'
        },
        {
            id: 1,
            title: '30 NGÀY THÀNH CÔNG NGHỀ TƯ VẤN',
            author: 'Vu Dung',
            price: '100000',
            lessoncount: '30 Lessons',
            status: 'Active'
        },
        {
            id: 1,
            title: '30 NGÀY THÀNH CÔNG NGHỀ TƯ VẤN',
            author: 'Vu Dung',
            price: '100000',
            lessoncount: '30 Lessons',
            status: 'Active'
        },
        {
            id: 1,
            title: '30 NGÀY THÀNH CÔNG NGHỀ TƯ VẤN',
            author: 'Vu Dung',
            price: '100000',
            lessoncount: '30 Lessons',
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
                    <h2 className='fw-bold text-uppercase'>course MANAGEMENT</h2>

                    <div className='card-tools'>
                        <button type='button' className='btn btn-success' onClick={handleShow}>
                            <Icon icon='ic:baseline-plus' className='text-primary' />
                        </button>
                    </div>
                </div>
                <Modal show={showModal} onHide={handleClose} className='my-custom-modal'>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Course</Modal.Title>
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
                                <Form.Label>Author</Form.Label>
                                <Form.Select>
                                    <option value='author1'>Author 1</option>
                                    <option value='author2'>Author 2</option>
                                    <option value='author3'>Author 3</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId='formTitle'>
                                <Form.Label className='text-black'>Price</Form.Label>
                                <Form.Control type='number' />
                            </Form.Group>
                            <Form.Group controlId='formDescription'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control as='textarea' placeholder='Enter description' />
                            </Form.Group>
                            <Form.Group controlId='formTitle'>
                                <Form.Label>Status</Form.Label>
                                <Form.Select>
                                    <option value='author1'>Author 1</option>
                                    <option value='author2'>Author 2</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId='formFile'>
                                <Form.Label>Thumbnail</Form.Label>
                                <Form.Control type='file' />
                            </Form.Group>
                            <Form.Group controlId='formFile'>
                                <Form.Label>Cover Photo</Form.Label>
                                <Form.Control type='file' />
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
                    <thead className='thead-dark'>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Lesson Count</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Link to='/admin/course/1/lessons' className='btn btn-sm btn-primary'>
                                            30 lessons
                                        </Link>
                                    </td>
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

export default Course

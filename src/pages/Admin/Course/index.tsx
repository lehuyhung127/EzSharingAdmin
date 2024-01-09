import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'
const Course = () => {

    const [showActions, setShowActions] = useState({})

    const data = [
        // Dữ liệu người dùng
        {
            id: 1,
            title: '30 NGÀY THÀNH CÔNG NGHỀ TƯ VẤN',
            author: 'Vu Dung',
            price: '100000',
            lessoncount: '30 Lessons',
            status: 'Active',
        },

        {
            id: 1,
            title: '30 NGÀY THÀNH CÔNG NGHỀ TƯ VẤN',
            author: 'Vu Dung',
            price: '100000',
            lessoncount: '30 Lessons',
            status: 'Active',
        },

        {
            id: 1,
            title: '30 NGÀY THÀNH CÔNG NGHỀ TƯ VẤN',
            author: 'Vu Dung',
            price: '100000',
            lessoncount: '30 Lessons',
            status: 'Active',
        },

        {
            id: 1,
            title: '30 NGÀY THÀNH CÔNG NGHỀ TƯ VẤN',
            author: 'Vu Dung',
            price: '100000',
            lessoncount: '30 Lessons',
            status: 'Active',
        },

        {
            id: 1,
            title: '30 NGÀY THÀNH CÔNG NGHỀ TƯ VẤN',
            author: 'Vu Dung',
            price: '100000',
            lessoncount: '30 Lessons',
            status: 'Active',
        },
        {
            id: 1,
            title: '30 NGÀY THÀNH CÔNG NGHỀ TƯ VẤN',
            author: 'Vu Dung',
            price: '100000',
            lessoncount: '30 Lessons',
            status: 'Active',
        },
        {
            id: 1,
            title: '30 NGÀY THÀNH CÔNG NGHỀ TƯ VẤN',
            author: 'Vu Dung',
            price: '100000',
            lessoncount: '30 Lessons',
            status: 'Active',
        },
        {
            id: 1,
            title: '30 NGÀY THÀNH CÔNG NGHỀ TƯ VẤN',
            author: 'Vu Dung',
            price: '100000',
            lessoncount: '30 Lessons',
            status: 'Active',
        },
        
        
    ]

    const toggleActions = (id) => {
        setShowActions((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    return (
        <div>
            <div class="d-flex justify-content-between align-items-center">
            <h2 className='fw-bold text-uppercase'>Articles</h2>
            
                <form className="nosubmit">
                    <input className="nosubmit" type="search" placeholder="Search..." />
                </form>
            </div>
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
                      <a
                        href="/admin/course/1/lessons"
                        class="btn btn-sm btn-primary"
                        >30 lessons</a
                      >
                    </td>
                                <td><span class="badge bg-success">Active</span></td>
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
        </div>
    )
}

export default Course

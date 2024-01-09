import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'
import { Icon } from '@iconify/react';
const Article = () => {

    const [showActions, setShowActions] = useState({})

    const data = [
        // Dữ liệu người dùng
        {
            id: 1,
            title: 'Việt Nam bị loại ở vòng bảng U20 châu Á',
            category: 'Danh mục mặc định',
            author: 'Vu Dung',
            status: 'Active',
            views: '0',
            reaction: '1',
        },
        {
            id: 1,
            title: 'Việt Nam bị loại ở vòng bảng U20 châu Á',
            category: 'Danh mục mặc định',
            author: 'Vu Dung',
            status: 'Active',
            views: '0',
            reaction: '1',
        },
        {
            id: 1,
            title: 'Việt Nam bị loại ở vòng bảng U20 châu Á',
            category: 'Danh mục mặc định',
            author: 'Vu Dung',
            status: 'Active',
            views: '0',
            reaction: '1',
        },
        {
            id: 1,
            title: 'Việt Nam bị loại ở vòng bảng U20 châu Á',
            category: 'Danh mục mặc định',
            author: 'Vu Dung',
            status: 'Active',
            views: '0',
            reaction: '1',
        },
        {
            id: 1,
            title: 'Việt Nam bị loại ở vòng bảng U20 châu Á',
            category: 'Danh mục mặc định',
            author: 'Vu Dung',
            status: 'Active',
            views: '0',
            reaction: '1',
        },
        {
            id: 1,
            title: 'Việt Nam bị loại ở vòng bảng U20 châu Á',
            category: 'Danh mục mặc định',
            author: 'Vu Dung',
            status: 'Active',
            views: '0',
            reaction: '1',
        },
        {
            id: 1,
            title: 'Việt Nam bị loại ở vòng bảng U20 châu Á',
            category: 'Danh mục mặc định',
            author: 'Vu Dung',
            status: 'Active',
            views: '0',
            reaction: '1',
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
            
            <div class="card-tools">
                <a class="btn btn-success btn-sm" href="" ><Icon icon="ic:baseline-plus" /></a>
              </div>
            </div>
            <table className='table table-bordered'>
                <thead className='thead-dark'>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Status</th>
                        <th>Views</th>
                        <th>Reaction</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td>{item.author}</td>
                                <td><span class="badge bg-success">Active</span></td>
                                <td>{item.views}</td>
                                <td>{item.reaction}</td>


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

export default Article

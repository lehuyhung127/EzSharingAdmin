import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'
import '../Course/main.css'
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
        <div className='a-table border border-light border-3 rounded-3 '>
            <div className='p-4'>
                <div class="d-flex justify-content-between align-items-center mb-7">
                    <h2 className='fw-bold text-uppercase '>Articles</h2>

                    <div class="card-tools">
                        <a class="btn btn-success btn-sm" href="" ><Icon icon="ic:baseline-plus" /></a>
                    </div>
                </div>
                <table className='table table-bordered ' style={{ width: '100%' }}>
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

export default Article

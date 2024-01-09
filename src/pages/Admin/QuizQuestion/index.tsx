import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'

import { Icon } from '@iconify/react';
const QuizQuestion = () => {

    const [showActions, setShowActions] = useState({})

    const data = [
        // Dữ liệu người dùng
        {
            id: 1,
            title: 'Việt Nam bị loại ở vòng bảng U20 châu Á',
            type: 'Marketing',
            status: 'Active',
        },

        {
            id: 1,
            title: 'Việt Nam bị loại ở vòng bảng U20 châu Á',
            type: 'Marketing',
            status: 'Active',
        },

        {
            id: 1,
            title: 'Việt Nam bị loại ở vòng bảng U20 châu Á',
            type: 'Marketing',
            status: 'Active',
        },

        {
            id: 1,
            title: 'Việt Nam bị loại ở vòng bảng U20 châu Á',
            type: 'Marketing',
            status: 'Active',
        },

        {
            id: 1,
            title: 'Việt Nam bị loại ở vòng bảng U20 châu Á',
            type: 'Marketing',
            status: 'Active',
        },

        {
            id: 1,
            title: 'Việt Nam bị loại ở vòng bảng U20 châu Á',
            type: 'Marketing',
            status: 'Active',
        },

        {
            id: 1,
            title: 'Việt Nam bị loại ở vòng bảng U20 châu Á',
            type: 'Marketing',
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
            
            <div class="card-tools">
                <a class="btn btn-success btn-sm" href="" ><Icon icon="ic:baseline-plus" /></a>
              </div>
            </div>
            <table className='table table-bordered'>
                <thead className='thead-dark'>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Type</th>
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
                                <td><span class="badge bg-success">ynq</span></td>
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

export default QuizQuestion

import HeaderClientComponent from '@/components/component/HeaderClientComponent'
import SidebarAdmin from '@/components/component/SidebarAdmin'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div className=''>
            <HeaderClientComponent />
            <div className='row '>
                <div className='col'>
                <SidebarAdmin />
                </div>
                <main className='col'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminLayout

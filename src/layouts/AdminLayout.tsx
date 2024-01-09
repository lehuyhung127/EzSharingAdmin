import HeaderClientComponent from '@/components/component/HeaderClientComponent'
import SidebarAdmin from '@/components/component/SidebarAdmin'
import { Outlet } from 'react-router-dom'
import 'normalize.css'
import '../style/AdminLayout.css'
const AdminLayout = () => {
    return (
        <div className='w-100'>
            <HeaderClientComponent />
            <div className='AdminLayout_row'>
                <div className='AdminLayout_items'>
                    <SidebarAdmin />
                </div>
                <main className='AdminLayout_items AdminLayout_items-main'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminLayout

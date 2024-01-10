import HeaderClientComponent from '@/components/component/HeaderClientComponent'
import SidebarAdmin from '@/components/component/SidebarAdmin'
import { Outlet } from 'react-router-dom'
import 'normalize.css'
import '../style/AdminLayout.css'
const AdminLayout = () => {
    return (
        <div className='containerAdminLayout'>
            {/* <HeaderClientComponent /> */}
            <div className='AdminLayout_row'>
                <div className='AdminLayout_items'>
                    <SidebarAdmin />
                </div>
                <main className='AdminLayout_main mt-3'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminLayout

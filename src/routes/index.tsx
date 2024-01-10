import AdminLayout from '@/layouts/AdminLayout'
import BaseLayout from '@/layouts/BaseLayout'
import Article from '@/pages/Admin/Article'
import Dashboard from '@/pages/Admin/Dashboard'
import CartPage from '@/pages/Client/CartPage'
import ContactPage from '@/pages/Client/ContactPage'
import HomePage from '@/pages/Client/HomPage'
import IntroducePage from '@/pages/Client/IntroducePage'
import PaymentInformationPage from '@/pages/Client/PaymentInformationPage'
import PaymentSuccessPage from '@/pages/Client/PaymentSuccessPage'
import ProductDetailPage from '@/pages/Client/ProductDetailPage'
import ShopPage from '@/pages/Client/ShopPage'
import { Routes, Route } from 'react-router-dom'
import User from '@/pages/Admin/User'
import Course from '@/pages/Admin/Course'
import QuizQuestion from '@/pages/Admin/QuizQuestion'
import Survey from '@/pages/Admin/Survey'
import Configure from '@/pages/Admin/Configure'
import Pages from '@/pages/Admin/pages'
import AdminAccount from '@/pages/Admin/AdminAccount'
import Roles from '@/pages/Admin/Roles'
import ArticleCategory from '@/pages/Admin/ArticleCategory'
import QuizQuestionCategory from '@/pages/Admin/QuizQuestionCategory'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<BaseLayout />}>
                <Route index element={<HomePage />} />
                <Route path='products' element={<ShopPage />} />
                <Route path='products/:id' element={<ProductDetailPage />} />
                <Route path='cart' element={<CartPage />} />
                <Route path='payment_information' element={<PaymentInformationPage />} />
                <Route path='payment_success' element={<PaymentSuccessPage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='introduce' element={<IntroducePage />} />

                {/* auth */}
                {/* <Route path='signin' element={<SigninPage />} />
                <Route path='signup' element={<SignupPage />} /> */}
            </Route>
            <Route path='admin' element={<AdminLayout />}>
                <Route path='/admin/dashboard' element={<Dashboard />} />
                <Route path='/admin/user' element={<User />} />
                <Route path='/admin/article' element={<Article />} />
                <Route path='/admin/course' element={<Course />} />
                <Route path='/admin/quiz-question' element={<QuizQuestion />} />
                <Route path='/admin/survey' element={<Survey />} />
                <Route path='/admin/configure' element={<Configure />} />
                <Route path='/admin/pages' element={<Pages />} />
                <Route path='/admin/adminaccount' element={<AdminAccount />} />
                <Route path='/admin/roles' element={<Roles />} />
                <Route path='/admin/articlecategory' element={<ArticleCategory />} />
                <Route path='/admin/quizquestioncategory' element={<QuizQuestionCategory/>} />
            </Route>
        </Routes>
    )
}

export default Routers

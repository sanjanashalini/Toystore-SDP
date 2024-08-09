
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import Userlayout from './layout/Userlayout'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Shared/NotFound'
import HomeLayout from './layout/HomeLayout'
import AdminUsers from './pages/Admin/AdminUsers'
import ToyProduct from './pages/User/UserProduct';
import "./Style/Login.css"
import "./Style/Register.css"
import "./Style/Footer.css"
import ShopByCategory from './pages/User/UserLanding'
import UserHome from './pages/User/UserHome'
import GirlsProduct from './pages/User/GirlsProduct'
import KidssProduct from './pages/User/KidsProduct'
import './pages/User/PaymentDetails.css'
import CartPage from './pages/User/CartPage'
import AdminProducts from './pages/Admin/AdminProduct'
import PaymentDetails from './pages/User/PaymentDetails'
import OrderPlaced from './pages/User/OrderPlaced'


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>

                    <Route element={<Userlayout />}>
                        <Route path='/shopbycategory' element={<ShopByCategory />} />
                        <Route path='/toyproduct' element={<ToyProduct/>} />
                        <Route path='/girls-product' element={<GirlsProduct/>} />
                        <Route path='/kidsproduct' element={<KidssProduct/>} />
                        <Route path="/order-placed" element={<OrderPlaced />} />
                        <Route path='/cart' element={<CartPage/>} />
                        <Route path='/logout' element={<Login/>}/>
                        <Route path='/payment' element={<PaymentDetails/>}/>
                        
                        <Route path='/userhome' element={<UserHome />} />
                    </Route>

                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                        <Route path='/admin/product' element={<AdminProducts />} />
                    </Route>




                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App
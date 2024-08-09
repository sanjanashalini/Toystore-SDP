import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Cog, Mail, Users } from 'lucide-react'
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Leftbar = () => {
    const navigate = useNavigate();

    // Function to handle navigation based on category
    const handleNavigation = (path) => {
        navigate(path);
    };
    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard',
            icon: LayoutDashboard
        }, {
            title: 'Users',
            link: '/admin/users',
            icon: Users
        },
        {
            title: 'Product',
            link: '/admin/product',
            icon: LayoutDashboard
        },
    ]
    return (
        <div className='h-screen w-1/6 flex justify-center items-center flex-col bg-red-100 pt-10'>
            <div className='h-5/6 w-full flex flex-col justify-start items-center gap-4'>
                {
                    AdminLinks.map((data, index) => (
                        <NavLink key={index} to={data.link} className='p-5 border-b-4 border-red-300 hover:border-primary font-bold mt-2 w-full'>
                            <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                                {React.createElement(data.icon, { size: 20 })}
                                {data.title}
                            </span>
                        </NavLink>
                    ))
                }
            </div>
            <div className='h-1/6 w-full flex flex-col justify-center items-center'>
            <Button  onClick={()=>handleNavigation("/logout")} className="bg-red-600 border-black">Logout</Button>
            </div>

        </div>
    )
}

export default Leftbar
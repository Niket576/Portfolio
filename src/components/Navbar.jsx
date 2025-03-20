import React, { useState } from 'react'
import pic from '/public/icons8-portfolio-48.png'
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';
import './Navbar.css';


const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const navItems = [
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Projects"
        },
        // {
        //     id:4,
        //     text:"Skills"
        // },
        {
            id:4,
            text:"Contact"
        },
    ];
  return (
    <>
        <div className='max-w-screen-2xl nav container mx-auto px-4 h-16 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 text-white'>
            <div className='flex justify-between items-center h-16'>
                <div className='flex space-x-2'>
                    <div>
                        <img src={pic} className='h-12 w-12 rounded-full ' alt="" />
                    </div>
                    <div className='items-center justify-between mt-2.5'>
                        <h1 className='font-semibold text-xl cursor-pointer '>
                            {/* <span className='text-white-500 text-3xl pfl'>Portfolio</span> */}
                            <Link to="Home"
                                smooth={true}
                                duration={500}
                                offset={70}
                                activeClass='active'
                            ><span className='text-white-500 text-3xl pfl'>Portfolio</span></Link>
                        </h1>
                    </div>
                </div>
                {/* desktop navbar */}
                <div>
                    <ul className='hidden md:flex space-x-8'>
                        {
                            navItems.map(({id,text}) =>(
                                <li 
                                className='hover:scale-105 duration-200 cursor-pointer' 
                                key={id}
                                >
                                    <Link to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass="active"
                                    >{text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div onClick={()=> setMenu(!menu)} className='md:hidden'>
                        {menu?<IoClose size={24} />:<MdMenu size={24} />}
                    </div>
                </div>
            </div>
            {/* mobile navbar */}
            {
                menu && (
                    <div className='bg-white'>
                        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                            {
                                navItems.map(({id,text}) =>(
                                    <li 
                                    className='hover:scale-105 duration-200 font-semibold cursor-pointer' 
                                    key={id}
                                    >
                                      <Link 
                                        onClick={()=> setMenu(!menu)}
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass='active'
                                      >{text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
            
        </div>
    </>
  )
}

export default Navbar

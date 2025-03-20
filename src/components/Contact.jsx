import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';

import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";

import './Contact.css';




const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async(data) => {
        const userInfo = {
            name:data.name,
            email:data.email,
            message:data.message
        }
        try {
            await axios.post("https://getform.io/f/bejronja", userInfo);
            toast.success("Your message has been sent");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }
    } 
  return (
    <>
        <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 text-white '>
            <div className='flex justify-center mt-20'>
                <h1 className='text-5xl font-semibold mb-10'>Contact Me</h1>
                {/* <span>Please fill out the form below to contact me</span> */}
            </div>
            <div className='flex flex-col md:flex-row items-center justify-evenly'>
                <div className='w-[400px] space-y-2 ml-20'>
                    <h1 className='text-5xl font-semibold mb-2 cnt'>Let's talk</h1>
                    <div className='pb-5'>
                        <p className=''>
                            I'm currently avaliable to take on new projects, so 
                            feel free to send me a message about anything that 
                            you want me to work on. You can contact anytime.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <ul className='space-y-3'>
                            <li className='flex gap-x-10'>
                                <div className='text-2xl'>
                                    <MdEmail />
                                </div>
                                <div className=''>
                                    <p>amadneeketchry@gmail.com</p>
                                </div>
                            </li>
                            <li className='flex gap-x-10 '>
                                <div className='text-2xl'>
                                    <FaPhoneVolume />
                                </div>
                                <div className=''>
                                    <p>+91-8826803593</p>
                                </div>
                            </li>
                            <li className='flex gap-x-10'>
                                <div className='text-2xl'>
                                    <MdOutlineLocationOn />
                                </div>
                                <div className=''>
                                    <p>DL, India</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-[500px]'>
                    <div className='flex flex-col items-center justify-center mt-5'>
                    <form 
                        onSubmit={handleSubmit(onSubmit)}
                        //action="https://getform.io/f/bejronja"
                        //method='POST' 
                        className='bg-black w-96 px-8 py-6 rounded-xl border-2 border-white'>
                        <h1 className='text-xl font-semibold mb-4 text-white-700'>Send Your Message</h1>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-white-700' >
                                Full Name
                            </label>
                            <input 
                                {...register("name", { required: true })}
                                className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='name'
                                name='name'
                                type="text" 
                                placeholder='Enter your full name'
                            />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-white-700' >
                                Email Address
                            </label>
                            <input 
                                {...register("email", { required: true })}
                                className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='email'
                                name='email'
                                type="text" 
                                placeholder='Enter your email address'
                            />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-white-700' >
                                Message
                            </label>
                            <textarea 
                                {...register("message", { required: true })}
                                className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='message'
                                name='message'
                                type="text" 
                                placeholder='Enter your query here'
                            />
                            {errors.message && <span>This field is required</span>}
                        </div>
                        {/* <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button> */}
                        <button type='submit' className='bg-gradient-to-r from-purple-600 to-orange-400 text-white font-medium py-2 px-7 rounded-full transition-transform transform hover:scale-105'>Send</button>
                    </form>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    </>
  )
}

export default Contact

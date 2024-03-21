import React from 'react';
import { MdPhonelink } from "react-icons/md";
import { FaRoute } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { IoWarning } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { BsMegaphone } from "react-icons/bs";

const WhatIsLittleMove = () => {
    const items = [
        {
            image: <MdPhonelink style={{color: '#ffbb50'}}/>,
            title: 'Real-Time Tracking',
            desc: 'Track your child’s school bus in real-time and live location update.',
        },
        {
            image: <FaRoute style={{color: '#ffbb50'}}/>,
            title: 'Route Management',
            desc: 'Optimize and manage school bus routes for maximum efficiency and safety.',
        },
        {
            image: <MdNotificationsActive style={{color: '#ffbb50'}}/>,
            title: 'Parent Notifications',
            desc: 'Receive instant notifications about your child’s school bus.',
        },
        {
            image: <IoWarning style={{color: '#ffbb50'}}/>,
            title: 'SOS Alerts',
            desc: 'Instantly alert the school and parents in case of an emergency.',
        },
        {
            image: <ImProfile style={{color: '#ffbb50'}}/>,
            title: 'Student Attendance',
            desc: 'Parents can track their child’s attendance on the school bus.',
        },
        {
            image: <BsMegaphone style={{color: '#ffbb50'}}/>,
            title: 'Broadcasting',
            desc: 'Circulate any important information to parents and school staff instantly.',
        },
    ];

    return (
        <div>
            <main>
                <div className='grid grid-cols-1 lg:grid-cols-2 m-24'>
                    <div>
                        <h1 className='w-fit text-primary font-bold text-4xl md:text-6xl'>What is LittleMove?</h1>
                        <p className='mt-10 font-semibold text-xl md:text-2xl'>Little Move is a game-changing app-base platform that transforms school transportation into a stress-free experience for everyone involved. We harness cutting-edge technology to ensure:</p>
                    </div>
                    <img src='/bus.png' alt='' />
                </div>
            </main>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-24'>
                {items.map((item, index) => (
                    <div key={index} className='shadow-md rounded-lg p-6 mb-4 bg-[#FFF7E8] scale-100 hover:scale-105 hover:bg-amber-100'>
                        {item.image && <div className='text-4xl mb-4'>{item.image}</div>}
                        <h1 className='text-xl text-primary font-bold mb-2'>{item.title}</h1>
                        <p className='text-gray-600 font-semibold'>{item.desc}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default WhatIsLittleMove;

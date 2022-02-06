import React from 'react';

export default function Modal({ setIsModalShown, isModalShown }) {
    return (
        <div onClick={() => setIsModalShown(!isModalShown)} className='w-[100vw] h-[100vh] absolute top-0 left-0 z-10 bg-[#00000033] flex justify-center items-center'>
            <div className='w-[90vw] md:w-[70vw] lg:w-[40vw] bg-white rounded text-2xl text-center p-[2vw]'>
                Hello, I am Atul Morchhaly. I am a frontend Developer, i made this <span className='underline-1'>Quotera</span> project for my portfolio. I made this project using nextjs & tailwind css. This is not my design it is inspired from freeCodeCamp project, ThankYou.
            </div>
        </div>
    );
}

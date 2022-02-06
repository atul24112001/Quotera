import React from 'react';
import { FaTwitter, FaTumblr } from "react-icons/fa";

export default function QuoteCard({ bgColor }) {

    return (
        <div className='bg-white w-[50vw] h-[50vh] rounded text-4xl px-[3vw]'>
            <div className='py-[5vh]'>
                <p className={`bg-clip-text text-transparent ${bgColor}`}><span className='text-6xl'>“</span>If you cannot do great things, do small things in a great way.<span className='text-6xl'>”</span></p>
                <p className={`bg-clip-text text-right text-transparent ${bgColor}`}>- Napoleon Hill</p>

            </div>
            <div className='flex justify-between items-center text-3xl text-white py-[2vh]'>
                <div className='flex items-center'>
                    <button className={`${bgColor} p-[1vh] rounded m-[1vh]`}><FaTwitter /></button>
                    <button className={`${bgColor} p-[1vh] rounded m-[1vh]`}><FaTumblr /></button>
                </div>
                <button className={`${bgColor} rounded py-[1vh] px-[1vw]`}>New Quote</button>
            </div>
        </div>
    );
}

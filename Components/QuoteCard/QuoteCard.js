import React, { useEffect, useState } from 'react';
import { FaTwitter, FaTumblr, FaInfoCircle } from "react-icons/fa";

export default function QuoteCard({ setBgColor, bgColor }) {
    const [quotes, SetQuotes] = useState(null);
    const [quoteIndex, setQuoteIndex] = useState(0);

    useEffect(() => {
        const genrateQuote = () => {
            fetch("https://travel-junky-default-rtdb.firebaseio.com/quotes.json")
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    SetQuotes(data);
                });

        }

        genrateQuote();
    }, []);

    const newQuoteHandler = () => {
        setQuoteIndex(prev => prev + 1);

        const col = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

        let element = "";
        for (let index = 1; index < 7; index++) {
            element = element + col[Math.floor(Math.random() * 16)];
        }

        if (element.length === 6) {
            const mainColor = `#${element}`;
            setBgColor(mainColor)
        }
    }
    return (
        <div className='bg-white w-[90vw] md:w-[70vw] lg:w-[50vw] h-[50vh] relative rounded text-2xl md:text-3xl lg:text-4xl px-[3vw]'>
            <div className='py-[5vh] font-bold'>
                <p style={{ backgroundColor: `${bgColor}` }} className={`bg-clip-text text-transparent text-center`}><span className='text-6xl'>“</span>{quotes ? quotes[quoteIndex].text : "Genius is one percent inspiration and ninety-nine percent perspiration."}<span className='text-6xl'>”</span></p>
                <p style={{ backgroundColor: `${bgColor}` }} className={`bg-clip-text absolute bottom-[18vh] right-[3vw] text-right text-transparent`}>- {quotes ? quotes[quoteIndex].author : "Thomas Edison"}</p>

            </div>
            <div className='flex justify-between bo items-center text-1xl absolute bottom-[5vh] w-[84vw] md:w-[64vw] lg:w-[44vw] text-white py-[2vh]'>
                <div className='flex items-center'>
                    <a href='#' style={{ backgroundColor: `${bgColor}` }} className={` p-[1vh] rounded m-[1vh]`}><FaTwitter /></a>
                    <a href='#' style={{ backgroundColor: `${bgColor}` }} className={` p-[1vh] rounded m-[1vh]`}><FaTumblr /></a>
                </div>
                <button style={{ backgroundColor: `${bgColor}` }} onClick={newQuoteHandler} className={` rounded py-[1vh] px-[1vw]`}>New Quote</button>
            </div>
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import '../App.css';
import desktopImage from '../assets/images/desktop.jpg';
import mobileImage from '../assets/images/image-web-3-mobile.jpg';
import retroPcsImage from '../assets/images/image-retro-pcs.jpg';
import topLaptopsImage from '../assets/images/image-top-laptops.jpg';
import gamingGrowthImage from '../assets/images/image-gaming-growth.jpg';
import { Data } from './data';

const imageMap = {
    'image-retro-pcs.jpg': retroPcsImage,
    'image-top-laptops.jpg': topLaptopsImage,
    'image-gaming-growth.jpg': gamingGrowthImage,
};

const Content = () => {
    const [backgroundImage, setBackgroundImage] = useState(desktopImage);

    useEffect(() => {
        const updateImage = () => {
            if (window.innerWidth <= 640) {
                setBackgroundImage(mobileImage);
            } else {
                setBackgroundImage(desktopImage);
            }
        };

        updateImage(); // Initial check
        window.addEventListener('resize', updateImage); // Update on resize

        return () => window.removeEventListener('resize', updateImage); 
    }, []);

    return (
        <div className="w-full px-6">
            <div className="flex flex-col sm:flex-row w-full gap-4 pl-6 pr-6">
                <div className="flex flex-col w-full sm:w-3/4 gap-4">
                    <div
                        className="mainImage h-[300px] w-full"
                        style={{
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    <div className="flex flex-col sm:flex-row gap-6 mt-4 items-start sm:items-center">
                        <div className="sm:w-1/2">
                            <h1 className="font-extrabold text-5xl text-center">The Bright Future of Web 3.0?</h1>
                        </div>
                        <div className="sm:w-1/2 leading-7">
                            <p className="text-center sm:text-left">
                                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promises?
                            </p>
                            <button className="mt-4 w-[40%] sm:w-auto md:w-[40%] h-[50px] bg-red-400 text-white flex items-center justify-center">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="blackContainer w-full sm:w-1/4 bg-black text-white p-4 flex flex-col h-[450px]">
                    <h1 className="text-lg font-extrabold text-[gold] p-4 ">New</h1>
                    <div className='mb-6'>
                        <h2 className='font-bold'>Hydrgen vs Electic Cars</h2>
                        <p className='text-gray-500 text-sm'>Will hydrogen fueled cars evre catch up to EVs?</p>
                    </div><hr className='text-gray-200' />
                    <div className='mb-6'>
                        <h2 className='font-bold pt-4'>The Downsides of AI Artistry</h2>
                        <p className='text-gray-500 text-sm'>We are the possible adverse effects of on-demand AI generation?</p>
                    </div><hr className='text-gray-200' />
                    <div className='mb-6 pt-4'>
                        <h2 className='font-bold'>Is VC Funding Drying Up?</h2>
                        <p className='text-gray-500 text-sm'>Private funding by VC firm is down 50% YOY. We take a look at what that means.</p>
                    </div><hr className='text-gray-200' />
                    
                </div>
            </div>

            {/* Responsive grid */}
            <div className="w-full px-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 w-full pt-6 gap-6">
                    {Data.map(item => (
                        <div key={item.id} className="p-4 rounded-lg flex flex-row sm:flex-row items-start gap-4">
                            <img 
                                src={imageMap[item.img]} 
                                alt={item.heading} 
                                className="w-20 h-[100px] object-cover" 
                            />
                            <div className="flex flex-col justify-between">
                                <h3 className="font-bold text-xl text-[#bea725]">{item.heading}</h3> {/* Small heading */}
                                <h2 className="font-bold text-sm">{item.headin2}</h2> {/* Reduced font size */}
                                <p className=" sm:text-left text-sm text-gray-700">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Content;

import Lottie from 'lottie-react';
import React from 'react';
import animation_1 from '../../assets/animation_1.json'

const LottieUse = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center p-4'>
            <div>
                <Lottie className='w-[300px] lg:w-[500px]' animationData={animation_1} loop={true} />
            </div>
            <div>
                <div className="mb-5">
                    <h3 className='lg:text-4xl text-2xl font-bold'>Premium Directory</h3>
                    <p>A Premium Directory is a curated, often paid-access <br /> listing platform that showcases high-quality entries — <br /> typically businesses, professionals, products, or services </p>
                </div>
                <div className="mb-5">
                    <h3 className='lg:text-4xl text-2xl font-bold'>Unique set solution</h3>
                    <p>In programming, a unique set solution <br /> might refer to using a set data structure (which <br /> automatically ensures uniqueness) to solve a problem.</p>
                </div>
                <div>
                    <h3 className='lg:text-4xl text-2xl font-bold'>Enrich Web Experience</h3>
                    <p>"Enrich Web Experience" is a phrase often used in digital <br /> strategy, UX/UI design, marketing, and web development.</p>
                </div>
            </div>
        </div>
    );
};

export default LottieUse;
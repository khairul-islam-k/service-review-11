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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, expedita?</p>
                </div>
                <div className="mb-5">
                    <h3 className='lg:text-4xl text-2xl font-bold'>Unique set solution</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, expedita?</p>
                </div>
                <div>
                    <h3 className='lg:text-4xl text-2xl font-bold'>Enrich Web Experience</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, expedita?</p>
                </div>
            </div>
        </div>
    );
};

export default LottieUse;
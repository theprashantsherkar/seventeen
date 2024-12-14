'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {

    const router = useRouter();
    const redirect = async () => {
        await new Promise((r) => setTimeout(r, 8350));
        router.push('/q4');

    }

    useEffect(() => {
        redirect();
    })

    return (
        <div className='bg-amber-400 w-full h-screen flex items-center flex-col justify-center' >

            <h1 className='font-semibold text-2xl'>i love youu.</h1>
            <video
                className='h-[400px] w-[200px]'
                src="/video.mp4"
                controls
                width="600"
                autoPlay

            >
               relax boys~
            </video>

        </div>
    )
}

export default Page
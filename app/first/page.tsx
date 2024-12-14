import { Button } from '@/components/ui/button'
import { CoolMode } from '@/components/ui/cool-mode'
import { WavyBackground } from '@/components/ui/wavy-background'
import Link from 'next/link'
import React from 'react'

function Page() {
    return (
        <WavyBackground className="max-w-4xl mx-auto h-screen flex items-center justify-center  pb-40 ">    
            <div className='flex flex-col items-center justify-center gap-6'>
                <p className="text-xl md:text-5xl text-white font-bold inter-var text-center">
                    One Month, Forever to Go ❤️
                </p>
                <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                    Every day with you feels like a blessing, and I can’t help but feel grateful for having you by my side. You’ve taught me what it means to truly care, to laugh endlessly, and to love unconditionally.
                </p>

                <p className='text-base md:text-lg mt-4 text-white font-normal inter-var text-center'>
                    I have something for you, but before that lets have some fun.
                </p>
                <Link href={"/q1"}>
                    <CoolMode>
                        <Button>Tap here</Button>
                    </CoolMode>
                </Link>
            </div>
        </WavyBackground>
    )
}

export default Page
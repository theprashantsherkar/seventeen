'use client';

import { CoolMode } from '@/components/ui/cool-mode'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation'

function page() {

    const router = useRouter()

    return (
        <div className='bg-slate-900 text-white w-full min-h-screen flex flex-col items-center justify-center gap-4'>
            <div>and one final question.</div>
            <div>
                who loves the other more?
            </div>
            <div className='flex items-center justify-center gap-3'>
                <Link href={"/result"}>
                    <CoolMode>
                        <Button>
                            TANVII
                        </Button>
                    </CoolMode>
                </Link>
                <Link href={"/result"}>
                    <CoolMode>
                        <Button>
                            PRASHU
                        </Button>
                    </CoolMode>
                </Link>
            </div>
        </div>
    )
}

export default page
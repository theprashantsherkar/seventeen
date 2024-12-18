'use client';

import { CoolMode } from '@/components/ui/cool-mode'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import React from 'react'

function Page() {


    return (
        <div className='bg-slate-900 text-white w-full min-h-screen flex flex-col items-center justify-center gap-4'>
            <div>and one final question.</div>
            <div>
                who loves the other more?
            </div>
            <div className='flex items-center justify-center gap-3'>
                <Link href={"/result"}>
                    <CoolMode options={{
                                              particle:
                                                  "https://pbs.twimg.com/profile_images/1782811051504885763/YR5-kWOI_400x400.jpg",
                                          }}>
                        <Button>
                            TANVII
                        </Button>
                    </CoolMode>
                </Link>
                <Link href={"/result"}>
                    <CoolMode options={{
                                              particle:
                            "heart.png",
                                          }}>
                        <Button>
                            PRASHU
                        </Button>
                    </CoolMode>
                </Link>
            </div>
        </div>
    )
}

export default Page
'use client';

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { CoolMode } from '@/components/ui/cool-mode'
import Link from 'next/link';
import React from 'react'
import { toast } from 'sonner';

export default function Page() {

    const handleContinue = () => {
        toast("Reconsider your decision Babe!");
    }
    return (
        <div className='bg-blue-950 w-full h-screen flex flex-col items-center justify-center gap-6'>
            <div className='text-white text-3xl'>
                What makes you happy?
            </div>
            <div className='flex items-center justify-center gap-6'>
                <Link href={"/q3"}>
                    <CoolMode>
                        <Button>
                            PRASHU
                        </Button>
                    </CoolMode>
                </Link>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline">Mutton Biryani</Button>

                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. Asa kelas tar Prashu chidel mag!
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={()=>toast("Proud of you, Now choose me!")}>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleContinue}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    )
}


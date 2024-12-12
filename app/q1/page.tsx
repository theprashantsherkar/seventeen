
import React from 'react'
import ShakeButton from '../../components/button/ShakeButton'
import { CoolMode } from '@/components/ui/cool-mode'
import SuccessButton from '@/components/button/SuccessButton'
import Link from 'next/link'


function page() {
  return (
      <div className='bg-black text-white w-full h-screen flex gap-6 items-center justify-center flex-col'>
          <div className='text-3xl'>
              Who fell for whom first?
          </div>
          <div className='flex items-center justify-center gap-3'>
              <Link href={"/q2"}>
                  
                      <CoolMode>
                          <SuccessButton value={"PRASHU"} />
                      </CoolMode>
                
              </Link>
              <ShakeButton value="YOU"/>
          </div>
     </div>
  )
}

export default page
import ShakeButton from '@/components/button/ShakeButton'
import SuccessButton from '@/components/button/SuccessButton'
import { CoolMode } from '@/components/ui/cool-mode'
import { Link } from 'lucide-react'
import React from 'react'

function page() {
  return (
      <div>
          <div>and one final question.</div>
          <div>
              who loves the other more?
          </div>
          <div className='flex items-center justify-center gap-3'>
              <Link href={"/q2"}>
                  <CoolMode>
                      <SuccessButton value={"PRASHU"} />
                  </CoolMode>
              </Link>
              <ShakeButton value="YOU" />
          </div>
    </div>
  )
}

export default page
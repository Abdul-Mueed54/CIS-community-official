import React from 'react'

function Hero() {
      return (
            <div className='bg-white text-white  text-5xl font-semibold h-screen text-center items-center shadow-blue-300'>
                  <div className='flex flex-col items-center '><img height={300} width={300} src="src/Logo/CIS-Logo.svg" alt="Community logo" />
                  </div>
                  CIS Community
            </div>
      )
}

export default Hero
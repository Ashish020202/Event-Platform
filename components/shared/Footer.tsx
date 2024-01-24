import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='flex-center gap-3  flex-between flex-col p-5 sm:flex-row'>
        <Link href={'/'}>
          <img src="/assets/images/logo.svg" alt="logo"
          width={128}
          height={35} />
        </Link>

        <p>2024 Eventee. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer

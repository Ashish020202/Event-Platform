import Link from 'next/link'
import React from 'react'
import { SignedIn, UserButton } from "@clerk/nextjs";
import { SignedOut } from '@clerk/nextjs';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <div>
      <header className='wrapper'>
        <div className='flex justify-between'>
            <Link href={"/"} className='w-36'>
                <img src="/assets/images/logo.svg" width={138} height={38} alt="eventee logo" />
            </Link>

            <div>
             <SignedIn>
                <UserButton afterSignOutUrl='/' />
             </SignedIn>
             <SignedOut>
                <Button asChild className='rounded-full bg-yellow-600'>
                    <Link href={'/sign-in'}>Login</Link>
                </Button>
             </SignedOut>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header

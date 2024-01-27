import Link from 'next/link'
import React from 'react'
import { SignedIn, UserButton } from "@clerk/nextjs";
import { SignedOut } from '@clerk/nextjs';
import { Button } from '../ui/button';
import NavItem from './NavItem';
import SmallNav from './SmallNav';

const Header = () => {
  return (
    <div className="bg-slate-200 h-20">
      <header className='wrapper'>
        <div className='flex justify-between'>
            <Link href={"/"} className='w-36'>
                <img src="/assets/images/logo.svg" width={138} height={38} alt="eventee logo" />
            </Link>

            <SignedIn>
              <nav className='md:flex-between hidden w-full max-w-xs'>
                <NavItem />
              </nav>
            </SignedIn>

            <div className='flex flex-flex-between'>
             <SignedIn>
                <UserButton afterSignOutUrl='/' />
                <SmallNav />
             </SignedIn>
             <SignedOut>
                <Button asChild className='rounded-full bg-blue-900'>
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

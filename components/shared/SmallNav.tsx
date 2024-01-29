import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const SmallNav = () => {
  return (
    <nav>
  <Sheet>
  <SheetTrigger className="flex mr-3">
    <img src="/assets/icons/menu.svg" alt="" />
  </SheetTrigger>
    <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
         Navbar
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </nav>
  )
}

export default SmallNav

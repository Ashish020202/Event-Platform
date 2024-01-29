import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <section className='bg-yellow-100 py-5 md:py-10 '>
        <div className='wrapper grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-0'>
          <div className='flex flex-col gap-5 justify-center'>
            <h1 className='h1-bold '>Event Management 
            At your Fingertips.</h1>
            <p className='p-regular-20 md:p-regular-24 '>Bring all your events together
            Get a consolidated view of all your events</p>
            <Button className='size-lg button w-full sm:w-fit '>
              <Link href='#events'>
                Explore Events
              </Link>
            </Button>
          </div>
          <img src="/assets/images/hero.png" alt="" width={1000} height={1000} className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'/>
        </div>
      </section>
    </>
  )
}

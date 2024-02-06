'use client'
import {sidebarLinks} from '@/constants'
import { SignOutButton, SignedIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const LeftSidebar = () => {
    const router=useRouter();
    const pathname=usePathname();
  return (
    <section className=' custom-scrollbar leftsidebar'>
        <div className=' gap-6 px-6 flex w-full flex-1 flex-col'>
        {
            sidebarLinks.map((data)=>{
            const isActive= (pathname.includes(data.route) && data.route.length>1) ||
            pathname === data.route
            return(
                <Link href={data.route}
                key={data.label} 
                className={`leftsidebar_link ${isActive && ' bg-orange-600' }`}>
                    <Image src={data.imgURL} alt={data.label} height={24} width={24} />
                    <p className=' max-lg:hidden text-light-1'>{data.label}</p>
                    </Link>
            )})
        }
        
        </div>
        <div className=' mt-10 px-6'>
                <SignedIn>
                    <SignOutButton signOutCallback={()=>router.push('/sign-in')}>
                        <div className=" flex cursor-pointer gap-4 p-4">
                        <Image src="/assets/logout.svg"
                        alt="lgout" height={24} width={24}/>
                        <p className=' max-lg:hidden text-light-2'>Logout</p>
                        </div>
                        
                    </SignOutButton>
                </SignedIn>
            
        </div> 
    </section>
  )
}

export default LeftSidebar
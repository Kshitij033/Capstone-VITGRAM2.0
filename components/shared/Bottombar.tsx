'use client'
import { sidebarLinks } from '@/constants'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react'
//for mobile only
const Bottombar = () => {
    const pathname=usePathname();
  return (
    <section className=' bottombar'>
        <div className=' bottombar_container'>

        {
            sidebarLinks.map((data)=>{
            const isActive= (pathname.includes(data.route) && data.route.length>1) ||
            pathname === data.route
            return(
                <Link href={data.route}
                key={data.label} 
                className={`bottombar_link ${isActive && ' bg-orange-600' }`}>
                    <Image src={data.imgURL} alt={data.label} height={24} width={24} />
                    <p className=' max-sm:hidden text-subtle-medium text-light-1'>
                        {data.label.split(/\s+/)[0]}
                        
                        </p>
                    </Link>
            )})// here the split is done if there is two word only first one is taken
        }
        
        </div>
    </section>
  )
}

export default Bottombar
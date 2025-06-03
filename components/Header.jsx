import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <>
        <div className='main-header-wrap py-5 px-8 flex justify-center'>
            <div className="inner-header-wrap w-full max-w-[1400px] flex flex-row justify-center items-center">
                <div className="logo-col-wrap w-full max-w-[25%]">
                    <div className="inner-col-wrap">
                        <Link href={"/"}>
                            <Image src="/next.svg" width={150} height={150} alt='Site logo' className='dark:invert' />
                        </Link>
                    </div>
                </div>
                <div className="main-nav-col-wrap w-full max-w-[50%]">
                    <div className="inner-col-wrap">
                        <ul className='flex justify-center gap-5 text-lg'>
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/about"}>About</Link>
                            </li>
                            <li>
                                <Link href={"/blog"}>Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="action-buttons-wrap w-full max-w-[25%]">
                    <div className="inner-col-wrap">
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header

import Link from "next/link";
import React, {useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

import { Menu } from '@headlessui/react';
import DropdownLink from './dropdownlink';

const Header = () => {


  const { data:session} = useSession();
  const logoutClickHandler = () => {
    signOut({ callbackUrl: '/' });
  };
  
  return (
    <div className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4 pt-4">
     
       
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">      
      
              <div className=''>
                      <Link href='https://localflyer.online'>
                        <div className='mobile: text-sm text-black font-bold  laptop:text-lg text-black font-bold'>Localflyer.online</div>
                      </Link>
              </div>
          
         
        <div >
        <ul className="hidden lg:inline-flex gap-8 uppercase text-sm font-semibold">
        <Link href='https://localflyer.online'>
            <li className="headerLi">Home</li>
            </Link>
            <Link href='https://blog.localflyer.online'>
            <li className="headerLi">Beauty News</li>
            </Link>
            <Link href='https://youtube.localflyer.online' >
            <li className="headerLi">Beauty video</li>
            </Link>
            <Link href='https://landingpage.localflyer.online'>
            <li className="headerLi">Landing Page</li>
            </Link>
            <li className="headerLi">Contact</li>
          </ul>
        </div>
       <div className="md:hidden">
       <Menu as="div" className="relative inline-block z-10 ml-12">
                            <Menu.Button className="text-black font-bold text-md">       
                            {/* { session.user.name } */}
                            Menu
                            </Menu.Button>
                            <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg font-bold pl-2 text-blue-500">
                              
                              <Menu.Item>
                              <DropdownLink
                                  className="dropdown-link"
                                  href="https://blog.localflyer.online"
                                >
                                  Beauty News
                                </DropdownLink>
                              </Menu.Item>
                              <Menu.Item>
                                <DropdownLink
                                  className="dropdown-link"
                                  href="https://youtube.localflyer.online"
                                >
                                  Beauty video
                                </DropdownLink>
                              </Menu.Item>
                              <Menu.Item> 
                                <DropdownLink
                                  className="dropdown-link"
                                  href="'https://landingpage.localflyer.online"
                                >
                                  Landing Page
                                </DropdownLink>
                              </Menu.Item>
                             
                            
                              <Menu.Item>
                              <DropdownLink
                                  className="dropdown-link"
                                  href="#"
                                >
                                 contact
                                 </DropdownLink>
                              </Menu.Item>
                              
                            </Menu.Items>
                          </Menu>
       </div>
       <div className="flex items-center gap-8 text-lg">
        
                  {
                    session? ( <button 
                                  onClick={() =>signOut()} 
                                  className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor 
                                  px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all 
                                  duration-300 active:bg-yellow-600">
                                  Sign Out
                              </button>
                            ) : (
                              <button 
                                  onClick={() =>signIn()} 
                                  className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor 
                                  px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all 
                                  duration-300 active:bg-yellow-600">
                                  Sign In
                              </button>
                            )
                  }     
        </div>
      </div>       
    </div>
  );
};

export default Header;
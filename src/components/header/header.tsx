import React from 'react'
import Image from 'next/image'
import Logo from '@/../public/Logo.png'
import { FaCartShopping } from 'react-icons/fa6'
import DropDown from './dropDown'

const Header: React.FC = () => {
  return (
    <header className="m-auto mt-8 flex w-full rounded-2xl bg-gray-600 p-8 text-white sm:w-3/4">
      <div className="flex h-8 w-11/12 items-center justify-start">
        <Image src={Logo} alt="Logo" width={72} />
        <nav className=" ml-9 w-2/5 md:w-4/5 ">
          <div className="relative flex items-center justify-center md:hidden">
            <DropDown />
          </div>

          <ul className=" hidden w-8/12 justify-evenly  md:flex ">
            <li>
              <a href="#" className="hover:text-gray-300">
                Categorias
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Novidades
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Promoções
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex h-8">
        <h3 className="mr-3 text-nowrap">0 - produto(s)</h3>
        <FaCartShopping className="text-xl hover:cursor-pointer hover:text-gray-300" />
      </div>
    </header>
  )
}

export default Header

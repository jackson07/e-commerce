import React from 'react'
import Image from 'next/image'
import Logo from '@/../public/Logo.png'
import { FaCartShopping } from 'react-icons/fa6'

const Header: React.FC = () => {
  return (
    <header className="container mx-auto my-12 flex h-20 max-w-7xl items-center justify-between rounded-2xl bg-gray-600 p-8 text-white">
      <div className="flex items-center justify-start">
        <Image src={Logo} alt="Logo" />
        <nav className="mx-9">
          <ul className="flex space-x-4">
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
      <div className="flex w-36 items-center justify-between ">
        <h3>0 - produto(s)</h3>
        <FaCartShopping className="text-xl hover:cursor-pointer hover:text-gray-300" />
      </div>
    </header>
  )
}

export default Header

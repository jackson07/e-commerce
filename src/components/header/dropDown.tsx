'use client'

import { useState } from 'react'
import { IoMdMenu } from 'react-icons/io'

const DropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function toogleDropDown(): void {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <IoMdMenu className="text-5xl" onClick={toogleDropDown} />
      {isOpen && (
        <ul className="absolute top-10 z-10 flex h-auto w-36 flex-col items-center justify-center rounded-2xl bg-slate-50 ">
          <li className="mx-auto pb-5 pt-5">
            <a href="#" className="text-gray-300">
              Categorias
            </a>
          </li>
          <li className="flex w-full items-center justify-center bg-slate-600 pb-5 pt-5">
            <a href="#" className=" text-gray-300">
              Novidades
            </a>
          </li>
          <li className="pb-5 pt-5">
            <a href="#" className="text-gray-300">
              Promoções
            </a>
          </li>
        </ul>
      )}
    </>
  )
}

export default DropDown

import React from 'react'

interface CategoryCard {
  price: number
  discount: number
  title: string
  category: string
  platform: string
  description: string
  backgroundColor: 'black' | 'gray'
}

export default function CategoryCard({
  price,
  discount,
  title,
  category,
  platform,
  description,
  backgroundColor,
}: CategoryCard) {
  const bgColorClass = backgroundColor === 'black' ? 'bg-black' : 'bg-gray-800'
  return (
    <div
      className={`h-[420px] w-60 rounded ${bgColorClass} p-2 text-white opacity-85`}
    >
      <div className="flex h-[250px]  w-[222px] flex-row justify-end space-x-3 bg-[url('https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png')] bg-cover p-2">
        <div className="flex h-6 w-14 items-center justify-center rounded-lg bg-green-600 text-sm">
          R${price}
        </div>
        <div className="flex h-6 w-14 items-center justify-center rounded-lg bg-green-600 text-sm">
          -{discount}%
        </div>
      </div>
      <div className="p-1">
        <h2 className="font-bold">{title}</h2>
        <div className="flex space-x-3 p-1">
          <div className="flex h-6 w-14 items-center justify-center rounded-lg bg-green-600 text-sm">
            {category}
          </div>
          <div className="flex h-6 w-16 items-center justify-center rounded-lg bg-green-600 text-sm">
            {platform}
          </div>
        </div>
        <div>{description}</div>
      </div>
    </div>
  )
}

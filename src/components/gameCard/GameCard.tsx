import { Product } from '@/app/page'
import Image from 'next/image'
import { calculatePrice } from '../highlightedProduct/HighlightedProduct'

type GameCardProps = {
  product: Product
  bgDark: boolean
}

export default function GameCard({ product, bgDark }: GameCardProps) {
  return (
    <div
      className={`mr-12 h-105 w-60 rounded-lg pt-2 ${bgDark ? 'bg-gray-700' : 'bg-gray-600'} `}
    >
      <div className="relative m-auto h-64 w-56 rounded-sm">
        <Image
          src={product.image}
          alt={product.name}
          width={216}
          height={250}
          style={{ height: '250px', margin: 'auto' }}
        ></Image>
        {product.isReleased && (
          <div className="absolute right-14 top-2 flex h-5 w-14 items-center justify-center rounded-lg bg-green-400 ">
            <p className="text-xs text-white">
              R${' '}
              {calculatePrice({
                price: product.price,
                discount: product.discount,
              })}
            </p>
          </div>
        )}

        <div
          className={`absolute right-2 top-2 flex h-5  ${product.isReleased ? 'w-9' : 'w-14'} items-center justify-center rounded-lg bg-green-400 `}
        >
          <p className="text-xs text-white">
            {product.isReleased
              ? `-${product.discount * 100}%`
              : product.dateReleased}
          </p>
        </div>
      </div>
      <div className="m-auto w-52">
        <p className="text-white">{product.name}</p>
        <div className="mt-1 flex">
          <div className="mr-5 flex h-5 w-auto items-center justify-center rounded-lg bg-green-400 p-5">
            <p className="text-xs text-white">{product.category}</p>
          </div>
          <div className="flex h-5 w-auto items-center justify-center rounded-lg bg-green-400 p-5">
            <p className="text-xs text-white">{product.platform}</p>
          </div>
        </div>
        <p className="mt-2 line-clamp-3 text-white">{product.description}</p>
      </div>
    </div>
  )
}

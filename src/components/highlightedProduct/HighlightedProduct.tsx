import { Product } from '@/app/page'
import Image from 'next/image'

export function calculatePrice({
  price,
  discount,
}: {
  price: number
  discount: number
}): string {
  return (price - price * discount).toFixed(2)
}

export default function HighlightedProduct(product: Product) {
  return (
    <div className="relative mt-24 h-144 w-full">
      <Image src={product.image} alt={product.name} fill={true}></Image>
      <div className="absolute left-2  top-8 flex h-9 w-36 items-center justify-center rounded-lg bg-green-400 md:left-5% md:top-5%">
        <p className="text-md text-white">Destaque do dia!</p>
      </div>
      <div className="absolute bottom-5% left-5% w-5/12 text-wrap font-bold text-white">
        <p className="text-4xl">{product.name}</p>
        <p className="mt-5 text-2xl line-through ">De R$ {product.price}</p>
        <p className="text-2xl">
          Por apenas R${' '}
          {calculatePrice({ price: product.price, discount: product.discount })}
        </p>
      </div>
      <div className="absolute bottom-5% right-5%  cursor-pointer rounded-lg border-2 border-white hover:border-green-400">
        <p className="text-md p-3 text-white hover:text-green-400">
          Aproveitar!
        </p>
      </div>
    </div>
  )
}

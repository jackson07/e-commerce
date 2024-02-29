import HighlightedProduct from '@/components/highlightedProduct/HighlightedProduct'
import GameCard from '../components/gameCard/GameCard'

export type Product = {
  id: string
  name: string
  image: string
  price: number
  discount: number
  platform: string
  category: string
  summary: string
  description: string
  developer: string
  editor: string
  languages: string
  isReleased: boolean
  dateReleased: string
  gallery: string[]
}

async function getData() {
  const res = await fetch('http://localhost:3333/products')
  if (!res) {
    throw new Error('Failed to get data!')
  }
  return res.json()
}

function getHighlightOfTheDay(data: Product[]) {
  let foundProduct = data[0]
  for (let i = 1; i < data.length; i++) {
    if (data[i].discount > foundProduct.discount) {
      foundProduct = data[i]
    }
  }
  return foundProduct
}

function getDailyDeals(data: Product[]) {
  const products = []
  for (let i = 0; i < data.length; i++) {
    if (data[i].discount > 0) {
      products.push(data[i])
    }
  }
  return products.sort(function (a, b) {
    return b.discount - a.discount
  })
}

function getToBeReleased(data: Product[]) {
  const products = []
  for (let i = 0; i < data.length; i++) {
    if (!data[i].isReleased) {
      products.push(data[i])
    }
  }
  return products
}

export default async function Home() {
  try {
    const products = await getData()
    const highlightedProduct = getHighlightOfTheDay(products)
    const dailyDeals = getDailyDeals(products)
    const toBeReleased = getToBeReleased(products)

    return (
      <>
        <main className="flex  flex-col items-center justify-between">
          <HighlightedProduct {...highlightedProduct}></HighlightedProduct>
        </main>
        <div className="bg-gray-600 pb-12">
          <h2 className="ml-5% pb-8 pt-7 text-2xl text-white">Promoções</h2>
          <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-100  ">
            <div className=" ml-5% flex w-11/12 overflow-x-auto ">
              {dailyDeals.map((product) => (
                <GameCard key={product.id} product={product} bgDark={true} />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-700 pb-12">
          <h2 className="ml-5% pb-8 pt-7 text-2xl text-white">Em Breve</h2>
          <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-100  ">
            <div className=" ml-5% flex w-11/12 overflow-x-auto ">
              {toBeReleased.map((product) => (
                <GameCard key={product.id} product={product} bgDark={false} />
              ))}
            </div>
          </div>
        </div>
      </>
    )
  } catch (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        Failed to get data
      </main>
    )
  }
}

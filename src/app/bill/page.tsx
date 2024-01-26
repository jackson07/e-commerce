import { AiOutlineBarcode } from 'react-icons/ai'
import { FaCreditCard } from 'react-icons/fa'

export default function Bill() {
  return (
    <>
      <main className="flex w-full flex-col items-center space-y-14 bg-black py-32 text-white">
        <div className="h-70 w-[1024px] rounded-lg bg-gray-600 p-5">
          <h1 className="pb-5 font-bold">Dados de Cobrança</h1>
          <div className="flex space-x-6">
            <div className="h-14 w-72 space-y-1">
              <h3 className="text-sm">Nome Completo</h3>
              <input
                type="text"
                placeholder="Digite seu nome completo"
                className="w-full rounded-sm border border-gray-100 p-1 text-black focus:border-black focus:outline-none"
              />
            </div>
            <div className="h-14 w-72 space-y-1">
              <h3 className="text-sm">E-mail</h3>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full rounded-sm border border-gray-100 p-1 text-black focus:border-black focus:outline-none"
              />
            </div>
            <div className="h-14 w-72 space-y-1">
              <h3 className="text-sm">CPF</h3>
              <input
                type="number"
                placeholder="Informe o CPF"
                className="w-full rounded-sm border border-gray-100 p-1 text-black focus:border-black focus:outline-none"
              />
            </div>
          </div>
          <h2 className="pb-2 pt-7 font-bold">
            Dados de entrega - Conteúdo digital
          </h2>
          <div className="flex space-x-6">
            <div className="h-14 w-72 space-y-1">
              <h3 className="text-sm">E-mail</h3>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full rounded-sm border border-gray-100 p-1 text-black focus:border-black focus:outline-none"
              />
            </div>
            <div className="h-14 w-72 space-y-1">
              <h3 className="text-sm">Confirme o e-mail</h3>
              <input
                type="email"
                placeholder="Confirme seu e-mail"
                className="w-full rounded-sm border border-gray-100 p-1 text-black focus:border-black focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex h-48 w-[1024px] flex-col space-y-6 rounded-lg bg-gray-600 p-5">
          <h1 className="font-bold">Pagamento</h1>
          <div className="space-x-4">
            <button className="inline-flex h-8 w-38 items-center justify-center space-x-1 rounded-lg bg-green-500 text-sm font-bold">
              <AiOutlineBarcode className="h-5 w-5" />
              <span>Boleto bancário</span>
            </button>
            <button className="inline-flex h-8 w-38 items-center justify-center space-x-1 rounded-lg bg-black text-sm font-bold">
              <FaCreditCard className="h-5 w-5" />
              <span>Cartão de crédito</span>
            </button>
          </div>
          <div className="text-sm">
            Ao optar por essa forma de pagamento, é importante lembrar que a
            confirmação pode levar até 3 dias úteis, devido aos prazos
            estabelecidos pelas instituições financeiras. Portanto, a liberação
            do código de ativação do jogo adquirido ocorrerá somente após a
            aprovação do pagamento do boleto.
          </div>
        </div>
        <div className="flex w-[1024px] flex-row justify-start">
          <button className="h-9 w-48 rounded-lg bg-green-500">
            Finalizar Compra
          </button>
        </div>
      </main>
    </>
  )
}

import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-600 text-white">
      <div className=" ml-9 flex flex-col pt-3">
        <a href="#" className=" hover:text-gray-300">
          <h2 className="text-2xl">Categorias</h2>
        </a>
        <div className=" flex w-2/3 flex-col justify-between md:flex-row md:flex-wrap">
          <a href="#" className="mt-3 hover:text-gray-300">
            <p className="text-sm">RPG</p>
          </a>
          <a href="#" className="mt-3 hover:text-gray-300">
            <p className="text-sm">Ação</p>
          </a>
          <a href="#" className="mt-3 hover:text-gray-300">
            <p className="text-sm">Aventura</p>
          </a>
          <a href="#" className="mt-3 hover:text-gray-300">
            <p className="text-sm">Puzzle</p>
          </a>
          <a href="#" className="mt-3 hover:text-gray-300">
            <p className="text-sm">Indie</p>
          </a>
          <a href="#" className="mt-3 hover:text-gray-300">
            <p className="text-sm">Esportes</p>
          </a>
          <a href="#" className="mt-3 hover:text-gray-300">
            <p className="text-sm">Corrida</p>
          </a>
          <a href="#" className="mt-3 hover:text-gray-300">
            <p className="text-sm">Terror</p>
          </a>
          <a href="#" className="mt-3 hover:text-gray-300">
            <p className="text-sm">Tiro</p>
          </a>
        </div>
      </div>
      <div className="ml-9 mt-9">
        <a href="#" className="hover:text-gray-300">
          <h2 className="text-2xl">Acesso rápido</h2>
        </a>
        <div className="flex w-96 flex-col justify-between md:flex-row md:flex-wrap ">
          <a href="#" className="mt-3 hover:text-gray-300">
            <p className="text-sm">Novidades</p>
          </a>
          <a href="#" className="mt-3 hover:text-gray-300">
            <p className="text-sm">Promoções</p>
          </a>
          <a href="#" className="mt-3 hover:text-gray-300">
            <p className="text-sm">Em breve</p>
          </a>
        </div>
      </div>

      <p className="pb-9 pt-9 text-center">
        {new Date().getFullYear()} &copy; E-PLAY Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer

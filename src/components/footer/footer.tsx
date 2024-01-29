import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-600 text-white">
      <div className="container p-20 pt-14">
        <a href="#" className="hover:text-gray-300">
          <h2 className="text-2xl">Categorias</h2>
        </a>
        <div className="flex max-w-xl flex-wrap items-center justify-between pt-3">
          <a href="#" className="hover:text-gray-300">
            <p className="text-sm">RPG</p>
          </a>
          <a href="#" className="hover:text-gray-300">
            <p className="text-sm">Ação</p>
          </a>
          <a href="#" className="hover:text-gray-300">
            <p className="text-sm">Aventura</p>
          </a>
          <a href="#" className="hover:text-gray-300">
            <p className="text-sm">Puzzle</p>
          </a>
          <a href="#" className="hover:text-gray-300">
            <p className="text-sm">Indie</p>
          </a>
          <a href="#" className="hover:text-gray-300">
            <p className="text-sm">Esportes</p>
          </a>
          <a href="#" className="hover:text-gray-300">
            <p className="text-sm">Corrida</p>
          </a>
          <a href="#" className="hover:text-gray-300">
            <p className="text-sm">Terror</p>
          </a>
          <a href="#" className="hover:text-gray-300">
            <p className="text-sm">Tiro</p>
          </a>
        </div>

        <a href="#" className="hover:text-gray-300">
          <h2 className="pt-12 text-2xl">Acesso rápido</h2>
        </a>
        <div className=" flex max-w-96 items-center justify-between pt-3">
          <a href="#" className="hover:text-gray-300">
            <p className="text-sm">Novidades</p>
          </a>
          <a href="#" className="hover:text-gray-300">
            <p className="text-sm">Promoções</p>
          </a>
          <a href="#" className="hover:text-gray-300">
            <p className="text-sm">Em breve</p>
          </a>
        </div>
      </div>
      <p className="px-20 py-0 pb-8">
        {new Date().getFullYear()} &copy; E-PLAY Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer

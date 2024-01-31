import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-600 text-white">
      <div className="container px-[171px] py-20 pt-8">
        <div className="flex max-h-[51px] max-w-[375px] flex-col">
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
        </div>
        <div className="flex max-h-[51px] max-w-[213px] flex-col py-20 pt-8">
          <a href="#" className="hover:text-gray-300">
            <h2 className="text-2xl">Acesso rápido</h2>
          </a>
          <div className="flex items-center justify-between pt-3">
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
      </div>
      <p className="px-[171px] py-0 pb-8">
        {new Date().getFullYear()} &copy; E-PLAY Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer

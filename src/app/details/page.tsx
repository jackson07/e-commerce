import React from 'react'
import Image from 'next/image'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import cardProfile from '../../../public/cardImage.jpeg'

export default function Details() {
  return (
    <>
      <Header />
      <main>
        <div className="flex h-120 w-full flex-col justify-between bg-[url('https://tm.ibxk.com.br/2022/03/21/21141233184394.jpg')] bg-cover bg-center px-36 text-white">
          <div className="flex space-x-6 pt-4">
            <h2 className="flex h-6 w-14 justify-center rounded-lg bg-green-600">
              RPG
            </h2>
            <h2 className="flex h-6 w-14 justify-center rounded-lg bg-green-600">
              FPS
            </h2>
          </div>
          <div className="flex h-44 w-70 flex-col justify-between bg-black p-2 opacity-85">
            <h1 className="pt-3 text-3xl font-bold text-white">
              Hogwarts Legacy
            </h1>
            <div>
              <h3 className="line-through">De R$ 290,90</h3>
              <h3>Por R$ 190,90</h3>
            </div>
            <button className="h-9 w-52 rounded-md bg-green-500">
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
        <div className="h-70 w-full bg-black px-36 text-white">
          <h1 className="pb-10 pt-5 font-bold">Sobre o jogo</h1>
          <h3 className="w-3/4">
            Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto
            ambientado no mundo introduzido <br /> pela primeira vez nos livros
            do Harry Potter. Embarque em uma jornada por locais novos e
            familiares <br /> enquanto explora e descubra animais fantásticos,
            personalize seu personagem e crie poções, domine <br /> o lançamento
            de feitiços, aprimore talentos e torne-se o bruxo que deseja
            ser.Experimente Hogwarts
            <br /> da década de 1800. Seu personagem é um estudante com chave de
            um antigo segredo que ameaça <br /> destruir o mundo bruxo. Faça
            aliados, lute contra os bruxos das trevas e decida o destino do
            mundo
            <br /> bruxo. Seu legado é o que você faz dele. Viva o Inesperado.
          </h3>
        </div>
        <div className="h-64 w-full bg-gray-700 px-36">
          <h1 className="pb-10 pt-5 font-bold text-white">Mais detalhes</h1>
          <div className="flex space-x-1">
            <h2 className="text-white">
              <span className="font-bold">Plataforma:</span> PlayStation 5
            </h2>
          </div>
          <div className="flex space-x-1">
            <h2 className="text-white">
              <span className="font-bold">Desenvolvedor:</span> Avalanche
              Software
            </h2>
          </div>
          <div className="flex space-x-1">
            <h2 className="text-white">
              <span className="font-bold">Editora:</span> Portkey Games,
              subsidiária da Warner Bros. Interactive Entertainment
            </h2>
          </div>
          <div className="flex space-x-1">
            <p className="text-white">
              <span className="font-bold"> Idiomas:</span> O jogo oferece
              suporte a diversos idiomas, incluindo inglês, espanhol, francês,
              alemão,
              <br />
              italiano, português, entre outros. As opções de áudio e legendas
              podem ser ajustadas nas
              <br /> configurações do jogo.
            </p>
          </div>
        </div>

        <div className="h-70 w-full bg-black px-36">
          <h1 className="py-5 font-bold text-white">Galeria</h1>
          <div className="flex justify-start space-x-5 py-3">
            <Image
              src={cardProfile}
              alt="Harry"
              className="h-38 w-38 rounded border border-white"
            />
            <Image
              src={cardProfile}
              alt="Harry"
              className="h-38 w-38 rounded border border-white"
            />
            <Image
              src={cardProfile}
              alt="Harry"
              className="h-38 w-38 rounded border border-white"
            />
            <Image
              src={cardProfile}
              alt="Harry"
              className="h-38 w-38 rounded border border-white"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

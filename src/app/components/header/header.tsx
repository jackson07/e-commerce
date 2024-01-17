import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-700 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Meu Aplicativo</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-gray-300">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300">Sobre</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

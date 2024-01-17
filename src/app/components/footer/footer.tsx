import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-700 text-white text-center p-4">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} Meu Aplicativo. Todos os direitos reservados.</p>
                <p>Termos de Uso | Política de Privacidade</p>
            </div>
        </footer>
    );
}

export default Footer;

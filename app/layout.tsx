import type { PropsWithChildren } from 'react';
import NavBar from '@/components/NavBar';
import './globals.css';
import { exo2, orbitron } from './fonts';

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang='en' className={`${exo2.variable} ${orbitron.variable}`}>
            <body className='bg-orange-50 flex flex-col px-4 py-2 min-h-screen'>
                <header>
                    <NavBar />
                </header>
                <main className='grow py-3'>
                    {children}
                </main>
                <footer className='border-t py-3 text-center text-xs'>
                    Game data and images courtsey
                    of <a className='text-orange-800 hover:underline' href='https://rawg.io/' target='_blank'>RAWG</a>
                </footer>
            </body>
        </html>
    );
};

export default RootLayout;

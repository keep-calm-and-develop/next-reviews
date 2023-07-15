import Link from 'next/link';
import React from 'react';

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = ({ }) => {
    return (
        <nav>
            <ul className='flex gap-2'>
                <li>
                    <Link className='text-orange-800 font-orbitron font-bold hover:underline' href='/'>Indie Gamer</Link>
                </li>
                <li className='ml-auto'>
                    <Link className='text-orange-800 hover:underline' href='/reviews'>Reviews</Link>
                </li>
                <li>
                    <Link className='text-orange-800 hover:underline' href='/about' prefetch={false}>About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;

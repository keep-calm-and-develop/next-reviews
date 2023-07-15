import Link from 'next/link';
import React from 'react'
import Heading from '@/components/Heading';

interface ReviewsPageProps {

}

const ReviewsPage: React.FC<ReviewsPageProps> = ({ }) => {
    return (
        <>
            <Heading>Reviews</Heading>
            <ul className='flex flex-col gap-3'>
                <li className='border w-80 rounded shadow bg-white hover:shadow-xl'>
                    <Link href='/reviews/hollow-knight'>
                        <img
                            src='/images/hollow-knight.jpg'
                            alt=''
                            width='320'
                            height='180'
                            className='rounded-t'
                        />
                        <h2 className='font-semibold font-orbitron py-1 text-center'>Hollow Knight</h2>
                    </Link>
                </li>
                <li className='border w-80 rounded shadow bg-white hover:shadow-xl'>
                    <Link href='/reviews/stardew-valley'>
                        <img
                            src='/images/stardew-valley.jpg'
                            alt=''
                            width='320'
                            height='180'
                            className='rounded-t'
                        />
                        <h2 className='font-semibold font-orbitron py-1 text-center'>Stardew Valley</h2>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default ReviewsPage;

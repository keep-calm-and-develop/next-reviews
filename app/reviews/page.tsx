import Link from 'next/link';
import React from 'react'
import Heading from '@/components/Heading';
import { getReviews } from '@/lib/reviews';

interface ReviewsPageProps {

}

const ReviewsPage: React.FC<ReviewsPageProps> = async ({ }) => {
    const reviews = await getReviews();
    return (
        <>
            <Heading>Reviews</Heading>
            <ul className='flex flex-row flex-wrap gap-3'>
                {reviews.map((review) => (
                    <li key={review.slug} className='border w-80 rounded shadow bg-white hover:shadow-xl'>
                        <Link href={`/reviews/${review.slug}`}>
                            <img
                                src={review.image}
                                alt=''
                                width='320'
                                height='180'
                                className='rounded-t'
                            />
                            <h2 className='font-semibold font-orbitron py-1 text-center'>
                                {review.title}
                            </h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ReviewsPage;

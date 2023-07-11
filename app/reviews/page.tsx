import Link from 'next/link';
import React from 'react'
import Heading from '@/components/Heading';

interface ReviewsPageProps {

}

const ReviewsPage: React.FC<ReviewsPageProps> = ({ }) => {
    return (
        <>
            <ul>
                <li>
                    <Link href='/reviews/hollow-knight'>
                        Hollow Knight
                    </Link>
                </li>
                <li>
                    <Link href='/reviews/stardew-valley'>
                        Stardew Valley
                    </Link>
                </li>
            </ul>
            <Heading>Reviews</Heading>
            <p>
                Here we'll list all the reviews
            </p>
        </>
    );
}

export default ReviewsPage;

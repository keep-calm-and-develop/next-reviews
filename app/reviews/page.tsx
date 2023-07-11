import Link from 'next/link';
import React from 'react'

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
            <h1>Reviews</h1>
            <p>
                Here we'll list all the reviews
            </p>
        </>
    );
}

export default ReviewsPage;

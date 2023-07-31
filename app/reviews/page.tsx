import Link from 'next/link';
import React from 'react'
import Heading from '@/components/Heading';
import { getReviews } from '@/lib/reviews';
import { Metadata } from 'next';
import Image from 'next/image';
import { PageProps } from '@/.next/types/app/page';
import PaginationBar from '@/components/PaginationBar';

export const metadata: Metadata = {
    title: 'Reviews'
};
const PAGE_SIZE = 6;

interface ReviewsPageProps extends PageProps {}

const ReviewsPage: React.FC<ReviewsPageProps> = async ({ searchParams }) => {
    const page = parsePageParam(searchParams.page);
    const { reviews, pageCount } = await getReviews(PAGE_SIZE, page);
    return (
        <>
            <Heading>Reviews</Heading>
            <PaginationBar
                page={page}
                pageCount={pageCount}
                href={'/reviews'}
            />
            <ul className='flex flex-row flex-wrap gap-3'>
                {reviews.map((review, index) => (
                    <li key={review.slug} className='border w-80 rounded shadow bg-white hover:shadow-xl'>
                        <Link href={`/reviews/${review.slug}`}>
                            <Image
                                src={review.image}
                                alt=''
                                width={320}
                                height={180}
                                priority={index === 0}
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

function parsePageParam(paramValue) {
    if (paramValue) {
        const page = parseInt(paramValue);
        if (isFinite(page) && page > 0) {
            return page;
        }
    }
    return 1;
}

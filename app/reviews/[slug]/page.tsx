import Heading from '@/components/Heading';
import { getReview } from '@/lib/reviews';
import React from 'react';

interface ReviewPageProps { params: { slug: string } }

const ReviewPage: React.FC<ReviewPageProps> = async ({ params: { slug }}) => {
    const review = await getReview(slug);
    return (
        <>
            <Heading>{review.title}</Heading>
            <p className='italic pb-2'>{review.date}</p>
            <img
                src={review.image}
                alt=''
                width='640'
                height='360'
                className='rounded mb-2'
            />
            <article
                className='prose prose-slate max-w-screen-sm'
                dangerouslySetInnerHTML={{ __html: review.body }}
            />
        </>
    );
}

export default ReviewPage;

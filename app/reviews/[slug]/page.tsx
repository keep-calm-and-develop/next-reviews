import { notFound } from 'next/navigation';
import Heading from '@/components/Heading';
import ShareLinkButton from '@/components/ShareLinkButton';
import { getReview, getSlugs } from '@/lib/reviews';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

type Props = {
    params: { slug: string }
}

export async function generateStaticParams() {
    const slugs = await getSlugs();
    return slugs.map((slug) => ({ slug }));
}

export const generateMetadata = async ({ params: { slug }}: Props): Promise<Metadata> => {
    const review = await getReview(slug);
    if (!review) {
        notFound();
    }
    return {
        title: review.title,
    };
};

interface ReviewPageProps { params: { slug: string } }

const ReviewPage: React.FC<ReviewPageProps> = async ({ params: { slug } }) => {
    const review = await getReview(slug);
    if (!review) {
        notFound();
    }
    return (
        <>
            <Heading>{review.title}</Heading>
            <p className='font-semibold pb-3'>
                {review.subtitle}
            </p>
            <div className='flex gap-3 items-baseline'>
                <p className='italic pb-2'>{review.date}</p>
                <ShareLinkButton />
            </div>
            <Image
                src={review.image}
                priority
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

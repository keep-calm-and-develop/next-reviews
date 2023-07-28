import Heading from '@/components/Heading';
import { getReviews } from '@/lib/reviews';
import Image from 'next/image';
import Link from 'next/link';

const HomePage: React.FC = async () => {
    const reviews = await getReviews(3);
    return (
        <>
            <Heading>Indie Gamer</Heading>
            <p className='pb-3'>
                Only the best indie games, reviewed for you!
            </p>
            <ul className='flex flex-col gap-3'>
                {
                    reviews.map((review, index) => (
                        <li key={review.slug} className='border rounded shadow bg-white hover:shadow-xl w-80 sm:w-full'>
                            <Link className='flex flex-col sm:flex-row' href={`/reviews/${review.slug}`}>
                                <Image
                                    priority={index === 0}
                                    src={review.image}
                                    alt=''
                                    width='320'
                                    height='180'
                                    className='rounded-t sm:rounded-l sm:rounded-r-none'
                                />
                                <h2 className='font-semibold font-orbitron py-1 text-center'>
                                    {review.title}
                                </h2>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default HomePage;

import Heading from '@/components/Heading';
import { getFeaturedReview } from '@/lib/reviews';
import Link from 'next/link';

const HomePage: React.FC = async () => {
    const featureReview = await getFeaturedReview();
    return (
        <>
            <Heading>Indie Gamer</Heading>
            <p className='pb-3'>
                Only the best indie games, reviewed for you!
            </p>
            {featureReview && (
                <div className='border rounded shadow bg-white hover:shadow-xl w-80 sm:w-full'>
                    <Link className='flex flex-col sm:flex-row' href={`/reviews/${featureReview.slug}`}>
                        <img
                            src={featureReview.image}
                            alt=''
                            width='320'
                            height='180'
                            className='rounded-t sm:rounded-l sm:rounded-r-none'
                        />
                        <h2 className='font-semibold font-orbitron py-1 text-center'>
                            {featureReview.title}
                        </h2>
                    </Link>
                </div>
            )}
        </>
    );
}

export default HomePage;

import React from 'react';
import Heading from '@/components/Heading';

interface HollowKnightPageProps {

}

const HollowKnightPage: React.FC<HollowKnightPageProps> = ({}) => {
    return (
        <>
            <Heading>Hollow Knight</Heading>
            <img
                src='/images/hollow-knight.jpg'
                alt=''
                width='640'
                height='360'
                className='rounded mb-2'
            />
            <p>
                This will be review for Hollow Knight
            </p>
        </>
    );
}

export default HollowKnightPage;

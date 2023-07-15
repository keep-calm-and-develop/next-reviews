import React from 'react';
import Heading from '@/components/Heading';

interface StardewValleyPageProps {

}

const StardewValleyPage: React.FC<StardewValleyPageProps> = ({}) => {
    return (
        <>
            <Heading>Stardew Valley</Heading>
            <img
                src='/images/stardew-valley.jpg'
                alt=''
                width='640'
                height='360'
                className='rounded mb-2'
            />
            <p>
                This will be review for Stardew Valley
            </p>
        </>
    );
}

export default StardewValleyPage;

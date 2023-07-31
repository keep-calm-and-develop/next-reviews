import React from 'react';
import Heading from '@/components/Heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Not Found'
};

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = ({}) => {
    return (
        <>
            <Heading>Not Found</Heading>
            <p>
                Oops, the page you requested only exists in a parallel universe.
            </p>
        </>
    );
}

export default NotFound;

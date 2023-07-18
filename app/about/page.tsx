import React from 'react';
import Heading from '@/components/Heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About'
};

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = ({}) => {
    return (
        <>
            <Heading>About</Heading>
            <p>
                About review website
            </p>
        </>
    );
}

export default AboutPage;

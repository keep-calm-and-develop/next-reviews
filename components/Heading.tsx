import React, { PropsWithChildren } from 'react';

interface HeadingProps extends PropsWithChildren {

}

const Heading: React.FC<HeadingProps> = ({ children }) => {
    return (
        <h1 className="font-bold text-3xl pb-3">
            {children}
        </h1>
    );
}

export default Heading

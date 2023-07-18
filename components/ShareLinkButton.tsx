'use client';

import React, { MouseEventHandler, useEffect, useState } from 'react';

interface ShareLinkButtonProps {}

const ShareLinkButton: React.FC<ShareLinkButtonProps> = ({}) => {
    const [clicked, setClicked] = useState(false);

    const handleClick: MouseEventHandler = () => {
        navigator.clipboard.writeText(window.location.href);
        setClicked(true);
        setTimeout(() => setClicked(false), 1500);
    };

    return (
        <button
            onClick={handleClick}
            className='border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700'
        >
            {clicked ? 'Link Copied' : 'Share Link'}
        </button>
    );
}

export default ShareLinkButton

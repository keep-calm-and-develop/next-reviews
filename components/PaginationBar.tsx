import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

interface PaginationBarProps {
    href: string;
    page: number;
    pageCount: number;
}

const PaginationBar: React.FC<PaginationBarProps> = ({
    page,
    pageCount,
    href,
}) => {
    return (
        <div className='flex gap-2 pb-3'>
            {(page > 1) && (
                <PaginationLink href={`${href}?page=${page - 1}`}>
                    <ChevronLeftIcon className='h-5 w-5' />
                    <span className='sr-only'>Previous Page</span>
                </PaginationLink>
            )}
            <span>Page {page} of {pageCount}</span>
            {(page < pageCount) && (
                <PaginationLink href={`${href}?page=${page + 1}`}>
                    <ChevronRightIcon className='h-5 w-5' />
                    <span className='sr-only'>Next Page</span>
                </PaginationLink>
            )}
        </div>
    );
}

interface PaginationLinkProps extends PropsWithChildren {
    href: string;
}

const PaginationLink: React.FC<PaginationLinkProps> = ({ children, href }) => {
    return (
        <Link
            href={href}
            className='border rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700'
        >
            {children}
        </Link>
    );
};

export default PaginationBar;

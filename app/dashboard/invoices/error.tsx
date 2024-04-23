'use client';

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & {digest?: string};
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error)
    },[error]);

    return(
        <main className='flex h-full flex-col items-center justify-center'>
            <h2 className='text-center'>Something went wrong!</h2>
            <button 
                className='flex h-full flex-col items-center justify-center'
                onClick={()=> reset()} //Attempt to recover by trying to re-render the invoice route
            >
                Try again
            </button>
        </main>
    );
}
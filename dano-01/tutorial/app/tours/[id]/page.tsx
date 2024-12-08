import React from 'react';
import Image from 'next/image';
const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';
function page({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1 className='text-3xl mb-4'>Item {params.id}</h1>
            {/* remote image */}
            <div>
                <Image
                    src={url}
                    alt='tour'
                    width={192}
                    height={192}
                    priority
                    className='w-48 h-48 object-cover rounded'
                />
                <h2>remote image</h2>
            </div>
        </div>
    );
}

export default page;

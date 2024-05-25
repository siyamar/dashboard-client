import AddProduct from '@/components/AddProduct/AddProduct';
import React from 'react';

const page = () => {
    return (
        <div className='my-10 mx-40 p-10 bg-yellow-100'>
            <h2 className='text-center font-bold text-3xl'>Add Customers Order</h2>
            <AddProduct></AddProduct>
        </div>
    );
};

export default page;
import AddProduct from '@/components/AddProduct/AddProduct';
import OrdersDataTable from '@/components/OrdersDataTable/OrdersDataTable';
import React from 'react';

const page = async() => {
    return (
        <div className='my-10 mx-40 p-10 bg-yellow-100'>
            <h2 className='text-center font-bold text-3xl'>View Orders</h2>
            <OrdersDataTable></OrdersDataTable>
        </div>
    );
};

export default page;
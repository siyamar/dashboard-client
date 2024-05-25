"use client"
import { AuthContext } from '@/Providers/AuthProvider';
import { getAllUser } from '@/utils/getAllUser';
import { getOrders } from '@/utils/getOrders';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

const OrdersDataCards = () => {
    const users =  getAllUser()
    const [orders, setOrders] = useState([]);
    const totalOrder = orders.reduce((total,order)=> total+order.total_order, 0)
    const totalItem = orders.reduce((total,order)=> total+order.total_item, 0)
    const totalTransfer = orders.reduce((total,order)=> total+order.total_transfer, 0)
    const totalReceive = orders.reduce((total,order)=> total+order.total_receive, 0)
    const totalPaymentAmount = orders.reduce((total,order)=> total+order.total_payment_amount, 0)
    const totalCostAmount = orders.reduce((total,order)=> total+order.total_cost_amount, 0)
    const totalRevenewAmount = orders.reduce((total,order)=> total+order.total_revenew_amount, 0)
    const totalCustomer = orders.reduce((total,order)=> total+order.total_customer, 0)
    console.log(totalCustomer)
    console.log(orders)

    const { user } = useContext(AuthContext);
  const router = useRouter()
  if(!user){
    router.push('/login')
  }

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const ordersData = await getOrders();
                setOrders(ordersData);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    console.log(orders)
    return (
        <div>
            <div className="grid gap-2.5 mx-2 md:mx-0 grid-cols-2 md:grid-cols-4">
            <div className="stats bg-gradient-to-r from-indigo-300 shadow mt-4 md:mt-6 w-full border h-48">
              <div className="stat">
                <div className="stat-title font-bold text-3xl text-black text-center">
                  {totalOrder}
                </div>
                <div className="text-center text-gray-400 text-1xl">Total Order</div>
                <div className="stat-desc text-center">{Math.floor(totalOrder/100*2)}% more than</div>
                <div className="stat-desc text-center">↘︎ 90 (14%)</div>
              </div>
            </div>
            <div className="stats bg-gradient-to-r from-yellow-300 shadow mt-4 md:mt-6 w-full border h-48">
              <div className="stat">
                <div className="flex justify-center items-center stat-title font-bold text-3xl text-black text-center">
                  {totalItem}
                </div>
                <div className="text-center text-gray-400 text-1xl">Total Item</div>
                {/* <div className="stat-desc text-center">21% more than</div>
                <div className="stat-desc text-center">↘︎ 40 (14%)</div> */}
              </div>
            </div>
            <div className="stats bg-gradient-to-r from-green-300 shadow md:mt-6 w-full border h-48">
              <div className="stat">
                <div className="flex justify-center items-center stat-title font-bold text-3xl text-black text-center">
                  {totalReceive}
                </div>
                <div className="text-center text-gray-400 text-1xl">Total Receive</div>
                {/* <div className="stat-desc text-center">21% more than</div>
                <div className="stat-desc text-center">↘︎ 90 (14%)</div> */}
              </div>
            </div>
            <div className="stats bg-gradient-to-r from-yellow-300 shadow md:mt-6 w-full border h-48">
              <div className="stat">
                <div className="flex justify-center items-center stat-title font-bold text-3xl text-black text-center">
                  {totalTransfer}
                </div>
                <div className="text-center text-gray-400 text-1xl">Total Transfer</div>
                {/* <div className="stat-desc text-center">21% more than</div>
                <div className="stat-desc text-center">↘︎ 90 (14%)</div> */}
              </div>
            </div>
            <div className="stats bg-gradient-to-r from-yellow-300 shadow w-full border h-48">
              <div className="stat">
                <div className="flex justify-center items-center stat-title font-bold text-3xl text-black text-center">
                  {totalPaymentAmount}
                </div>
                <div className="text-center text-gray-400 text-1xl">Total Payment</div>
                {/* <div className="stat-desc text-center">21% more than</div>
                <div className="stat-desc text-center">↘︎ 90 (14%)</div> */}
              </div>
            </div>
            <div className="stats bg-gradient-to-r from-green-300 shadow w-full border h-48">
              <div className="stat">
                <div className="flex justify-center items-center stat-title font-bold text-3xl text-black text-center">
                  {totalCostAmount}
                </div>
                <div className="text-center text-gray-400 text-1xl">Total Cost </div>
                {/* <div className="stat-desc text-center">21% more than</div>
                <div className="stat-desc text-center">↘︎ 90 (14%)</div> */}
              </div>
            </div>
            <div className="stats bg-gradient-to-r from-cyan-300 shadow w-full border h-48">
              <div className="stat">
                <div className="flex justify-center items-center stat-title font-bold text-3xl text-black text-center">
                  {totalRevenewAmount}
                </div>
                <div className="text-center text-gray-400 text-1xl">Total Revenew</div>
                {/* <div className="stat-desc text-center">21% more than</div>
                <div className="stat-desc text-center">↘︎ 90 (14%)</div> */}
              </div>
            </div>
            <div className="stats bg-gradient-to-r from-green-300 shadow w-full border h-48">
              <div className="stat">
                <div className="flex justify-center items-center stat-title font-bold text-3xl text-black text-center">
                  {totalCustomer}
                </div>
                <div className="text-center text-gray-400 text-1xl">Total Customer</div>
                {/* <div className="stat-desc text-center">21% more than</div>
                <div className="stat-desc text-center">↘︎ 90 (14%)</div> */}
              </div>
            </div>
          </div>
        </div>
    );
};

export default OrdersDataCards;
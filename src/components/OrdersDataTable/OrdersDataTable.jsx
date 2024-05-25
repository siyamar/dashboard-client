"use client"
import { useEffect, useState } from 'react';
import { getOrders } from '@/utils/getOrders';
import { useContext } from 'react';
import { AuthContext } from '@/Providers/AuthProvider';
import { useRouter } from 'next/navigation';

const OrdersDataTable = () => {
    const [orders, setOrders] = useState([]);
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

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Total Order</th>
                            <th>Total Item</th>
                            <th>Total Transfer</th>
                            <th>Create by</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>{order.total_order}</td>
                                <td>{order.total_item}</td>
                                <td>{order.total_transfer}</td>
                                <td>{order.create_by}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
        </div>
    );
};

export default OrdersDataTable;
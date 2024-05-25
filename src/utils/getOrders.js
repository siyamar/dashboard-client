export const getOrders = async()=>{
    const res = await fetch('http://localhost:5000/orders');
    return res.json();
}
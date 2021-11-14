import React, { useEffect, useState } from 'react';
import MyOrder from '../MyOrders/MyOrder/MyOrder';
import SingleOrder from './singleOrder/SingleOrder';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://boiling-depths-33003.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    const deleteOrder = orderId => {
        const confirmDelete = window.confirm('Are you sure you want to cancel this order?')
        const url = `https://boiling-depths-33003.herokuapp.com/allOrders/${orderId}`;
        if (confirmDelete) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Successfully deleted')
                        const remaining = allOrders.filter(order => order._id !== orderId);
                        setAllOrders(remaining);
                    }
                })
        }
    }
    console.log(allOrders)
    return (
        <div>
            <h1>All Orders</h1>
            {
                allOrders.map(order => <MyOrder
                    key={order._id}
                    myOrder={order}
                    deleteOrder={deleteOrder}
                    isAllOrders={true}
                ></MyOrder>)
            }
        </div>
    );
};

export default AllOrders;
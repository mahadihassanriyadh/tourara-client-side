import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        if (user.email) {
            axios.post('https://boiling-depths-33003.herokuapp.com/myOrders', user)
                .then(res => {
                    const data = res.data;
                    console.log(data);
                    setMyOrders(data)
            })
        }
    }, [user])
    return (
        <div>
            <h1>My Orders</h1>
            {
                myOrders.map(myOrder => <MyOrder
                    key={myOrder._id}
                    myOrder={myOrder}
                ></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;
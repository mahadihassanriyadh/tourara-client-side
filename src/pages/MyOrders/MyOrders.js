import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import VacationPackages from '../Home/VacationPackages/VacationPackages';
import MyOrder from './MyOrder/MyOrder';
import noOrderFound from '../../images/NotFound/No Orders Found.png'

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

    const deleteOrder = orderId => {
        const confirmDelete = window.confirm('Are you sure you want to cancel this order?')
        const url = `https://boiling-depths-33003.herokuapp.com/myOrders/${orderId}`;
        if (confirmDelete) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Successfully deleted')
                        const remaining = myOrders.filter(myOrder => myOrder._id !== orderId);
                        setMyOrders(remaining);
                    }
                })
        }
    }

    if (myOrders.length === 0) {
        return (
            <div>
                <img className="w-50" src={noOrderFound} alt="" />
                <h2 className="mt-5">Check out our packages to order...</h2>
                <VacationPackages></VacationPackages>
            </div>
        )
    }

    return (
        <div>
            <h1>My Orders</h1>
            {
                myOrders.map(myOrder => <MyOrder
                    key={myOrder._id}
                    myOrder={myOrder}
                    deleteOrder={deleteOrder}
                    isAllOrders={false}
                ></MyOrder>)
            }
            <h2 className="mt-5">Check out more packages to order...</h2>
            <VacationPackages></VacationPackages>
        </div>
    );
};

export default MyOrders;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import MyOrder from "../MyOrders/MyOrder/MyOrder";

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch("https://tourara-server.onrender.com/allOrders")
            .then((res) => res.json())
            .then((data) => setAllOrders(data));
    }, []);
    const deleteOrder = (orderId) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to cancel this order?"
        );
        const url = `https://tourara-server.onrender.com/allOrders/${orderId}`;
        if (confirmDelete) {
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert("Successfully deleted");
                        const remaining = allOrders.filter(
                            (order) => order._id !== orderId
                        );
                        setAllOrders(remaining);
                    }
                });
        }
    };

    const updateOrder = (orderId) => {
        const confirmUpdate = window.confirm(
            "Are you sure you want to cancel this order?"
        );
        const url = `https://tourara-server.onrender.com/updateStatus/${orderId}`;
        if (confirmUpdate) {
            axios
                .put(url, {
                    status: "approved",
                })
                .then((res) => {
                    console.log(res);
                    const findPackage = allOrders.find(
                        (order) => orderId === order._id
                    );
                    findPackage.orderStatus = "approved";

                    const remaining = allOrders.filter(
                        (order) => order._id !== orderId
                    );

                    remaining.push(findPackage);
                    setAllOrders(remaining);
                    // window.location.reload();
                });
        }
    };
    if (allOrders.length === 0) {
        return (
            <div>
                <Spinner animation="grow"></Spinner>
            </div>
        );
    }
    return (
        <div>
            <h1>All Orders</h1>
            {allOrders.map((order) => (
                <MyOrder
                    key={order._id}
                    myOrder={order}
                    deleteOrder={deleteOrder}
                    updateOrder={updateOrder}
                    isAllOrders={true}
                ></MyOrder>
            ))}
        </div>
    );
};

export default AllOrders;

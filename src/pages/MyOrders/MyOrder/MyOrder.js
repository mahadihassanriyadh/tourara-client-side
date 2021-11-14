import React, { useEffect, useState } from 'react';

const MyOrder = ({ myOrder, deleteOrder, isAllOrders }) => {
    const { _id, packageid, time, email } = myOrder;
    const [orderItem, setOrderItem] = useState({});
    console.log(myOrder);
    const url = `https://boiling-depths-33003.herokuapp.com/vacationPackage/${packageid}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrderItem(data);
            })
    }, []);

    let orderPlacedBy;
    console.log(isAllOrders)
    if (isAllOrders) {
        orderPlacedBy = `Order placed by, ${email}`
    }
    else {
        orderPlacedBy = ''
    }
    

    return (
        <div className="container mt-3">
            <div className="row bg-light bg-gradient rounded shadow-sm">
                <div className="col-md-3 my-3">
                    <img className="img-fluid rounded" src={orderItem.img} alt=""/>
                </div>
                <div className="col-md-8 d-flex flex-column justify-content-center text-start">
                    <h5 className="m-0">Package Name: {orderItem.name} <button onClick={()=>{deleteOrder(_id)}} className="btn btn-danger" title="Cancel the Order">X</button></h5>
                    <p className="text-danger m-0">Price: {orderItem.price}$</p>
                    <p className="m-0"><span className="fw-bold">Order Id:</span> {orderItem._id}</p>
                    <small className="text-muted">Order placed on, {time}</small>
                    <small className="fw-bold text-danger">{ orderPlacedBy }</small>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
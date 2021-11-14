import React, { useEffect, useState } from 'react';

const MyOrder = ({ myOrder }) => {
    const { _id, packageid, time } = myOrder;
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

    const deleteOrder = orderId => {
        
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 my-3">
                    <img className="img-fluid rounded" src={orderItem.img} alt=""/>
                </div>
                <div className="col-md-8 d-flex flex-column justify-content-center text-start">
                    <h5 className="m-0">Package Name: {orderItem.name} <button onClick={()=>{deleteOrder(_id)}} className="btn btn-danger" title="Cancel the Order">X</button></h5>
                    <p className="text-danger m-0">Price: {orderItem.price}$</p>
                    <p className="m-0">OrderId: {orderItem._id}</p>
                    <small className="text-muted">Order placed on, {time}</small>
                    
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
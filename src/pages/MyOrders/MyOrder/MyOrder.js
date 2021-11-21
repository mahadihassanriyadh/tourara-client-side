import React, { useEffect, useState } from 'react';

const MyOrder = ({ myOrder, deleteOrder, isAllOrders, updateOrder }) => {
    const { _id, packageid, time, email, orderStatus } = myOrder;
    const [orderItem, setOrderItem] = useState({});
    const url = `https://boiling-depths-33003.herokuapp.com/vacationPackage/${packageid}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrderItem(data);
            })
    }, [orderItem]);

    let orderPlacedBy;
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
                    <img className="img-fluid rounded" src={orderItem?.img} alt=""/>
                </div>
                <div className="col-md-8 d-flex flex-column justify-content-center text-start">
                    <h5 className="m-0">Package Name: {orderItem?.name}
                        <button onClick={() => { deleteOrder(_id) }} className="btn btn-danger mx-2" title="Cancel the Order">X</button>
                        {
                            (orderStatus !== "approved") && isAllOrders && <button onClick={() => { updateOrder(_id) }} className="btn btn-success" title="Approve the Order">✓</button>
                        }
                    </h5>
                    <p className="text-danger m-0">Price: {orderItem?.price}$</p>
                    <p className="m-0"><span className="fw-bold">Order Id:</span> {_id}</p>
                    <small className="text-muted">Order placed on, {time}</small>
                    <small className="fw-bold text-danger">{orderPlacedBy}</small>
                    {
                        orderStatus === "approved" ?
                            <div className="progress w-50">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "100%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"> Order {orderStatus}
                                </div>
                            </div>
                            :
                            <div className="progress w-50">
                                <div className="progress-bar bg-warning text-dark" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"> Order { orderStatus }</div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
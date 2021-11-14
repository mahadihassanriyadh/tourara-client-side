import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { packageId } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory();
    const [orderItem, setOrderItem] = useState({});
    const url = `https://boiling-depths-33003.herokuapp.com/services/${packageId}`
    useState(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrderItem(data);
            })
    }, []);

    const onSubmit = (data) => {
        console.log(data);
        if ((data.name !== "") && (data.email !== "")){
            axios.post('https://boiling-depths-33003.herokuapp.com/placeOrder', data)
                .then(res => {
                    // console.log(res);
                    if (res.data.insertedId) {
                        alert('Thank you so much for placing an order, our team will reach out to you as soon as possible')
                        reset();
                        history.push(`/myOrders`);
                    }
                })
        } 
    };
    return (
        <div>
            <img className="rounded mt-3 w-25" src={orderItem.img} alt="the package"></img>
            <div className="contact-us">
                
                <h1 className="mt-5">Place an Order for {orderItem.name}</h1>
                <p className="fw-bold fs-4 text-danger">Your bill is {orderItem.price}$</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" {...register("packageid")} placeholder="packageid" required defaultValue={packageId} readOnly/>
                    <input defaultValue={user.displayName} className="form-control" type="text" {...register("name")} placeholder="Full Name" required />
                    <input defaultValue={user.email} className="form-control" type="email" {...register("email")} placeholder="Email" required />
                    {errors.email && <span className="error">This field is required</span>}
                    <input className="form-control" type="tel" {...register("phone")} placeholder="Phone No." required />
                    <input defaultValue={Date()} className="form-control" type="" {...register("time")} placeholder="Time" required readOnly/>
                    <textarea className="form-control" {...register("address")} placeholder="Address" required/>
                    <input className="btn btn-dark" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;
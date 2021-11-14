import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { packageId } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [orderItem, setOrderItem] = useState({});
    const url = `http://localhost:5000/services/${packageId}`
    useState(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrderItem(data);
                
            })
    }, []);

    const onSubmit = data => {
        console.log(data);
        axios.post('https://boiling-depths-33003.herokuapp.com/contactUs', data)
        .then(res => {
            // console.log(res);
            if (res.data.insertedId) {
                alert('Thank you so much for your interest, our team will reach out to you as soon as possible')
                reset();
            }
        })
    };
    return (
        <div>
            <img className="rounded mt-3 w-25" src={orderItem.img} alt="the package"></img>
            <div className="contact-us">
                
                <h1 className="mt-5">Place an Order</h1>
                <p className="fw-bold fs-4 text-danger">Your bill is {orderItem.price}$</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" {...register("packageName")} placeholder="Pckage Name" required value={orderItem.name} readOnly />
                    <input className="form-control" {...register("_id")} placeholder="_id" required value={orderItem._id} readOnly/>
                    <input defaultValue={user.displayName} className="form-control" type="text" {...register("name")} placeholder="Full Name" required />
                    <input defaultValue={user.email} className="form-control" type="email" {...register("email")} placeholder="Email" required />
                    {errors.email && <span className="error">This field is required</span>}
                    <input className="form-control" type="tel" {...register("phone")} placeholder="Phone No." required />
                    <textarea className="form-control" {...register("address")} placeholder="Address" required/>
                    <input className="btn btn-dark" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;
import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './ContactUs.css'

const ContactUs = () => {
    const { register, handleSubmit, reset } = useForm();
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
        <div className="contact-us">
            <h1 className="mt-5">Contact Us</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" {...register("name")} placeholder="Name" required/>
                <input className="form-control" type="email" {...register("email")} placeholder="Email" required/>
                <textarea className="form-control" {...register("Comment")} placeholder="Comment" required/>
                <input className="btn btn-dark" type="submit" />
            </form>
        </div>
    );
};


export default ContactUs;
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddNewPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios
            .post("https://tourara-server.onrender.com/addNewPackage", data)
            .then((res) => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert("New service added");
                    reset();
                }
            });
    };
    return (
        <div className="contact-us">
            <h1 className="mt-5">Add new Package</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="form-control"
                    {...register("name")}
                    placeholder="Package Name"
                    required
                />
                <input
                    className="form-control"
                    type="number"
                    {...register("price")}
                    placeholder="Price"
                    required
                />
                <input
                    className="form-control"
                    type="text"
                    {...register("type")}
                    placeholder="Package Type"
                    required
                />
                <textarea
                    className="form-control"
                    {...register("description")}
                    placeholder="Description"
                    required
                />
                <input
                    className="form-control"
                    type="url"
                    {...register("img")}
                    placeholder="Image Url"
                    required
                />
                <input className="btn btn-dark" type="submit" />
            </form>
        </div>
    );
};

export default AddNewPackage;

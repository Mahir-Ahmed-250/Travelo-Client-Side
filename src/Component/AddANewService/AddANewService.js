import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddANewService.css'


const AddANewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://intense-lake-48249.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert(' Updated Successfully')
                    reset();
                }
            })
    };

    return (
        <div className="add-service">
            <h2 className="text-center">Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description", { required: true })} placeholder="Description" />
                <input type="number" {...register("price", { required: true })} placeholder="Price" />
                <input {...register("img", { required: true })} placeholder="Image Url" />

                <input className="btn btn-success" type="submit" />
            </form>

        </div>
    );
};

export default AddANewService;
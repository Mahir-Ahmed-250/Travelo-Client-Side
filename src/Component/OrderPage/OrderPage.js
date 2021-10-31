import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './OrderPage.css'

const OrderPage = () => {
    const [serviceDetails, setServiceDetails] = useState([]);
    const { _id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch(`https://intense-lake-48249.herokuapp.com/services/${_id}`)
            .then((res) => res.json())
            .then((data) => setServiceDetails(data));
    }, [_id])

    const onSubmit = data => {
        data.Status = "Pending"
        fetch('https://intense-lake-48249.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order Processed Successfully')
                    reset()
                }
            })
    }
    const { users } = useAuth()
    return (
        <div className='container' >
            <div className='row'>
                <div className='col-lg-6 mt-3'>
                    <Card className='card'>
                        <Card.Img className="order-img" style={{ width: '100%' }} variant="top" src={serviceDetails.img} />
                        <Card.Body>
                            <h5 className='service-name'> {serviceDetails.name}</h5>
                            <h6 className='service-price'>Price: ${serviceDetails.price}</h6>
                            <p className="description">{serviceDetails.description}</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-6 order-service'>

                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        <h2>Order Details</h2>
                        <input defaultValue={users.displayName} {...register("Name")} />
                        <input defaultValue={users.email} {...register("Email", { required: true })} />
                        {serviceDetails.name && <input readOnly defaultValue={serviceDetails.name} {...register("Service", { required: true })} />}
                        {serviceDetails.price && <input readOnly defaultValue={serviceDetails.price}{...register("Price", { required: true })} />}
                        <input placeholder='Address' {...register("Address", { required: true })} />
                        <input type="number" placeholder='Phone Number' {...register("Phone", { required: true })} />
                        <input className="btn btn-success" type="submit" />
                    </form>


                </div>

            </div>

        </div>
    );
};

export default OrderPage;
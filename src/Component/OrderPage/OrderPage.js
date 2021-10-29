import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const OrderPage = () => {
    const { _id } = useParams()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [serviceDetails, setServiceDetails] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${_id}`)
            .then((res) => res.json())
            .then((data) => setServiceDetails(data));
    }, [])


    const onSubmit = data => {


        console.log(data);

        fetch('http://localhost:5000/orders', {
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
                        <Card.Img style={{ width: '100%' }} variant="top" src={serviceDetails.img} />
                        <Card.Body>
                            <h5 className=''> {serviceDetails.name}</h5>
                            <h6 className='price'>Price: ${serviceDetails.price}</h6>
                            <p>{serviceDetails.description}</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-6'>

                    <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
                        <h2>Shipping Details</h2>
                        <input defaultValue={users.displayName} {...register("Name")} />
                        <input readOnly defaultValue={serviceDetails.name} {...register("Service")} />


                        <input defaultValue={users.email} {...register("Email", { required: true })} />

                        <input placeholder='Address' {...register("Address", { required: true })} />

                        <input placeholder='Phone Number' {...register("Phone", { required: true })} />


                        {errors.Email && <span className='error'>This field is required</span>}

                        <input type="submit" />
                    </form>


                </div>

            </div>

        </div>
    );
};

export default OrderPage;
import React, { useEffect, useState } from 'react';
import './ManageService.css'
const ManageService = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://intense-lake-48249.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    const handleDelete = id => {
        const confirmation = window.confirm('Do you want to delete this Order?');
        if (confirmation) {
            const url = `https://intense-lake-48249.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order deleted successfully.')
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)
                    }
                })
        }
    }


    return (
        <div >
            <h2 className="title-text mb-5">Manage All Orders</h2>
            <h5 className="border-bottom py-5">All Orders: {orders.length}</h5>
            {
                orders.map(order => <div key={order._id}>
                    <div className=" m-3 border-bottom">
                        <h5><span className="name-title">Customer Name:</span> {order.Name}</h5>
                        <h5> <span className="name-title">Ordered Package: </span>{order.Service}</h5>
                        <h5><span className="name-title">Address:</span> {order.Address}</h5>
                        <h5><span className="name-title">Contact Number:</span> {order.Phone}</h5>
                        <h5><span className="name-title">Price:</span> ${order.Price}</h5>
                        <h5><span className="name-title">Status:</span> {order.Status}</h5>
                        <button className="btn btn-success me-2 mb-2" >Approve</button>
                        <button className="btn btn-danger mb-2" onClick={() => handleDelete(order._id)}>Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageService;
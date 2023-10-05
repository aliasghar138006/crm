import moment from 'moment/moment';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function DetailsPage({customerDetail}) {
    const router = useRouter()
    const deleteHandler = async() => {
        const res = await fetch(`/api/delete/${customerDetail._id}` , {
            method:'DELETE'
        });

        const data = await res.json();
        if(data.status == 'success') router.push('/');
    }
    return (
        <div className='customer-detail'>
            <h4>CustomerDetail Page</h4>
            <div className='customer-detail__main'>
                <div className='customer-detail__item'>
                    <span>Name:</span>
                    <p>{customerDetail.name}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Email:</span>
                    <p>{customerDetail.email}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Phone:</span>
                    <p>{customerDetail.phone}</p>    
                </div>
                <div className='customer-detail__item'>
                    <span>Address:</span>
                    <p>{customerDetail.address}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Postal Code:</span>
                    <p>{customerDetail.postalCode}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Date:</span>
                    <p>{moment(customerDetail.date).utc().format('YYYY-MM-DD')}</p>
                </div>
                
            </div>
            <div className='customer-detail__products'>
                <p>Name:</p>
                <p>Price:</p>
                <p>Qty:</p>
                {customerDetail.products.map((product , index) => (
                    <React.Fragment key={index}>
                        <p>{product.name}</p>
                        <span>{product.price}</span>
                        <span>{product.qty}</span>
                    </React.Fragment>
                ))}
            </div>
            <div className='customer-detail__buttons'>
                <p>Edit or Delete?</p>
                <button onClick={deleteHandler}>Delete</button>
                <Link href={`/edit/${customerDetail._id}`}>Edit</Link>
            </div>
        </div>
    );
}

export default DetailsPage;
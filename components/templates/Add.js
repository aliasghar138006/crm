import React, { useState } from 'react';
import Form from '../modules/Form';
import { useRouter } from 'next/router';

function Add() {
    const router = useRouter();
    
    const [form , setForm] = useState({
        name : '',
        lastName : '',
        email : '',
        address : '',
        postalCode : '',
        products : [],
        phone : '',
        date : ''
    });
    
    const cancelHandler = () => {
        setForm({
            name : '',
            lastName : '',
            email : '',
            address : '',
            postalCode : '',
            products : [],
            phone : '',
            date : date
        });
        router.push('/');
    };

    const saveHandler = async () => {
        const res = await fetch('api/customer' , {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({data : form})
        });

        const data = await res.json();
        router.push('/')
    }
    return (
        <div className='customer-page'>
            <h4>Add New Customer</h4>
            <Form form = {form} setForm = {setForm} />
            <div className='customer-page__buttons'>
                <button className='first' onClick={cancelHandler}>
                    Cancel
                </button>
                <button className='second' onClick={saveHandler}>
                    Save
                </button>
            </div>
        </div>
    );
}

export default Add;
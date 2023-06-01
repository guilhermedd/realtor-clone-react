import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FcGoogle } from 'react-icons/fc';

export default function OAuth() {
    return (
        <div className='d-grid gap-2'>
            <Button variant='danger' size='lg' className='d-flex justify-content-center'>
                <FcGoogle size={24} className='bg-white rounded-full mt-1 mx-2' />
                Continue With Google
            </Button>
        </div>
    );
}

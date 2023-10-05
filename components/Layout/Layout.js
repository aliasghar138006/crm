import React from 'react';
import Link from 'next/link'

function Layout({children}) {
    return (
        <div>
            <div className='header'>
                <h2>BotoCloner CRM</h2>
                <Link href='/add-customer'>Add Customer</Link>
            </div>
            <div className='main'>
                {children}
            </div>
            <div className='foooter'>
                <a href='https://www.Botostart.ir' target='_blank' rel='noreferrer'>
                    BotoCloner
                </a>{" "}
                BotoCloner | Created By Next.js &copy;
            </div>
        </div>
    );
}

export default Layout;
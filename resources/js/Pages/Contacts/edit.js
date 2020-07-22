import { InertiaApp, InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import route from 'ziggy'
import Header from '../../Components/Header';

import { render } from 'react-dom'

export default function Contacts(props) {

    console.log(props.contact)
    return (
        <div>
            <Header> </Header>

            <h5 className="mb-4 mt-4 ml-3 text-uppercase"> {props.contact.name} | Editar </h5>

            <hr/>
            <form action={route('contacts.store')} method="post">
                <div className="col-md-6">
                    <input type="text" name="name" className="form-control" />
                </div>
            </form>

        </div>
    );
}


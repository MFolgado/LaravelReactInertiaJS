import { InertiaApp, InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import Header from '../../Components/Header';
import './form.js'


import { render } from 'react-dom'
import FormContact from './form.js';

export default function Edit(props) {

    const contact = (props.contact)

    const data = {
        method: 'patch',
        contact: contact
    }
    return (
        <div>
            <Header> </Header>

            <h5 className="mb-4 mt-4 ml-3 text-uppercase"> {props.contact.name} | Editar </h5>

            <hr/>
            <FormContact data={data}> </FormContact>

        </div>
    );
}


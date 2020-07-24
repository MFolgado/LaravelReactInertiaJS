import { InertiaApp, InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import Header from '../../Components/Header';
import { render } from 'react-dom'
import FormContact from './form.js';

export default function Create() {

    const data = {
        method: 'post',
        contact: ''
    }

    return (
        <div>
            <Header>
                <h5 className="mb-4 mt-4 ml-3 text-uppercase"> Novo Contato </h5>
                <hr />
                <div className="col-md-12">
                    <FormContact data={data}> </FormContact>
                </div>
            </Header>
        </div>
    );
}


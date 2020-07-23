import { InertiaApp, InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import route from 'ziggy'
import Header from '../../Components/Header';
import './style.css'

import { render } from 'react-dom'

export default function Contacts() {

    return (
        <div>
            <Header> </Header>

            <h5 className="mb-4 mt-4 ml-3 text-uppercase"> Novo Contato </h5>

            <hr />
            <div className="col-md-12">
                <form action={route('contacts.store')} method="post">
                    <div className="col-md-6">
                        <label>Nome</label>
                        <input type="text" id="name" name="name" className="form-control" />
                    </div>

                    <hr />

                    <InertiaLink href={route('contacts.index')} className="btn btn-secondary btn-block"> Cancelar </InertiaLink>
                    <button className="btn btn-success btn-block"> Salvar </button>
                </form>
            </div>
        </div>
    );
}


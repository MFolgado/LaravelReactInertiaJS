import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'
import { InertiaApp, InertiaLink } from '@inertiajs/inertia-react';
import Header from '../../Components/Header';
import './style.css';

export default function Contacts(props) {

    const deleteContact = event => {
        event.preventDefault();
        if (confirm('Are you sure you want to delete this contact?')) {
            Inertia.delete(`/contacts/${event.target.id}`)
                .then((res) => {
                    console.log(props);
                })
        }
    }

    const trBody = props.contacts.map((contact) =>
        <tr key={contact.id}>
            <td> {contact.name} </td>
            <td> {contact.email} </td>
            <td> {contact.cpf} </td>
            <td> {contact.birthday}</td>
            <td> {contact.cell_phone} </td>
            <td> {contact.phone} </td>
            <td className="text-center">
                <InertiaLink replace href={route('contacts.edit', contact.id)} className="btn btn-sm btn-warning mr-2"> Editar </InertiaLink>
                <button id={contact.id} className="btn btn-sm btn-danger" onClick={deleteContact}> Remover </button>
            </td>
        </tr>
    );

    return (
        <Header>
            <div className="card">
                <div className="calendar-header">
                    <h1 className="mb-4 mt-4">
                        Agenda
                        <InertiaLink href={route('contacts.create')} className="btn btn-success" id="createContact"> Novo Contato</InertiaLink>
                    </h1>
                    {props.successMessage &&
                        <div className="alert alert-success mt-4">
                            {props.successMessage}
                        </div>
                    }

                    {props.errorMessage &&
                        <div className="alert alert-danger mt-4">
                            {props.errorMessage}
                        </div>
                    }
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th> Nome </th>
                                <th> E-mail </th>
                                <th> CPF </th>
                                <th> Data Nascimento</th>
                                <th> Celular </th>
                                <th> Telfone </th>
                                <th className="text-center"> Ações </th>
                            </tr>
                        </thead>
                        <tbody>
                            {trBody}
                        </tbody>
                    </table>
                </div>
            </div>
        </Header>
    );
}


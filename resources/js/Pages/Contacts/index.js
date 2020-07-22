import { InertiaApp, InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import route from 'ziggy'
import { render } from 'react-dom'
import './style.css'
import Header from '../../Components/Header';

export default function Contacts(props) {

    const contactList = props.contacts.map((contact) =>
        <tr key={contact.id}>
            <td> {contact.name} </td>
            <td> {contact.email} </td>
            <td> {contact.cpf} </td>
            <td> {contact.birthday}</td>
            <td> {contact.cell_phone} </td>
            <td> {contact.phone} </td>
            <td className="text-center">
                <InertiaLink replace href={route('contacts.edit', contact.id)} className="btn btn-sm btn-warning mr-2"> Editar </InertiaLink>
                <InertiaLink replace href={route('contacts.index')} className="btn btn-sm btn-danger"> Remover </InertiaLink>
            </td>
        </tr>
    );

    return (
        <div>
            <Header> </Header>
            <h1 className="mb-4 mt-4">
            Agenda
            <InertiaLink href={route('contacts.create')} className="btn btn-success" id="createContact"> Novo Contato</InertiaLink>
            </h1>

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
                    { contactList }
                </tbody>
            </table>
        </div>
    );
}


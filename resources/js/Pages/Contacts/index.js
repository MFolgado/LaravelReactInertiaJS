import React from 'react';
import { InertiaApp, InertiaLink } from '@inertiajs/inertia-react';
import Header from '../../Components/Header';
import './style.css';

export default function Contacts(props) {

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
                <InertiaLink replace href={route('contacts.destroy', contact.id)} method="delete" className="btn btn-sm btn-danger"> Remover </InertiaLink>
            </td>
        </tr>
    );

    return (
        <Header>
            <div className="card">
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
                        {trBody}
                    </tbody>
                </table>
            </div>
        </Header>
    );
}


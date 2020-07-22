import { InertiaApp, InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import route from 'ziggy'

import { render } from 'react-dom'

export default function Contacts(props) {

    const contactList = props.contacts.map((contact) =>
        <tr key={contact.id}>
            <td> {contact.name} </td>
            <td> {contact.email} </td>
            <td> {contact.cpf} </td>
            <td> {contact.birthday}</td>
            <td> {contact.cell_phone} </td>
            <td> {contact.phone} </td>
        </tr>
    );

    return (
        <div>
            <InertiaLink replace href={route('home')}> Home </InertiaLink>
            <InertiaLink replace href={route('login')}> Login </InertiaLink>
            <InertiaLink replace href={route('contacts.index')}> Agenda </InertiaLink>

            <h1 className="mb-4 mt-4"> Agenda </h1>

            <table className="table">
                <thead>
                    <tr>
                        <th> Nome </th>
                        <th> E-mail </th>
                        <th> CPF </th>
                        <th> Data Nascimento</th>
                        <th> Celular </th>
                        <th> Telfone </th>
                    </tr>
                </thead>
                <tbody>
                    { contactList }
                </tbody>
            </table>
        </div>
    );
}


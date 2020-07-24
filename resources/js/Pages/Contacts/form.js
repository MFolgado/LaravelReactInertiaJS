import { Inertia } from '@inertiajs/inertia'
import { InertiaApp, InertiaLink } from '@inertiajs/inertia-react'
import React, { useState } from 'react'

export default function FormContact({ data }) {

    const [values, setValues] = useState({
        name: data.contact.name,
        cpf: data.contact.cpf,
        birthday: data.contact.birthday,
        phone: data.contact.phone,
        cell_phone: data.contact.cell_phone,
        email: data.contact.email,
        image: data.contact.name,

    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        switch (data.method) {
            case 'post':
                Inertia.post('/contacts', values)
                break;
            case 'patch':
                Inertia.patch(`/contacts/${data.contact.id}` , values)
                break;
        }
    }

    return (
        <form onSubmit={handleSubmit} method={data.method}>
            <div className="row">
                <div className="col-md-6">
                    <label>Nome</label>
                    <input type="text" id="name" name="name"  value={values.name} className="form-control" onChange={handleChange} />
                </div>

                <div className="col-md-6">
                    <label>E-mail</label>
                    <input type="text" id="email" name="email" value={values.email} className="form-control" onChange={handleChange} />
                </div>

                <div className="col-md-6">
                    <label>CPF</label>
                    <input type="text" id="cpf" name="cpf" value={values.cpf} className="form-control" onChange={handleChange} />
                </div>

                <div className="col-md-6">
                    <label>BIRTHDAY</label>
                    <input type="text" id="birthday" name="birthday" value={values.birthday} className="form-control" onChange={handleChange} />
                </div>

                <div className="col-md-6">
                    <label>PHONE</label>
                    <input type="text" id="phone" name="phone" value={values.phone} className="form-control" onChange={handleChange} />
                </div>

                <div className="col-md-6">
                    <label>CELL PHONE</label>
                    <input type="text" id="cell_phone" name="cell_phone" value={values.cell_phone} className="form-control" onChange={handleChange} />
                </div>
            </div>

            <hr />

            <InertiaLink href={route('contacts.index')} className="btn btn-secondary btn-block"> Cancelar </InertiaLink>
            <button type="submit" className="btn btn-success btn-block" > Salvar </button>
        </form>
    );
}


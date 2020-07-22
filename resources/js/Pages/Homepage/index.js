import { InertiaApp, InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import route from 'ziggy'

import { render } from 'react-dom'

export default function Homepage() {
    return (
        <div>

            <InertiaLink replace href={route('home')}> Home </InertiaLink>
            <InertiaLink replace href={route('login')}> Login </InertiaLink>
            <InertiaLink replace href={route('contacts.index')}> Agenda </InertiaLink>

            <h1> Home Page</h1>
        </div>
    );
}


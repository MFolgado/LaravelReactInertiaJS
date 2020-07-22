import { InertiaApp, InertiaLink } from '@inertiajs/inertia-react'
import React from 'react';
import './style.css'

const Header = () => (
    <header id="main-header">

        <InertiaLink replace href={route('home')} className="mr-3 ml-3 text-dark"> <img src="/images/logo-magenfo.png" /> </InertiaLink>
        <InertiaLink replace href={route('home')} className="mr-3  text-dark"> Home </InertiaLink>
        <InertiaLink replace href={route('login')} className="mr-3 text-dark"> Login </InertiaLink>
        <InertiaLink replace href={route('contacts.index')} className="text-dark">  Agenda </InertiaLink>
    </header>
);

export default Header;

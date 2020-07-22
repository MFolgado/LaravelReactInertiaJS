import { InertiaApp, InertiaLink } from '@inertiajs/inertia-react'
import React from 'react';
import './style.css'

const Header = () => (
    <header id="main-header">
        <InertiaLink replace href={route('home')} className="mr-3 text-white"> Home </InertiaLink>
        <InertiaLink replace href={route('login')} className="mr-3 text-white"> Login </InertiaLink>
        <InertiaLink replace href={route('contacts.index')} className="text-white">  Agenda </InertiaLink>
    </header>
);

export default Header;

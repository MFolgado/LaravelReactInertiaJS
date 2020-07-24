import { InertiaApp, InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import './style.css'
import route from 'ziggy';

export default function Layout({ children }) {
    return (
        <main>

            <nav className="navbar navbar-expand-lg " id="main-header">
                <InertiaLink replace href={route('home')} className="mr-3 ml-3 text-dark"> <img src="/images/logo-magenfo.png" /> </InertiaLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <InertiaLink replace href={route('home')} className="mr-3  text-dark"> Home </InertiaLink>
                        <InertiaLink replace href={route('login')} className="mr-3 text-dark"> Login </InertiaLink>
                        <InertiaLink replace href={route('contacts.index')} className="text-dark">  Agenda </InertiaLink>
                    </div>
                </div>
            </nav>

            <article>
                {children}
            </article>
        </main>
    )
}

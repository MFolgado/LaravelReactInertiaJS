import React , { useState } from 'react'
import { InertiaApp, InertiaLink } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import './style.css'
import ReactDOM from 'react-dom';


export default function Messages({ message }) {


        if (message.errorMessage != 'null') {
            ReactDOM.render(<div className="alert alert-danger mt-4"> {message.errorMessage} </div>, document.getElementById('msg'));
        }

        // if (message.successMessage != 'null') {
        //     ReactDOM.render(<div className="alert alert-success mt-4"> {message.successMessage} </div>);
        // }


    return (
        <div className="col-12" id="msg">

        </div>
    );

}


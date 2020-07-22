<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index()
    {
        return Inertia::render('Homepage/index', [] );
    }

    public function login()
    {
        return Inertia::render('Login/index', [] );
    }
}

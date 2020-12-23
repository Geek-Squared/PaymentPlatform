import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light mx-5 mt-3">
           <a class="navbar-brand" href="#">PaymentPlatform</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Send</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pay-In-Points</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Collection Points</a>
                </li>
               </ul>
                
                <div class="form-inline my-2 my-lg-0 mr-5">
                <button type="button" class="btn btn-light mr-2">Login</button>
                <button class="btn btn-primary" type="submit">Register</button>

                </div>
            </div>
        </nav>
 
    )
}
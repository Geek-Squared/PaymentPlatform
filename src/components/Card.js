import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card() {
    return (
       
          <div class="container mx-auto">
            <h1 className="mt-4">How It Works</h1>
            <div class="row mt-4">
            <div class="col-sm-3">
                <div class="card text-white  mb-3" style={{maxWiidth: '18rem', backgroundColor:'#03254c'}}>
                <div class="card-body">
                    <h5 class="card-title">Register With Us</h5>
                    <p class="card-text">Sign Up with us with your details & we'll get you up and running.</p>
                    
                </div>
                </div>
            </div>

            <div class="col-sm-3">
                <div class="card text-white  mb-3"  style={{maxWiidth: '18rem', backgroundColor:'#1167b1'}}>
                <div class="card-body">
                    <h5 class="card-title">Recipient's Number</h5>
                    <p class="card-text">Enter the recipient's phone number & details. Once they receive you'll be notified.</p>
                    
                </div>
                </div>
            </div>

            <div class="col-sm-3">
                <div class="card text-white  mb-3" style={{maxWiidth: '18rem', backgroundColor:'#2a9df4'}}>
                <div class="card-body">
                    <h5 class="card-title">Enter Amount</h5>
                    <p class="card-text">Enter an amount you wish to send and it'll arrive securely to the recipient.</p>
                   
                </div>
                </div>
            </div>

            <div class="col-sm-3">
                <div class="card text-white  mb-3" style={{maxWiidth: '18rem', backgroundColor:'#187bcd'}}>
                <div class="card-body">
                    <h5 class="card-title">You are done!</h5>
                    <p class="card-text">Your money will be sent and tracked securely to the recipient.</p>
                    

                </div>
                </div>
                </div>
                </div>
                </div>
 
       
    )
}
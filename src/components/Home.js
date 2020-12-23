import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import header from './images/header.jpg';
import Card from './Card';

export default function Header(){
    return (
        <div>
        
            <div className="container headerCont mt-6">
              <div className="row">
                <div className="Heading col display-3">
                Let's Normalize Sending Money Faster & Safer!
                <button type="button" class="btn btn-primary btn-lg btn-block mt-4">Send Now</button>
                </div>
                <div className="imgHeader col" style={{display: 'inline-block'}}>
                <img src={header} class="rounded float-right" alt="..." style={{width:'550px', height:'550px'}}/>
                </div>
              </div>
            </div>
           <Card />,
           
        </div>

            
        
    )
}
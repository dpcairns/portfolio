import React from 'react';

export default function Contact() {
    return (
            <form className='form'>
                <h1> Contact Form</h1>
                <input placeholder='Name'/>
            
                <input placeholder='Email'/>

                <textarea placeholder='Message'></textarea>

                <button type='submit'>Submit</button> 
            </form>
    )
}


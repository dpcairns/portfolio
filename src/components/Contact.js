import React from 'react';

export default function Contact() {
    return (
        <div className='contact-container'>
            <form className='form'>
                <h1> Contact Form</h1>
                <label></label>
                <input placeholder='Name'/>

                <label></label>
                <input placeholder='Email'/>

                <label></label>
                <textarea placeholder='Message'></textarea>

                <button type='submit'>Submit</button> 

            </form>
        </div> 
    )
}


import React from 'react';

export default function Contact() {
    return (
            <form className='form'>
                <h1> Contact Me</h1>
                <p>I know a solid contact form will never fail you. But you can also contact me via any of the social platforms at the bottom of the page.

                    Just drop me a message of whatever you feel like, a cool idea or maybe you just want to get in contact with me, and I will go back to you as soon as I can. &#128231;
                </p>
                <input placeholder='Name'/>
            
                <input placeholder='Email'/>

                <textarea placeholder='Message'></textarea>

                <button type='submit'>Submit</button> 
            </form>
    )
}


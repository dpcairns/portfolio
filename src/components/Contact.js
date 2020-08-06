import React, { Component } from 'react';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    disabled: false,
    emailSent: null
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // debugger

    this.setState({
        [name]: value
    })
  }

    render() {
        const { name, message, email, disabled, emailSent } = this.state;

        return (
                <form 
                    className='form'
                    onSubmit={this.handleSubmit}>
                    <h1> Contact Me</h1>
    
                    <p>I know a solid contact form will never fail you. But you can also contact me via any of  the social platforms at the bottom of the page.</p>
    
                    <p>Just drop me a message of whatever you feel like, a cool idea or maybe you just want to  get in contact with me, and I will go back to you as soon as I can. <span>&#128231;</span>
                    </p>
                    
                    <input 
                        placeholder='Full Name'
                        name='name'
                        type='text'
                        value={name}
                        onChange={this.handleChange}
                    />
                
                    <input 
                        placeholder='Email'
                        name='email'
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                    />
    
                    <textarea 
                        placeholder='Message'
                        name="message"
                        type='textarea'
                        value={message}
                        onChange={this.handleChange}>
                    </textarea>
    
                    <button 
                        type='submit'
                        disabled={disabled}>Send
                    </button> 

                    {/* &&(and) if does equal true we are going to have "Email Sent " */}
                    {emailSent === true && <p className='success-msg'>Email Sent</p>}
                    {emailSent === false && <p className='err-msg'>Email Not Sent</p>}
                </form>
        )
    }
}

export default Contact;
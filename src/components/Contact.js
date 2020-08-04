import React, { Component } from 'react';
// import { Icon } from 'semantic-ui-react';

export default class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
      }

      onNameChange(event) {
          this.setState({ name: event.target.value })
      }

      onEmailChange(event) {
          this.setState({ email: event.target.value })
      }

      onMessageChange(event) {
          this.setState({ message: event.target.value })
      }
      
      handleSubmit(event) {

      }
      
    render() {

        return (
            <div className='contact-container'>
                        {/* <div className='project-img-container'>
                            <img className='project-img' src={''} alt=''/>
                        </div> */}
                        <div className='project-info-container'>
                            <div className='project-info'>
                            <h2 className='project-title'>Contact Me</h2>
                            {/* <span>React | Redux | Firebase | Semantic UI</span> */}
                            </div>
                            <p className='contact-text'>You can always contact me via any of the social platform at the bottom of the page. But a  solid contact form will never fail you!</p>
                            <div>
                            <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                            </div>
                        </div>
                    </div>
        )
    }
}

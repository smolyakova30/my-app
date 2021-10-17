import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState({
        name: false,
        email: false,
        comment: false,
        message: ''
    });

    const { name, email, message } = formState;

    // function handleError(target) {
    //     if (target ==='email') {
    //         // go to email labelish area and display error message
    //     } else if () {

    //     }

    // }
    function handleChange(e) {

             if (e.target.name === 'name') {
                if(!e.target.value.length) {
                    setErrorMessage({...errorMessage, name: true})
                } else {
                    setErrorMessage({...errorMessage, name: false})
                }
            } else {
                if (!e.target.value.length) {
                  setErrorMessage({...errorMessage, name: true, message: "Enter your name"});
                } else {
                  setErrorMessage({...errorMessage, name: false});
                } 

                if (e.target.name === 'email') {
                    const isValid = validateEmail(e.target.value);
            
                        if(!isValid) {
                            setErrorMessage({...errorMessage, email: true, message: "Enter a valid email"})
                            // setErrorMessage('Please, enter valid email address');
                        } else {
                            setErrorMessage({...errorMessage, email: false});
                        }
        
                    } else {
                        if (!e.target.value.length) {
                          setErrorMessage({...errorMessage, email: true, message: "Enter an email"});
                        } else {
                          setErrorMessage({...errorMessage, email: false});
                        } 
                    }
        }
        

        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

return (
    <section className="container">
        <h2 data-testid='h1tag' className="top-title">Get In Touch</h2>
        <hr></hr>
        <form class="justify-content-center" id="contact-form">
            <div class="mt-5" >
                <label htmlFor="name">Enter your name:</label>
                <input class="form-control" type="text" name="name"  defaultValue={name} onBlur={handleChange}/>
            </div>
            {errorMessage.name && (
            <div>
                <p className="error-text">{"Please enter your name"}</p>
            </div>
            )}

            <div class="mt-5" >
                <label htmlFor="email">Your email:</label>
                <input class="form-control" type="email"  name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            {errorMessage.email && (
                <div>
                <p className="error-text">{errorMessage.message}</p>
            </div>
            )}


            <div class="mt-5" >
                <label htmlFor="message">Say something:</label>
                <textarea class="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="7" />
            </div> 
            {/* short circuit to see if error message state exists then the div with a chld p error message will appear */}
            {errorMessage.comment && (
            <div>
                <p className="error-text">{"Enter a real comment"}</p>
            </div>
            )}

            <div class="mt-5 mb-5" >
            <button data-testid='button' class="btn btn-outline-success" type="submit" onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
    </section>
    );
}
    
export default ContactForm;
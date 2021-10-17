import React from 'react';
//import picture from './src/components/images/picture.jpg'

function About() {

    return(
        <section className="container">
            <h2 className="top-title">Olga Smolyakov</h2>
            <hr></hr>
            <div style={{ alignItems: "center"}}>
                <img className="mb-5" id="avatar" src='https://avatars.githubusercontent.com/u/58537097?s=400&u=1290b2e7cbfa61c9a6cae296d8de9dd166466eb1&v=4' alt="Olga Smolyakov" />
                <p>
                  I am a Web Developer located in Wisconsin, US. I have a passion in web development. 
                    Currently, I am enrolled into University of Wisconsin extended bootcamp to become a full-stack developer!
                </p>
                 <p>
                    Creative, well organized, independent with attention to details. 
                    Fan of travels (visited 10 countries and not planning to stop), books, TV series and dogs.
                </p>
                <p> 
                    Interested in front-end development and working with creative people! 
                </p>
            </div>
        </section>
    )
}

export default About;
import React from "react"

export default function Info(){
    return (
        <section>
            <img src="rashad.jpg"/>
            <div className="info">
                <h2>Rashad Tubeileh</h2>
                <h4>Frontend Developer</h4>
                <p>rashad.website</p>
                <div className="buttons-container">
                    <a href="rashad.tubeileh@gmail.com" className="button email-button"><i className="fa-solid fa-envelope"></i> Email</a>
                    <a href="https://www.linkedin.com/in/rashad-tubeileh-9bb18473/" className="button linkedin-button"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
                </div>
            </div>
        </section>
    )
}
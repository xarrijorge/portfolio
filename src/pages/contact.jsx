import React from 'react'
import Social from '../components/social'

export default () => (
    <div className="contactPage">
        <h2 className="text">
            Shoot me a line about anything. I'm always looking to chat about
            projects ideas, work, business, open source collaborations,
            anything.
        </h2>
        <form name="contact" netlify>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea cols="30" rows="10" placeholder="Message"></textarea>
            <button className="neo-white">Send</button>
        </form>
    </div>
)

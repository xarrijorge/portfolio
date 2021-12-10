import React from 'react'
// import Social from '../components/social'
import graphic from '../images/contactGraph2.jpg'

const Contact = () => (
    <div className='contactPage'>
        <img src={graphic} alt='' />
        <form name='contact' method='post' data-netlify='true'>
            <h2 className='text'>
                Shoot me a line about anything. I'm always looking to chat about
                projects ideas, work, teaching, speaking, business, open source
                collaborations, anything.
            </h2>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <textarea cols={30} rows={10} placeholder='Message'></textarea>
            <button className='neo-white' type='submit'>
                Send
            </button>
        </form>
    </div>
)

export default Contact

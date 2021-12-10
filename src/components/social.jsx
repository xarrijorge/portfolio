import React from 'react'
import { FaGithub, FaTwitter, FaCodepen } from 'react-icons/fa'

export default () => (
    <div className="social">
        <a
            href="https://github.com/xarrijorge"
            rel="noopener noreferrer"
            target="_blank"
        >
            <FaGithub className="fa" />
        </a>
        <a
            href="https://twitter.com/xarrijorge"
            rel="noopener noreferrer"
            target="_blank"
        >
            <FaTwitter className="fa" />
        </a>
        <a
            href="https://codepen.io/algorithm"
            rel="noopener noreferrer"
            target="_blank"
        >
            <FaCodepen className="fa" />
        </a>
    </div>
)

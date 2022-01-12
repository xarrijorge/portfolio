/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { RiTwitterLine, RiGithubLine, RiCodepenLine } from 'react-icons/ri'

const Social = () => (
    <div className="social">
        <a
            href="https://github.com/xarrijorge"
            rel="noopener noreferrer"
            target="_blank"
        >
            <RiGithubLine ri-2x />
        </a>
        <a
            href="https://twitter.com/xarrijorge"
            rel="noopener noreferrer"
            target="_blank"
        >
            <RiTwitterLine ri-2x />
        </a>
        <a
            href="https://codepen.io/algorithm"
            rel="noopener noreferrer"
            target="_blank"
        >
            <RiCodepenLine ri-2x />
        </a>
    </div>
)

export default Social

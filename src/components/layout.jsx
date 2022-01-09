import React from 'react'
import { Link } from 'react-router-dom'
const Layout = ({ children }) => {
    // const data = useStaticQuery(graphql`
    //     query SiteTitleQuery {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `)

    return (
        <>
            <main>
                <Link to="/">Back Home</Link>
                {children}
            </main>
        </>
    )
}

export default Layout

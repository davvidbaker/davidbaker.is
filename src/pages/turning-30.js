import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import favicon from '../images/turning-30-favicon.png'
import slice from '../images/turning-30-slice.png'

const Turning30 = () => <div><StaticImage src="../images/turning-30.jpg" alt="turning-30" /></div>

export function Head() {
    return <>
        <meta property="og:title" content="davidbaker.is/turning-30" />
        <meta property="og:image" content={slice} />
        <meta property="og:url" content="https://davidbaker.is/turning-30" />
        <link rel="icon" href={favicon} type="image/x-icon" />
        <title>davidbaker.is/turning-30</title>
    </>
}

export default Turning30
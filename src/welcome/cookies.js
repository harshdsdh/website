import React from 'react'
import {Link} from 'react-router-dom'

//import withStyles from '@material-ui/core/styles/withStyles'

import './cookiesstyle.css'



class CookiesPage extends React.Component{
    
    render(){
        //const {classes} = this.props

        return(
            <main class="c0">
    <p class="c1"><span class="c10">Cookie Policy</span></p>
    <hr/>
    <p class="c2"><span class="c3"></span></p>
    <p class="c3"><span class="c3">A cookie is a small piece of data (text file) that a website &ndash; when visited by
            a user &ndash; asks your browser to store on your device in order to remember information about you, such as
            your language preference or login information. Those cookies are set by us and called first party cookies.
            We also use third party cookies &ndash; which are cookies from a domain different than the domain of the
            website you are visiting &ndash; for our advertising and marketing efforts.
            <br/>More specifically, we use cookies and other tracking technologies for the following
            purposes:</span></p>
            <br/><br/>  
    <ul class="c4 ">
        <li class="c5"><span class="c3">Assisting you in navigation;</span></li>
        <li class="c5"><span class="c3">Assisting in registration to our events, login, and your ability to provide
                feedback;</span></li>
        <li class="c5"><span class="c3">Analyzing your use of our products, services or applications;</span></li>
        <li class="c5"><span class="c3">Assisting with our promotional and marketing efforts. (including behavioral
                advertising)</span></li>
    </ul>
    <p class="c6"><span class="c3">Below is a detailed list of the cookies we use on our Website. Our Website is
            scanned with our cookie scanning tool regularly to maintain a list as accurate as possible. We classify
            cookies in the following categories:</span></p>
    <ul class="c7">
        <li class="c5"><span class="c3">Strictly Necessary Cookies</span></li>
        <li class="c5"><span class="c3">Performance Cookies</span></li>
        <li class="c5"><span class="c3">Functional Cookies</span></li>
        <li class="c5"><span class="c3">Targeting Cookies</span></li>
    </ul>
    <p class="c8"><span class="c3">You can opt-out of each cookie category (except strictly necessary cookies) by
            clicking on the &ldquo;cookie settings&rdquo; button below:</span></p>
    <br/>
    <br/>
    <p class="c9"><span class="c8">&copy; 2020 AfrikLesLuv.net&nbsp;</span></p>

    </main>

        )
    }
    
    }

export default (CookiesPage)
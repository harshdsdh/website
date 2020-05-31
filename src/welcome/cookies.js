import React from 'react'
import {Link} from 'react-router-dom'

//import withStyles from '@material-ui/core/styles/withStyles'

import './cookiesstyle.css'



class CookiesPage extends React.Component{
    
    render(){
        //const {classes} = this.props

        return(
            <div>
                    <h1>Cookie Policy</h1>
                    <hr></hr>
                    <p>
                    A cookie is a small piece of data (text file) that a website – when visited by a user – asks your
                        browser to store on your device in order to remember information about you, such as your
                        language preference or login information. Those cookies are set by us and called first party
                        cookies. We also use third party cookies – which are cookies from a domain different than the
                        domain of the website you are visiting – for our advertising and marketing efforts.
                        More specifically, we use cookies and other tracking technologies for the following purposes:
                    </p>
                    <ul>
                            <li>Assisting you in navigation</li>
                            <li>Assisting in registration to our events, login, and your ability to provide feedback</li>
                            <li>Analyzing your use of our products, services or applications</li>
                            <li>Assisting with our promotional and marketing efforts. (including behavioral advertising)</li>
                    </ul>
                    <p>
                    Below is a detailed list of the cookies we use on our Website. Our Website is scanned with our
                        cookie scanning tool regularly to maintain a list as accurate as possible. We classify cookies in
                        the following categories:
                    </p>
                    <ul>
                            <li>
                            Strictly Necessary Cookies
                            </li>
                            <li>Performance Cookies</li>
                            <li>Functional Cookies</li>
                            <li>Targeting Cookies</li>
                    </ul>
                    <p>You can opt-out of each cookie category (except strictly necessary cookies) by clicking on the
                        “cookie settings” button below:</p>
                        <strong>© 2020 AfrikLesLuv.net</strong>

            </div>

        )
    }
    
    }

export default (CookiesPage)
import React from "react";
import SunAnimated from "../components/sunAnimated";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    return(
        <div className="class-ContactUs">
            <h1>contactUs</h1>
            <form>
                <input type="text" placeholder="Write your name"/>
                <input type="email" placeholder="Write your email"/>
                <div>
                    <textarea rows={3} placeholder="Write your message"/>
                    <button type="button">
                        <FontAwesomeIcon icon={faPaperPlane} /> <span>Send</span>
                    </button>
                </div>
            </form>
            <SunAnimated/>
        </div>
    )
}

export default ContactUs;
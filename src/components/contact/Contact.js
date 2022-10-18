import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import address from "../../img/address.png";
import { useRef, useState, useContext } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";

const Contact = () => {

    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_6w2con4',
            'template_cof1sps',
            formRef.current,
            'yzg974DJRIrAqj1xk'
        )
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (


        <div className="contato">

            <div className="contato-bg"></div>
            <div className="c-wrapper">

                <div className="contato-left">
                    <h1 className="contato-title"> Let's work together</h1>
                    <div className="contato-info">
                        <div className="contato-info-item">
                            <img
                                src={Phone}
                                alt=""
                                className="contato-icon" />
                            +34 665 178 718
                        </div>

                        <div className="contato-info-item">
                            <img
                                src={Email}
                                alt=""
                                className="contato-icon" />
                            lucasuk89@gmail.com
                        </div>

                        <div className="contato-info-item">
                            <img
                                src={address}
                                alt=""
                                className="contato-icon" />
                            Valencia - Spain
                        </div>
                    </div>
                </div>
                <div className="contato-right">
                    <p className="contato-desc">
                        <b>Do you think we can work together?</b> <br />Text me and i will answer asap

                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you for your email"}
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact;
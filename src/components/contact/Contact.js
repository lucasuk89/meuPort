import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import address from "../../img/address.png";
import { useRef, useState, useContext } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";
import "../../img/seta.png"

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
            <div class="anim">
                <div class="paperplane">
                    <svg width="300" height="158" viewBox="0 0 462 158" xmlns="http://www.w3.org/2000/svg">
                        <polygon fill="#CE7A9A" class="morph" points="460.677372 139.06334350463445 110.07012093230199 30.932525408776254 115.3182068511611 134.08288707426985"></polygon>
                        <polygon fill="#F3F2F4" class="morph2" points="110.07012093230199 30.932525408776254 175.39111200753828 0 460.677372 139.06334350463445"></polygon>
                        <polygon fill="#F3F2F4" class="morph3" points="76.57776841722396 46.597598954356734 460.677372 139.06334350463445 0 82.28570973254311"></polygon>
                    </svg>
                </div>
            </div>
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
            <div className="botao">
                <div class="flex justify-center py-12">
                    <a href="/">
                        <div class="rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="text-[#ae3cfa]" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7">
                                </path>
                            </svg>
                        </div>
                    </a></div>
            </div>
        </div>

    )
}

export default Contact;
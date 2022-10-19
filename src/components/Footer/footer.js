import "./footer.css"
import 'boxicons'


const footer = () => {
    return (
        <div className="rodape">
            <div className="icons">
                <h4 className="builtByLucas">Built by Lucas Ferraz </h4>

                <div className="mainIcon">

                    <div className="icon mainIcon">
                        <svg height={80} width="80">
                            <circle cx="40" cy="40" r="35" stroke="white" stroke-width="4" fill="none"></circle>
                        </svg>

                        <a href="http://instagram.com/lucaferrazm">
                            <i className="bx bxl-instagram"></i>
                        </a>
                    </div>


                    <div className="icon mainIcon">
                        <svg height={80} width="80">
                            <circle cx="40" cy="40" r="35" stroke="white" stroke-width="4" fill="none"></circle>
                        </svg>

                        <a href="https://www.facebook.com/lucas.f.martins.1/">
                            <i className='bx bxl-facebook-circle'></i>
                        </a>

                    </div>


                    <div className="icon mainIcon">
                        <svg height={80} width="80">
                            <circle cx="40" cy="40" r="35" stroke="white" stroke-width="4" fill="none"></circle>
                        </svg>

                        <a href="http://twitter.com/luconesuk">
                            <i className="bx bxl-whatsapp"></i>
                        </a>

                    </div>


                    <div className="icon mainIcon">
                        <svg height={80} width="80">
                            <circle cx="40" cy="40" r="35" stroke="white" stroke-width="4" fill="none"></circle>
                        </svg>
                        <a href="http://twitter.com/luconesuk">
                            <i className="bx bxl-twitter"></i>
                        </a>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default footer;


import "./intro.css"
import Me2 from '../../img/me2.png'

const Intro = () => {
    return (
        <div className="i">

            <div className="navCorpo">
                <div className="navHead">
                    <a href="home" className="logo">Welcome</a>
                    <input type="checkbox" id="menu-bar" />
                    <label for="menu-bar">Menu</label>



                    <nav className="navbar">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#aboutme">About me</a>

                                <ul>
                                    <li><a href="#">More about me</a></li>
                                    <li><a href="#">travels</a></li>
                                </ul>

                            </li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>


            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is </h2>
                    <h1 className="i-name">Lucas Ferraz</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Junior Developer</div>
                            <div className="i-title-item">Gamer</div>
                            <div className="i-title-item">Love Sports</div>
                            <div className="i-title-item">Content Creator</div>
                        </div>
                    </div>

                    <p className="i-desc">
                        Basic coding abilities, with knowledge in HTML/CSS, JavaScript and React/Node.js and familiarity with API technology as REST. Ability to research using internal knowledge bases and public facing documentation to develop websites, always adhering to best practice coding standards.
                        I now seek for a job opportunity as a Front-end Junior Developer where I’m sure I will be able to absorb more practical & day-to-day knowledge.
                    </p>
                </div>
            </div>

            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me2} alt="" className="i-img" />
            </div>

        </div>


    )
}

export default Intro;

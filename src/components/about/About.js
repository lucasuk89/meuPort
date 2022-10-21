import "./About.css"
import aviao from "../../img/aviao.jpeg"
import gelo from "../../img/gelo.png"

const About = () => {
    return (



        <div className="a">

            <div className="a-left">
                <div className="a-card-bg"></div>
                <div className="a-card">
                    <img
                        src={aviao}
                        alt="aviaoIslandia"
                        className="a-img"
                    />
                </div>
            </div>

            <div className="a-right">
                <h1 className="a-title">About me</h1>
                <p className="a-sub">
                    My name is Lucas, Brazilian and a Junior Developer.
                </p>
                <p className="a-desc">
                    Graduated In Dentistry in 2012 and changing careers it’s being
                    challenging but very interesting. Before deciding to dedicate my
                    time to learn how to develop I’ve spoken to many friends who
                    have been working as developers for either long or short periods
                    but all very immersed in the I.T area, which has helped me a lot,
                    because they could guide me to what we thought that would the
                    best directions/first steps.
                    <br />
                    I now seek for a job opportunity as a Junior Developer, where I’m
                    sure I will be able to absorb more practical experience; day-to-day.

                    <br />
                    In my work history, I had the ease of adapting with the work
                    environment and follow up on both initial projects and projects
                    already in progress.
                    Examples such as running my own dental clinic and how to train
                    new team members so that work continues in a fluid and
                    productive way.

                </p>

                <div className="a-award">
                    <img src={gelo} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title"> Hobbies</h4>
                        <p className="a-award-desc">I am passionate about travel, sports, games and going out with my family.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About;
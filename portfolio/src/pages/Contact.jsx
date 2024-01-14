import LinkdInLogo from "../assets/images/linkedin.svg"
import GithubLogo from "../assets/images/github.svg"
import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <section className="section is-medium">
            
                <h1 className="title has-text-centered has-text-danger">Connect With Me</h1>
                <div className="columns is-centered">
                    <div className="column is-one-third">
                        <div className="box">
                            <div className="level is-flex is-flex-direction-column">
                                <p className="is-size-4 has-text-centered">
                                <img src={LinkdInLogo} alt="" className="image is-64x64 mr-4" />|
                                <Link to="https://www.linkedin.com/in/dalius-beck-jr/" className="is-size-3 has-text-weight-semibold mt-4 has-text-danger"> LinkedIn</Link></p>

                                <p className="has-text-centered is-size-4 ">LinkedIn/DaliusBeckJr</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="column is-one-third">
                        <div className="box">
                            <div className="level is-flex is-flex-direction-column">
                                <p className="is-size-4 has-text-centered">
                                <img src={GithubLogo} alt="" className="image is-64x64 mr-4" />|
                                <Link to="https://www.github.com/DaliusBeckjr" className="is-size-3 has-text-weight-semibold mt-4 has-text-danger"> Github</Link></p>

                                <p className="has-text-centered is-size-4 ">Github/DaliusBeckJr</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Contact;
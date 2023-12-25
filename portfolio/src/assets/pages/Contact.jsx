import LinkdInLogo from "../images/linkedin.svg"
import GithubLogo from "../images/github.svg"
import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <section className="section is-medium">
            
                <h1 className="title has-text-centered has-text-info">Connect With Me</h1>
                <div className="columns is-centered">
                    <div className="column is-one-third">
                        <div className="box">
                            <div className="level">
                                <img src={LinkdInLogo} alt="" className="image is-64x64" />
                                <p className="is-size-4">|</p>
                                <Link to="https://www.linkedin.com/in/dalius-beck-jr/" className="is-size-3 has-text-weight-semibold"> LinkedIn</Link>
                            </div>
                            <p className="has-text-centered is-size-4">LinkedIn/DaliusBeckJr</p>
                        </div>
                    </div>
                    <div className="column is-one-third">
                        <div className="box">
                            <div className="level">
                                <img src={GithubLogo} alt="" className="image is-64x64" />
                                <p className="is-size-4">|</p>
                                <Link to="https://www.github.com/DaliusBeckjr" className="is-size-3 has-text-weight-semibold"> Github</Link>
                            </div>
                            <p className="has-text-centered is-size-4">Github/DaliusBeckJr</p>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Contact;
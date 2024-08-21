import { Link } from "react-router-dom";



const Projects = () => {
    return (

        <section className="section is-medium">
                <h1 className="title has-text-danger">Projects</h1>
                {/* <div className="container"> */}
                
                    <div className="columns is-centered">
                        {/* card one */}
                        <div className="column is-one-third">
                            <div className="card is-rounded-xl">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="./src/images/paws_and_rescue_screenshot.png" />
                                    </figure>
                                    <div className="card-content">
                                        <div className="content ">
                                            <p className="">Paws and Rescue</p>
                                            <p className="">a web application designed to help users manage rescue animals. It provides a platform to create, view, and manage rescue animal profiles.</p>
                                            <p>
                                                <a href="https://skillicons.dev">
                                                    <img src="https://skillicons.dev/icons?i=flask,mysql,html,sass" alt="icons showing flask, mysql, docker, html and sass" />
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <footer className="card-footer">
                                        <nav>
                                            <Link className="card-footer-item" to="https://github.com/DaliusBeckjr/paws_rescue"> Github </Link>
                                        </nav>
                                    </footer>
                                </div>
                            </div>
                        </div>
                        {/* card two */}
                        
                    </div>
                {/* </div> */}
        </section>

    );
}

export default Projects;
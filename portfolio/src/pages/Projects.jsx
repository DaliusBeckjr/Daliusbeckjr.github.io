import { Link } from "react-router-dom";



const Projects = () => {
    return (

        <section className="section is-medium">
                <h1 className="title has-text-info">Projects</h1>
                {/* <div className="container"> */}
                
                    <div className="columns is-centered">
                        {/* card one */}
                        <div className="column is-one-third">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/256x256.png" />
                                    </figure>
                                    <div className="card-content">
                                        <div className="content has-text-centered">
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic aliquid dolores aspernatur odio quae assumenda rem possimus voluptatem temporibus ullam quibusdam adipisci nesciunt minus repellendus, iste provident ad autem?</p>
                                        </div>
                                    </div>
                                    <footer className="card-footer">
                                        <nav>
                                            <Link className="card-footer-item" to="https://www.github.com"> Github </Link>
                                        </nav>
                                    </footer>
                                </div>
                            </div>
                        </div>
                        {/* card two */}
                        <div className="column is-one-third">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/256x256.png" />
                                    </figure>
                                    <div className="card-content">
                                        <div className="content has-text-centered">
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic aliquid dolores aspernatur odio quae assumenda rem possimus voluptatem temporibus ullam quibusdam adipisci nesciunt minus repellendus, iste provident ad autem?</p>
                                        </div>
                                    </div>
                                    <footer className="card-footer">
                                        <nav>
                                            <Link className="card-footer-item" to="https://www.github.com"> Github </Link>
                                        </nav>
                                    </footer>
                                </div>
                            </div>
                        </div>
                        {/* card three */}
                        <div className="column is-one-third">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/256x256.png" />
                                    </figure>
                                    <div className="card-content">
                                        <div className="content has-text-centered">
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic aliquid dolores aspernatur odio quae assumenda rem possimus voluptatem temporibus ullam quibusdam adipisci nesciunt minus repellendus, iste provident ad autem?</p>
                                        </div>
                                    </div>
                                    <footer className="card-footer">
                                        <nav>
                                            <Link className="card-footer-item" to="https://www.github.com"> Github </Link>
                                        </nav>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
        </section>

    );
}

export default Projects;
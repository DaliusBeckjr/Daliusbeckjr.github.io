const About = () => {
    return (
        <section className="section is-medium">
            <h3 className="title has-text-info">
                About Me 
            </h3>
            <p className="is-size-5 mb-6">I am a creative Developer based in Arizona and I am passionate about creating stunning projects. I design and create static websites as well as creating API's for reactive web apps with the help of React and Python. I have always been fascinated with the backend part of the website, figuring out how it functions and trying to make my own websites fuctional using Python. Being a Virtual Creator and having a inconsiderable amount of ambition and optimism for creating amazing things is what drives me the most. 
            
            
            {/* My expertise lies in building the backend for websites using Python as my primary programming language of choice. I enjoy making webistes and learning new challenging things that consist in figuring out problems to optimize a website to let if function better */} </p>
            <div className="container">
                <div className="columns is-centered mx-5">
                    <div className="column is-half card m-2">
                        <div className="content">
                            <h3 className="title has-text-centered">Backend</h3>
                            <div className="is-flex-direction-column is-size-5">
                                <p>Django</p>
                                <p>Flask</p>
                                <p>SQL</p>
                                <p>SQLite3</p>
                                <p>Docker</p>
                            </div>
                        </div>
                    </div>
                    <div className="column is-half card m-2">
                        <div className="content">
                            <h3 className="title has-text-centered">Frontend</h3>
                            <div className="is-flex-direction-column is-size-5">
                                <p>React</p>
                                <p>Sass</p>
                                <p>Bulma</p>
                                <p>CSS</p>
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </section>
    );
}

export default About;
// import pdfFile from '../images/Daliusb_jr_resume.pdf';
import pdfFile from '../assets/images/Daliusb_jr_resume.pdf'

const Home = () => {
    const openResume = () => {
        window.open(pdfFile, '_blank');
    }

    return (
        <section className="section is-medium mt-3 ml-5 is-is-flex-direction-column is-justify-content-center is-align-items-baseline">
            <p className="is-size-3">Hello, </p>
            <h1 className="title is-size-1 mb-0"> I&apos;m  <span className="has-text-info">Dalius</span></h1>
            <h1 className="title is-size-1 mt-0">Software Engineer</h1>
            <h2 className="subtitle">I am a passionate Software Engineer specializing in building projects that lead to a successful product </h2>

            <div>
                <a href="https://github.com/DaliusBeckjr" className="button is-rounded mr-1">
                    github
                </a>
                {/* resume need to use onclick="window.open('resume location.pdf')" */}
                <button className="button is-rounded" onClick={openResume}> Resume/cv </button>
            </div>

        </section>
    );
}

export default Home;
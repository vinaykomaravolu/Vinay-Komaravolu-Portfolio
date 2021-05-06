import React from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import Resume from './assets/Vinay_Komaravolu_Resume.pdf';
import ReactTooltip from 'react-tooltip';
import About from './Pages/About';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Home from './Pages/Home';
import End from './Pages/End';
import { motion } from "framer-motion"
class App extends React.Component {

    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
        this.state = { toTopEnable: false };

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    scrollToTop() {
        scroll.scrollToTop();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        if (window.scrollY < 100) {
            this.setState({ toTopEnable: false });
        } else {
            this.setState({ toTopEnable: true });
        }
    }

    render() {
        return (
            <div className="relative z-1090">
                <nav className="flex top-0 flex-row-reverse bg-primary w-full fixed">
                    <div className=" z-10 pr-4 pt-2 pb-2 bl-2">
                        <motion.button className="focus:outline-none" whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}><Link activeClass="active" className="focus:none aboutme p-3 text-lg text-secondary hover:text-secondaryh" to="aboutme" spy={true} smooth={true} duration={500} >About Me</Link></motion.button>
                        <motion.button className="focus:outline-none" whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}><Link activeClass="active" className="education  p-3 text-lg text-secondary hover:text-secondaryh" to="education" spy={true} smooth={true} duration={500}>Education</Link></motion.button>
                        <motion.button className="focus:outline-none" whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}><Link activeClass="active" className="experience  p-3 text-lg text-secondary hover:text-secondaryh" to="experience" spy={true} smooth={true} duration={500}>Experience</Link></motion.button>
                        <motion.button className="focus:outline-none" whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}><Link activeClass="active" className="education  p-3 text-lg text-secondary hover:text-secondaryh" to="skills" spy={true} smooth={true} duration={500}>Skills</Link></motion.button>
                        <motion.button className="focus:outline-none" whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}><Link activeClass="active" className="projects  p-3 text-lg text-secondary hover:text-secondaryh" to="projects" spy={true} smooth={true} duration={500}>Projects</Link></motion.button>

                    </div>
                    {this.state.toTopEnable ? <div class="fixed animate-bounce flex flex-nowrap bottom-16 focus:outline-none right-0 p-5">
                        <button data-tip data-for='gototop' type="button" onClick={this.scrollToTop} className="focus:outline-none  h-10 w-10 p-3 text-lg text-secondary hover:text-secondaryh">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>

                        <ReactTooltip id='gototop' type='warning'>
                            <span>Go to the top!</span>
                        </ReactTooltip>
                    </div> : null}
                    <div class="fixed flex flex-row-reverse flex-nowrap bottom-0 right-4 z-50 bg-primary w-full">
                        <motion.a target="_blank"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            rel="noopener noreferrer" className=" p-3 text-lg text-secondary hover:text-secondaryh" href="https://www.linkedin.com/in/vinay-komaravolu/">
                            LinkedIn
                        </motion.a>
                        <motion.a a target="_blank"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            rel="noopener noreferrer" className=" p-3 text-lg text-secondary hover:text-secondaryh" href="https://github.com/vinaykomaravolu">
                            GitHub
                        </motion.a >
                        <motion.a target="_blank"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            rel="noopener noreferrer" className=" p-3 text-lg text-secondary hover:text-secondaryh" href={Resume}>
                            Resume
                        </motion.a >
                        <motion.a whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} className="p-3 text-lg text-secondary hover:text-secondaryh" href="mailto:vinay.komaravolu@gmail.com">Email</motion.a >
                    </div>

                </nav>

                <Element name="home" className="element" >
                    <Home />
                </Element>

                <Element name="aboutme" className="element" >
                    <About />
                </Element>

                <Element name="education" className="element">
                    <Education />
                </Element>

                <Element name="experience" className="element">
                    <Experience />
                </Element>

                <Element name="skills" className="element">
                    <Skills />
                </Element>

                <Element name="projects" className="element">
                    <Projects />
                </Element>

                <Element name="projects" className="w-screen h-48">
                    <End toTop={this.scrollToTop} />
                </Element>

            </div >
        );
    }
};

export default App;

import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
import Resume from './assets/Vinay_Komaravolu_Resume.pdf';
import ReactTooltip from 'react-tooltip';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
class App extends React.Component {

    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    render() {
        return (
            <div className="relative">
                <nav className="flex flex-row-reverse p-5">
                    <ul className="fixed flex flex-nowrap">
                        <li><Link activeClass="active" className="aboutme p-3 text-lg text-secondary hover:text-secondaryh" to="aboutme" spy={true} smooth={true} duration={500} >About Me</Link></li>
                        <li><Link activeClass="active" className="experience  p-3 text-lg text-secondary hover:text-secondaryh" to="experience" spy={true} smooth={true} duration={500}>Experience</Link></li>
                        <li><Link activeClass="active" className="education  p-3 text-lg text-secondary hover:text-secondaryh" to="education" spy={true} smooth={true} duration={500}>Education</Link></li>
                        <li><Link activeClass="active" className="projects  p-3 text-lg text-secondary hover:text-secondaryh" to="projects" spy={true} smooth={true} duration={500}>Projects</Link></li>
                        <li><Link activeClass="active" className="contact  p-3 text-lg text-secondary hover:text-secondaryh" to="contact" spy={true} smooth={true} duration={500}>Contact </Link></li>
                    </ul>
                    <div class="fixed flex flex-nowrap bottom-16 focus:outline-none right-0 p-5">
                        <button data-tip data-for='gototop' type="button" onClick={this.scrollToTop} className="focus:outline-none  h-10 w-10 p-3 text-lg text-secondary hover:text-secondaryh">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>

                        <ReactTooltip id='gototop' type='warning'>
                            <span>Go to the top!</span>
                        </ReactTooltip>
                    </div>
                    <div class="fixed flex flex-nowrap bottom-0 right-0 p-5">
                        <a className=" p-3 text-lg text-secondary hover:text-secondaryh" href="https://www.linkedin.com/in/vinay-komaravolu/">
                            linkedin
                    </a>
                        <a className=" p-3 text-lg text-secondary hover:text-secondaryh" href="https://github.com/vinaykomaravolu">
                            GitHub
                </a>
                        <a className=" p-3 text-lg text-secondary hover:text-secondaryh" href={Resume} target="_black">
                            Resume
                </a></div>

                </nav>


                <Element name="aboutme" className="element" >
                    <About />
                </Element>

                <Element name="experience" className="element">
                    <Experience />
                </Element>

                <Element name="education" className="element">
                    <Education />
                </Element>

                <Element name="projects" className="element">
                    <Projects />
                </Element>

                <Element name="contact" className="element">
                    <Contact />
                </Element>

            </div>
        );
    }
};

export default App;

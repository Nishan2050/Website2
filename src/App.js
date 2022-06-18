
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


const icon = <FontAwesomeIcon icon={faTwitter} />

function App() {
  return (
    <div className="App">
          <nav class = "sidebar-navigation ">

          <h1 class = "links" id = "name">Nishan Ghotra</h1>

          <div class="links" id = "image">

              <img src={process.env.PUBLIC_URL + "/2nishan.jpg"} />
          </div>



          <a class = "links" href = "#section1 ">Home</a>
          <a class = "links" href = "#section2">About</a>
          <a class = "links" href = "#section3">Projects</a>
          <a class = "links" href = "#section4">Contact</a>
          <a class = "links" href = "#section5">Resume</a>
          </nav>



          <div class = "page-content">
            <div class = "sections" id = "section1" >
            
              <h1> Hi, My name is Nishan </h1>
              <h2>
                  I am a Smart Contract Developer, specialising in solidity with experience in Javascript and ReactJs
              </h2>
              
              <a class = "button-down" href = "#section3 ">Learn More</a>
            </div>

            <div class = "sections" id = "section2">
              <h1 class="contact"> About me </h1>
              <p class= "para">   
                I started learning Blockchain in begining of 2020 and I can barely keep up this ever changing technology.
                But this fast paced environment has kept me hooked, excited and  eager to keep learning.
                Bringing ideas to life, joining 1000s of other developers accross the Globe in bringing Web3 to life. 
                We are already seeing 100s of DAPPs being built on Blockchain.
                My personal focus is on system integration, financial products and bank legacy systems
                that have been in existance since early 1950s are used everywhere.
                
                An average person understands how banks work, how chueqing account, savings account work. 
                integrating Blockchain systems slowly with legacy systems will help blockchain adoption and understanding among people. 
              </p>
            </div>

            <div class = "sections" id = "section3">
              <a href="/" >  
                <div class ="container">
                  <h1 class = "text">
                  First project
                  </h1>
                  
                  <h3>
                  Check out this to-do List made JavaScript, HTML and CSS
                  </h3>
                  <p>
                  Click Anywhere on this link card.
                  </p>
                </div> 
              </a>
              <a href="/" >  <div class ="container2">
                  <h1 class = "text">
                  Second project
                  </h1>

                  <h3>
                  Check out this Portforlio website made JavaScript, HTML and CSS
                  </h3>
                  <p>
                  Click Anywhere on this link card.
                  </p>
                </div>
              </a>
              <div class ="container3">
                  <h1 class = "text">
                  More Projects Coming Soon 
                  </h1>

              </div>
              <div class ="container3">
                  <h1 class = "text">
                  More Projects Coming Soon 
                  </h1>

              </div>
              <div class ="container3">
                  <h1 class = "text">
                  More Projects Coming Soon 
                  </h1>

                </div>
              <div class ="container3">
                  <h1 class = "text">
                  More Projects Coming Soon 
                  </h1>

              </div>
            </div>

            <div class = "sections" id = "section4">
              <div class="form">
                  <h1 class=" contact">
                    Contact Me
                  </h1>
                  <form>
                      <input type= "text" id= "name" placeholder=" Enter you name" /> <br></br> <br></br>
                      
                      <input type = "text" id= "email" placeholder= "Enter your email"/><br></br> <br></br>
                      <textarea placeholder= "Message" rows="8" cols="40"></textarea><br></br> <br></br>
                      <button class= "button">
                      Send
                      </button>

                  </form>
              </div>



              <div class="social">
                  <h1 class= "contact">Socials</h1>
                    <a href="#" class="fa fa-twitter"><FontAwesomeIcon icon={faTwitter} /></a> <br></br><br></br><br></br><br></br>

                    <a href="#" class="fa fa-linkedin"><FontAwesomeIcon icon={faLinkedin} /></a> <br></br><br></br><br></br><br></br>

                    <a href="#" class="fa fa-instagram"><FontAwesomeIcon icon={faInstagram} /></a> <br></br>
                  
              </div>





            </div>

            <div class = "sections" id = "section5">
              <h1>these are resume</h1>
            </div>
          </div>

    </div>
  );
}

export default App;

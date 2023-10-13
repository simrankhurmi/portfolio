import logo from './logo.svg';
import './App.css';
// import './images'
import './DownloadCv'
import Nav from './components/Nav';
import Content from './components/Content';

function App() {
  return (
  <>
   <div className="container">
        <div className="box">
          <Nav/>
            {/* <nav>
                <a href="#" className="logo">Simran</a>
               
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav> */}
            
          <Content/>
            {/* <div className="content">
                <div className="section-1">
                    <h1>Hi, I am <span>Simran Khurmi</span></h1>
                    <h3>React Developer</h3>
                    <p>Hand-based experience in web-based user interactions along with designing and implementing highly-responsive user interface component by deploying react components.</p>
                    <a href = "C:\Users\ASUS\Desktop\portfolio\SIMRAN KHURMI.pdf" download = "SIMRAN KHURMI"></a>
                    <button type="button" onclick={DownloadCv}> Download CV </button>
                </div>
                <div className="section-2">
                    <img src="./images/cv.png" alt=""/>
                </div>
               <div className="social">
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/simran-khurmi-0039551b5"><i className="fa-brands fa-linkedin"></i></a>
                </div>
             </div> */}
        </div>
     </div>
  </>
  );
}

export default App;

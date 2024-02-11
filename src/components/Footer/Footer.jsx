import director1 from "/src/assets/Director1.png";
import director2 from "/src/assets/Director2.png";
import director3 from "/src/assets/Director3.png";
import director4 from "/src/assets/Director4.png";
 
//for an alternate, more React- (and mobile-) friendly implementation - https://www.geeksforgeeks.org/how-to-create-a-simple-responsive-footer-in-react-js/


const Footer = () => {
    return (
        <footer>
            <div class="footer-section">
                <h2>Director info</h2>
                <p>Director's Name and Contact Information</p>
                <img src={director1} alt="Director 1" style={{width: "100px", height: "auto"}} />
                <p>Courtney Recht-Debreuille<br></br>BBA INSEEC<br></br>email: recht.courtney@gmail.com</p>
                
                <img src={director2} alt="Director 2" style={{width: "100px", height: "auto"}} />
                <p>Gunilla Andersson<br></br>Linkoping University<br />email: gunilla.s.andersson@liu.se</p>
                
                <img src={director3} alt="Director 3" style={{width: "100px", height: "auto"}} />
                <p>Janine Spears<br />DePaul University<br />email: jspears2@depaul.edu</p>
                
                <img src={director4} alt="Director 4" style={{width: "100px", height: "auto"}} />
                <p>Donna Wiencek<br />Western Illinois University<br />email: DM-Wiencek@wiu.edu</p> 
            </div>
            
            <div class="footer-section">
                <h2>School</h2>
                <p>School Information</p>
            </div>

            {/* <!-- Google Calendar Embed --> */}
            <div class="calendar-embed">
                <iframe src="https://calendar.google.com/calendar/embed?src=a9ccdb92850282dcfa9993cd2f00e0991e81369602f093463f10a4383bb68b5e%40group.calendar.google.com&ctz=America%2FChicago" style={{border: "0", width: "400px", height: "300px", frameborder: "0", scrolling: "no"}}></iframe>
            </div> 
        </footer>
    );
}
export default Footer;
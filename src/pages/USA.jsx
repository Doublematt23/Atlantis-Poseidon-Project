import titlePic from "/src/assets/USA.png";
const USA = () => {
    return (
        <div class="main-content">
            <h2 class="france-heading">U<span>S</span><span>A</span></h2>
            <h3 class="france-heading"><img src={titlePic} alt="USA" width="1000" height="500" /></h3>

            <p>Students will be attending the Depaul College of Computing and Digital Media (CDM) located in the heart of the Loop in Chicago. As graduate studets, you will spend most of your time attending classes located in the CDM. Students must have a 3.0 GPA and complete five prerequsite courses to participate in this program. The courses you will be taking are:
                <ul>
                    <li>Introductory Courses: Statistics, Introduction to Programming - Statistics (IT 403) is waived for most all Atlantis students. Programming may be taken before travel to US.</li>
                    <p><li>Foundational Courses: Systems Analysis and Design, IT Project Management, Organizational Modeling, Database Design, Enterprise Cloud Computing, Enterprise Systems - Several of these courses have prerequisites. Order taken may depend on your choice of domain. Enterprise Systems is sometimes waived for Atlantis students.</li></p>
                    <p><li>Major Elective Courses: Choose from a list of courses on CDM website. Three courses must be from a single domain area listed below.</li></p>
                    <ul><p><li> Project Management and Business Analysis - Learn to plan and execute IT projects, understand end-user and organizational needs, and model appropriate systems functions for these needs.</li></p>
                    <p><li> Analytics-Driven Decision Making - Learn advanced analytics concepts, tools, systems, and backend data management. </li></p>
                    <p><li> IT Governance and Legal Responsibilities - Learn to manage the processes of IS operations while complying legal requirements and minimizing risks.</li></p>
                    <p><li> Data Management - Learn to plan, develop and implement databases, data warehouse, data centers, and business intelligence (BI) systems.</li></p>
                    <p><li> Digital Innovation and Entrepreneurship - Learn to define digitally-driven innovation and fostering entrepreneurship initiatives.</li></p>
                    <p><li> IT Leadership and Operations - Learn the characteristics and essential quality of being an effective leader in the IS organization.</li></p></ul>
                </ul>

                <ul>
                    <p><li>Open Elective Courses: Any graduate CDM course numbered 421 to 699. May take an additional major elective for this requirement.</li></p>
                    <p><li>Capstone Course: Capstone course, Internship, or Research. For this requirement, most take the IS 577 course.</li></p>
                
                </ul>
            </p> 
        </div>
    );
};
 
export default USA;
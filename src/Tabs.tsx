const Home = () => {

    return (
        <div>
            <h2>Welcome!</h2>
            <p>
                I'm Julia, a computer science student from Brazil. 
                I'm currently in the fifth year of my undergraduate studies and am currently a software engineering intern at Amdocs. 
                This site was created with the intention of exposing my resume and potentially hosting future projects.
            </p>
        </div>
    );
}

const Education = () => {

    return (
        <div>
            <h2>Education</h2>
            <h3>Bachelor's of Computer Science @ University of São Paulo</h3>
            <p><b>Attendance dates:</b> Feb. 2018 - Dec. 2022 (expected)</p>
        </div>
    );
}

const JobExperience = () => {
    return (
        <div>
            <h2>Work Experience</h2>
            <h3>Software Engineering Intern @ Amdocs</h3>
            <h4>11/2021 - present</h4>
            <p>
                <li>Developed desktop applications for the back office of third party companies using Java and SQL.</li>
                <li>Implemented new business flows in an application used by a major telecommunications company, improving the experience of operators and customers.</li></p>
            <h3>Software Development Intern @ Já Vendeu</h3>
            <h4>01/2021 - 10/2021</h4>
            <p>
                <li>Developed the company's website (javendeu.com), an online platform for secondhand furniture sales where the company is the mediator; as well as the back office used by the operations/sales team.</li>
                <li>Used React (HTML, CSS, Javascript) for front-end web development, and Python 3 and PostgreSQL for back-end development.</li>
                <li>Improved user experience by implementing Python scripts to automate cleanups on the back office.</li>
            </p>
        </div>
    );
}


const Activities = () => {
    return (
        <div>
            <h2>Extracurricular Activities</h2>
            <h3>2D Artist and Programmer @ Fellowship of the Game</h3>
            <h4>August 2021 - present</h4>
            <p>
                <b>Fellowship of the Game</b> is a group focused on game development, primarily for PC, web and mobile platforms, in addition to organizing and promoting events and classes about the topic.
                My current roles in the group's projects involve animating cutscenes and programming C# scripts in Unity and creating 2D digital art for games.
            </p>
            <h3>Event Organizer and Back End Developer @ Semcomp</h3>
            <h4>April 2021 - October 2021</h4>
            <p>
                <b>Semcomp</b> is an annual event aimed at Computer Science and Information Systems students at ICMC-USP, with various educational and recreational activities.
                At Semcomp, I organized fun contests for event participants and conducted online lectures.
                I also participated in the back-end development for a game called <b>Subi no Ônibus</b>, that was developed for the 24th edition of Semcomp.
            </p>
            <p>
                I developed the game's API and database using Node.js and MongoDB, making sure that it was secure from hacking attempts, in order to guarantee a reliable scoreboard for the event's gaming competition. It was the first time since 2018 that the game wasn't hacked during the event.
            </p>
            <h3>Volunteer and Coordinator @ PET Computação</h3>
            <h4>August 2019 - August 2021</h4>
            <p>
                <b>PET Computação</b> is a group focused on the tutoring and education of non-University students and volunteering.
                I was responsible for the planning and organization of computer classes for seniors, as well as mini-lectures presented by members of the group and guests to improve their public speaking skills.
            </p>
            <h3>Member @ Ganesh ICMC</h3>
            <h4>August 2018 - August 2019</h4>
            <p>
                <b>Ganesh</b> is a group dedicated to the studies of various areas of Information Security.
                My roles in the group involved organizing study meeting and giving Computer Networks classes for the students who signed up for the group's entry process in 2019.
            </p>
        </div>
    );
}

const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>
            <p>This website :)</p>
        </div>
    );
}

const Skills = () => {
    return (
        <div>
            <h2>Skills</h2>
            <h3>Programming Languages</h3>
            <p>Python, C, C++, C#, Java, HTML, CSS, Javascript, SQL</p>
            <h3>Tools & Frameworks</h3>
            <p>Node.js, React, React Native, Git, Unity, Docker</p>
            <h3>Databases</h3>
            <p>MySQL, PostgreSQL, MongoDB</p>
            <h3>Languages</h3>
            <p>Portuguese (Native), English (Advanced), Spanish (Intermediate)</p>
        </div>
    );
}

export { Home, Education, JobExperience, Activities, Projects, Skills };
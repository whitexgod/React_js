import "./About.css";
import dp from "../Images/dp.jpg";
import python from "../Images/python.gif";
import C from "../Images/C.gif";
import java from "../Images/java.gif";
import React, {useState,useEffect} from 'react';
import Footer from "../Footer/Footer";
import html from "../Images/html.gif";
import css from "../Images/css.gif";
import bootstrap from "../Images/bootstrap.gif";
import javascript from "../Images/javascript.gif";
import react from "../Images/react.gif";

export default function Home() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var day = today.getDay();
    let time = new Date().toLocaleTimeString('it-IT');
    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    const [Time, setTime] = useState(time);
    function clock(){
        let time = new Date().toLocaleTimeString('it-IT');
        setTime(time);
    }
    useEffect(()=>{
        clock();
        setInterval(clock, 1000);
    },[])

    return (
        <div className="Home-Page">
            <div className="update-Box">
                <h3 className="update-Box-h3">Today is : {daylist[day]}</h3>                
                <h4 className="update-Box-h4">{date}</h4>
                <h4 onClick={clock} className="update-Box-h4">{Time}</h4>
            </div>
            <img className="profile-picture" src={dp} alt="Profile picture" />
            <div className="About">
                <h1 className="About-h1">Hi, Welcome to my Portfolio.</h1>
                <textarea readOnly>An enthusiastic fresher with highly motivated and leadership skills having a bachelors of Engineering degree
                (B.Tech) in Computer Science and Technology from Maulana Abul Kalam Azad University of Technology, West Bengal.
                I am highly driven by the evolving technologies around me and i find it fun to learn about them as much i can.
                Currently i am seeking for opportunities to work under some organization where i can contribute and also further develop my 
                skills even further. I am always open to new ideas and solutions if it has enough logic in it.
                </textarea>
                <h3 className="About-h3">Some of my skills include : </h3>
                <ul>
                    <li className="heading">Programming Language's like
                    <ul className="program-list">
                        <li><a target="_blank" href="https://docs.python.org/3/">Python Programming Language</a><img className="skills-image" src={python} alt="pyhton.gif"></img></li>
                        <li><a target="_blank" href="https://devdocs.io/c/">C Programming Language</a><img className="skills-image" src={C} alt="C.gif"></img></li>
                        <li><a target="_blank" href="https://docs.oracle.com/en/java/">Java Programming Language</a><img className="skills-image" src={java} alt="java.gif"></img></li>
                    </ul>
                    </li>
                    <li className="heading">Web developement tools like
                    <ul className="program-list">
                        <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a><img className="skills-image" src={html} alt="html.gif"></img></li>
                        <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a><img className="skills-image" src={css} alt="css.gif"></img></li>
                        <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a><img className="skills-image" src={javascript} alt="javascript.gif"></img></li>
                        <li><a target="_blank" href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">BootStrap</a><img className="skills-image" src={bootstrap} alt="bootstrap.gif"></img></li>
                        <li><a target="_blank" href="https://reactjs.org/docs/getting-started.html">React js</a><img className="skills-image" src={react} alt="react.gif"></img></li>
                    </ul>
                    </li>
                    <li className="heading">Machine Learning </li>
                    <li className="heading">Automation with Pyhton </li>
                    <li className="heading">Solving Coding Problems </li>
                    <li className="heading">Playing Chess </li>                  
                </ul>
            </div>
            <Footer/>
        </div>
    )
}

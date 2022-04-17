import React,{useState, useEffect} from "react";

const Container = () => {

    const [isShown, setIsShown] = useState(false);
    const [aboutIsShown, setAboutIsShown] = useState(false);

    const projectToggle = () => {
        setIsShown(!isShown);
        setAboutIsShown(false);
    }

    const aboutToggle = () => {
        setAboutIsShown(!aboutIsShown);
        setIsShown(false);
    }


    return (
        <div class='main'>
            <img src=''></img>
            <h1 class='name'>STEPHANIE BOYNE</h1>
            <h2 class='desc'>Professional Software Development Student</h2>
            <ul class='list'>
                <li>
                    <a onClick={aboutToggle}>About</a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/stephanie-boyne-299189213/' target='blank'>LinkedIn</a>
                </li>
                <li>
                    <a href='mailto:stephanie_boyne@yahoo.co.uk' target='blank'>Email</a>
                </li>
                <li>
                    <a onClick={projectToggle}>
                    Projects</a>
                </li> 
            </ul>
            {isShown && (
                <div class='container'>
                <div class='project'>
                    <h3>SHOP INVENTORY APP</h3>
                    <p><a href='https://github.com/stephaniepboyne/First_Project' class='gitrepo' target="blank">GitHub</a></p>
                    <p class='info'>I developed an inventory app for a shop selling Scottish Contemporary Art Prints using Python, Flask, SQL, and HTML/CSS. The app allows users to track and modify the inventory stock, as well as the information regarding each print/artist. </p>
                    <img src={require('./project1.png')} class="project-img"/>
                </div>
                </div>)}
            {aboutIsShown && ( 
                <div class='about-container'>
                    <div class='project'>
                        <h3>ABOUT</h3>
                    </div>
                </div>
            )}
    
           
        </div>
    )

}

export default Container
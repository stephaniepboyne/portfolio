import React,{useState, useEffect} from "react";

const Container = () => {

    const [landingIsShown, setLandingIsShown] = useState(true);
    const [isShown, setIsShown] = useState(false);
    const [aboutIsShown, setAboutIsShown] = useState(false);

    const projectToggle = () => {
        setIsShown(!isShown);
        setAboutIsShown(false);
        setLandingIsShown(false);
    }

    const aboutToggle = () => {
        setAboutIsShown(!aboutIsShown);
        setIsShown(false);
        setLandingIsShown(false);
    }

    const home = () => {
        setIsShown(false);
        setAboutIsShown(false);
        setLandingIsShown (true);
    }

    


    return (
        <div class='main'>
            <img src=''></img>
            <h1 class='name' onClick={home}>STEPHANIE BOYNE </h1>
            <br></br>
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
                    <hr></hr>
                    <p class='info'>I developed an inventory app for a shop selling Scottish Contemporary Art Prints using Python, Flask, SQL, and HTML/CSS. The app allows users to track and modify the inventory stock, as well as the information regarding each print/artist. </p>
                    <img src={require('./project1.png')} class="project-img"/>
                </div>
                </div>)}
            {aboutIsShown && ( 
                <div class='about-container'>
                    <div class='project'>
                        <h3>ABOUT</h3>
                        <hr></hr>
                        <h3>Education</h3> 
                        
                        <p><i class='date'>February 2022 - Present</i></p>
                        <p class='info'><b>CodeClan</b></p>
                        <p class='info'>Professional Development Award in Software Development</p>
                        
                        <p><i class='date'>2017 - 2021</i></p>
                        <p class='info'><b>SOAS University of London</b></p>
                        <p class='info'>BA Korean and World Philosophies</p>
                        <p class='info'>First Class Honours</p>
                        <hr></hr>
                        <h3>Professional Experience</h3> 
                     
                        <p><i class='date'>June 2020 - September 2020</i></p>
                        <p class='info'><b>TotalEnergies E&P UK</b></p>
                        <p class='info'>HR Assistant</p>
                      
                        <p><i class='date'>2016 - 2019</i></p>
                        <p class='info'><b>Buchanan Bistro</b></p>
                        <p class='info'>Barista / Waitress</p>
                    </div>
                </div>
            )}
            {landingIsShown && (
                <div class='landing-sentence'><h3 >A curious and enthusiastic learner on the way to becoming a full stack developer.</h3></div>
            )}

        
    
           
        </div>
    )

}

export default Container
import React from 'react';
import Card from '../components/card';
import SunAnimated from '../components/sunAnimated';

const AboutUs = () => {
    return(
        <div className="class-AboutUs class-ContactUs">
            <h1>About OWPC (openweathermapchallenge)</h1>
            <Card 
                mapData={[{
                    value: "This is a repository to complete a challenge which consists of applying the api called openweathermap, which is used to consult the climate status of each country."
                }]}
            />
            <SunAnimated/>
        </div>
    )
}

export default AboutUs;
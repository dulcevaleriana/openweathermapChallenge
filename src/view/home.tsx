import React, {useState, useEffect} from 'react';
import {getWeatherData} from '../dataWeather/getWeatherData';
import {ScaleLoader} from 'react-spinners';
import SunAnimated from '../components/sunAnimated';
import Card from '../components/card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureFull } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';
import { faTemperature0 } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faGaugeSimpleHigh } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    const [weatherdata, setWeatherdata] = useState<any | null>(null);
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    const [startSearch, setstartSearch] = useState(false);
  
    const getData = async () => {
      try{
        setLoading(true);
        let data = await getWeatherData(city);
        setWeatherdata(data);
        setLoading(false);
        console.log(data);
      }catch(error){
        let errorMessage = "Some mistake was happend, please try again";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        console.log(errorMessage);
      }
    }
  
    useEffect(() => {
      getData();// eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <div className="class-home">
          <div>
          <SunAnimated startSearch={startSearch}/>
          {weatherdata && (
              <div>
                <h1>28<span>oC</span></h1>
                <h5><strong>{weatherdata.name} | {weatherdata.sys.country}</strong></h5>
                <h5>{weatherdata.weather[0].main}: {weatherdata.weather[0].description}</h5>
              </div>
          )}
          </div>
          <div>
            <input onChange={(a) => setCity(a.target.value)} type="text" placeholder="Write what weather country do you want to know"/>
            <button onClick={() => {getData();setstartSearch(true)}} type="button">
              <FontAwesomeIcon icon={faSearch} /> search
            </button>
            {startSearch ? (
              <>
              {loading ? (
              <ScaleLoader
                loading={loading}
                color={'#000'}
              />
            ) : (
              <>
                {weatherdata ? (
                    <div>
                      {/* <img src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt="icon" /> */}
                      <Card 
                        title="General"
                        iconTitle={faTemperatureFull}
                        mapData={[
                          {
                            name:"humidity:",
                            icon:faDroplet,
                            value: weatherdata.main.humidity
                          },
                          {
                            name:"pressure:",
                            icon:faBolt,
                            value: weatherdata.main.pressure
                          },
                          {
                            name:"level:",
                            icon:faTemperatureHigh,
                            value: weatherdata.main.sea_level
                          }
                        ]}
                      />
                      <Card 
                        title="Temp"
                        iconTitle={faTemperatureFull}
                        mapData={[
                          {
                            name:"Temp:",
                            icon:faTemperatureFull,
                            value: weatherdata.main.temp
                          },
                          {
                            name:"Max Temp:",
                            icon:faTemperatureHigh,
                            value: weatherdata.main.temp_max
                          },
                          {
                            name:"Min Temp:",
                            icon:faTemperature0,
                            value: weatherdata.main.temp_min
                          }
                        ]}
                      />
                      <Card 
                        title="Wind"
                        iconTitle={faWind}
                        mapData={[
                          {
                            name:"Deg:",
                            icon:faTemperatureHigh,
                            value: weatherdata.wind.deg
                          },
                          {
                            name:"Gust:",
                            icon:faWind,
                            value: weatherdata.wind.gust
                          },
                          {
                            name:"Speed:",
                            icon:faGaugeSimpleHigh,
                            value: weatherdata.wind.speed
                          }
                        ]}
                      />
                    </div>
                    ) : null}
                </>
              )}
              </>
            )
            :
            (
              <div className="class-wellcomeMessage">
                <FontAwesomeIcon icon={faArrowUp} />
                <h2>Wellcome to OWPC, <br/> Find the climate of any part of the world here !!</h2>
              </div>
            )}
          </div>
      </div>
    )
}

export default Home;
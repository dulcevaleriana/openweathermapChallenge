import React, {useState, useEffect} from 'react';
import {getWeatherData} from '../dataWeather/getWeatherData';
import {ScaleLoader} from 'react-spinners';
import SunAnimated from '../components/sunAnimated';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Card from '../components/card';

const Home = () => {
    const [weatherdata, setWeatherdata] = useState<any | null>(null);
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
  
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
          <SunAnimated/>
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
            <button onClick={getData} type="button">
              <FontAwesomeIcon icon={faSearch} /> search
            </button>
            {loading ? (
              <ScaleLoader
                // css={}
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
                      mapData={[
                        {
                          name:"humidity:",
                          value: weatherdata.main.humidity
                        },
                        {
                          name:"pressure:",
                          value: weatherdata.main.pressure
                        },
                        {
                          name:"level:",
                          value: weatherdata.main.sea_level
                        }
                      ]}
                    />
                    <Card 
                      title="Temp"
                      mapData={[
                        {
                          name:"Temp:",
                          value: weatherdata.main.temp
                        },
                        {
                          name:"Max Temp:",
                          value: weatherdata.main.temp_max
                        },
                        {
                          name:"Min Temp:",
                          value: weatherdata.main.temp_min
                        }
                      ]}
                    />
                    <Card 
                      title="Wind"
                      mapData={[
                        {
                          name:"Deg:",
                          value: weatherdata.wind.deg
                        },
                        {
                          name:"Gust:",
                          value: weatherdata.wind.gust
                        },
                        {
                          name:"Speed:",
                          value: weatherdata.wind.speed
                        }
                      ]}
                    />
                  </div>
                  ) : null}
              </>
            )}
          </div>
      </div>
    )
}

export default Home;
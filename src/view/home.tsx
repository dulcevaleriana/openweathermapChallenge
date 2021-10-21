import React, {useState, useEffect} from 'react';
import {getWeatherData} from '../dataWeather/getWeatherData';
import {ScaleLoader} from 'react-spinners';
import SunAnimated from '../components/sunAnimated';

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
            <div>
              <h1>28<span>oC</span></h1>
              <h5><strong>Colombia | CU</strong></h5>
              <h5>Clouds: Broken clouds </h5>
            </div>
          </div>
          <div>
            <input onChange={(a) => setCity(a.target.value)} type="text" placeholder="Write what weather country do you want to know"/>
            <button onClick={getData} type="button">search</button>
            {loading ? (
              <ScaleLoader
                // css={}
                loading={loading}
                color={'#000'}
              />
            ) : (
              <>
                {weatherdata ? (
                  <>
                    <img src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt="icon" />
                    <p>{weatherdata.main.temp}</p>
                    <p>{weatherdata.main.temp_max}</p>
                    <p>{weatherdata.main.temp_min}</p>
                    <p>{weatherdata.main.temp}</p>
                    <p>{weatherdata.weather[0].main}</p>
                    <p>{weatherdata.weather[0].description}</p>
                    <p>{weatherdata.name}</p>
                    <p>{weatherdata.sys.country}</p>
                  </>
                  ) : null}
              </>
            )}
          </div>
      </div>
    )
}

export default Home;
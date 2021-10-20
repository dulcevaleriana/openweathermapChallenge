import React, {useState, useEffect} from 'react';
import {getWeatherData} from '../dataWeather/getWeatherData';
import {ScaleLoader} from 'react-spinners';

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
      }catch(error){
        let errorMessage = "Some mistake was happend, please try again";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        console.log(errorMessage);
      }
    }
  
    useEffect(() => {
      getData();
    },[]);

    return(
        <div className="class-home">
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
    )
}

export default Home;
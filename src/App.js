import React, {useState, useEffect} from 'react';
import {getWeatherData} from './dataWeather/getWeatherData';
import {ScaleLoader} from 'react-spinners';

function App() {
  const [weatherdata, setWeatherdata] = useState(null);
  const [city, setCity] = useState("Lahore");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try{
      setLoading(true);
      let data = await getWeatherData(city);
      setWeatherdata(data);
      setLoading(false);
    }catch(error){
      console.log(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  },[]);

  return (
    <div className="App">
      <input onChange={(a) => setCity(a.target.value)} type="text" placeholder="Write what weather country do you want to know"/>
      <button onClick={getData} type="button">search</button>
      {loading ? (
        <ScaleLoader
          // css={}
          size={200}
          loading={loading}
          color={'#000'}
        />
      ) : (
        <>
          {weatherdata ? (
            <>
            <img src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt="icon" />
              <p>{parseFloat(weatherdata.main.temp - 273.15).toFixed(1)}</p>
              <p>{parseFloat(weatherdata.main.temp_max - 273.15).toFixed(1)}</p>
              <p>{parseFloat(weatherdata.main.temp_min - 273.15).toFixed(1)}</p>
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
  );
}

export default App;

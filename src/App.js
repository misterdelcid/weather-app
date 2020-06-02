import React, { useState } from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import { 
  SearchBar, 
  CityAndDate, 
  WeatherDisplay, 
  ClearSkiesDay, 
  ClearSkiesNight,
  CloudyDay,
  CloudyNight,
  HazeDay,
  HazeNight,
  RainyDay,
  RainyNight,
  SnowyDay,
  SnowyNight,
  ThunderDay,
  ThunderNight,
  Standard,
 } from './components'

const App = () => {
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [temperature, setTemperature] = useState({temp: ''});
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [query, setQuery] = useState('');
  const [icon, setIcon] = useState('');

  const api = {
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
    key: "31a8ca3c090b163277e525f713e4101f",
    icon: `http://openweathermap.org/img/wn/${icon}@4x.png`,
  };

  const handleSearch = () => {
      Axios.get(`${api.baseURL}?q=${query}&units=imperial&appid=${api.key}`)
        .then(result => {
          const data = result.data;
          setTemperature(data.main);
          setDescription(data.weather[0].description);
          setCity(data.name);
          setCountry(data.sys.country);
          setIcon(data.weather[0].icon);
          setQuery('');
          setSunrise(data.sys.sunrise);
          setSunset(data.sys.sunset);
        })
        .catch(error => console.error(error));
    }

  return (
    <StyledApp icon={icon}>
      <StyledContainer>
        <SearchBar 
          query={query} 
          setQuery={setQuery} 
          handleSearch={handleSearch}
        />
        <CityAndDate 
          city={city}
          country={country}
        />
        <WeatherDisplay 
          temperature={temperature}
          description={description}
          icon={api.icon}
        />
      </StyledContainer>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 0;
  transition: 1s;
  background: url(${props => 
    (props.icon === '01d' && ClearSkiesDay) ||
    (props.icon === '01n' && ClearSkiesNight) ||
    (props.icon === '02d' && CloudyDay) || 
    (props.icon === '03d' && CloudyDay) || 
    (props.icon === '04d' && CloudyDay) ||
    (props.icon === '02n' && CloudyNight) || 
    (props.icon === '03n' && CloudyNight) || 
    (props.icon === '04n' && CloudyNight) || 
    (props.icon === '50d' && HazeDay) ||
    (props.icon === '50n' && HazeNight) ||
    (props.icon === '09d' && RainyNight) ||
    (props.icon === '09n' && RainyNight) ||
    (props.icon === '10d' && RainyDay) ||
    (props.icon === '10n' && RainyNight) ||
    (props.icon === '13d' && SnowyDay) ||
    (props.icon === '13n' && SnowyNight) ||
    (props.icon === '11d' && ThunderDay) ||
    (props.icon === '11n' && ThunderNight) ||
    Standard
  }) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const StyledContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding-top: 30px;
  @media (min-width: 600px) {
    width: 90%;
  }
  @media (min-width: 900px) {
    width: 85%;
  }
`;



export default App;

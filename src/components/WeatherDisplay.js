import React from 'react'
import styled from 'styled-components'

const WeatherDisplay = (props) => (
  <StyledWeatherDisplay>
    <StyledContainer>
      <div className={props.description ? "weather visible" : "weather"}>
        <StyledIconAndTemp>
          <StyledIcon src={props.icon} />
          <div>
            <StyledTemperature>
              {Math.round(props.temperature.temp)}
              <StyledDegree>°</StyledDegree>
            </StyledTemperature>
            <StyledDescription>{props.description}</StyledDescription>
          </div>
        </StyledIconAndTemp>
      </div>
    </StyledContainer>
  </StyledWeatherDisplay>
);

const StyledWeatherDisplay = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  color: #fff;
  height: 500px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.9)
  );
  transition: 1s;
  .weather {
    opacity: 0;
    transform: translateX(60px);
  }
  .weather.visible {
    opacity: 1;
    transform: translateX(0px);
    transition: 1s;
  }
`;

const StyledIconAndTemp = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 0 60px 0;
  @media (min-width: 900px) {
    margin-bottom: 80px
  }
`;

const StyledIcon = styled.img`
  width: 90px;
`;

const StyledTemperature = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 8rem;
  font-weight: 300;
  text-shadow: 4px 3px 8px rgba(0, 0, 0, 0.35);
  margin: 0;
  padding: 0;
  line-height: 1;
  @media (min-width: 900px) {
    font-size: 9rem;
  }
`;

const StyledDegree = styled.span`
  margin-top: 12px;
  font-size: 4rem;
  font-weight: 300;
  line-height: 1;
`;

const StyledDescription = styled.div`
  margin: 0 10px;
  padding: 0;
  font-weight: 300;
  font-style: italic;
  font-size: 1rem;
  line-height: 1;
  text-shadow: 2px 1px 4px rgba(0, 0, 0, 0.35);
`;

const StyledContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  @media (min-width: 600px) {
    width: 90%;
  }
  @media (min-width: 900px) {
    width: 85%;
  }
`;

export default WeatherDisplay;
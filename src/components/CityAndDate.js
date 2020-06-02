import React from 'react'
import styled from 'styled-components'
import moment from "moment"

const CityAndDate = (props) => (
  <StyledCityAndDate>
    <div className={props.city ? 'city-date visible':'city-date'}>
      <StyledCity>{`${props.city}, ${props.country}`}</StyledCity>
      <StyledDate>{moment().format("dddd MMM Do")}</StyledDate>
      <StyledShadow />
    </div>
  </StyledCityAndDate>
);

const StyledCityAndDate = styled.div`
  margin: 60px auto;
  color: #fff;
  width: 300px;
  text-align: center;
  font-weight: 300;
  text-shadow: 2px 1px 4px rgba(0, 0, 0, 1);
  .city-date {
    opacity: 0;
    transform: translateY(30px);
  }
  .city-date.visible {
    opacity: 1;
    transform: translateY(0px);
    transition: 1s;
  }
`;

const StyledCity = styled.p`
  position: relative;
  font-size: 1.8rem;
  z-index: 5;
  @media (min-width: 900px) {
    font-size: 2.4rem;
  }
`;

const StyledDate = styled.p`
  position: relative;
  font-size: 1rem;
  z-index: 5;
  @media (min-width: 900px) {
    font-size: 1.2rem;
  }
`;

const StyledShadow = styled.div`
  height: 100px;
  width: 200px;
  filter: blur(60px);
  background-color: rgba(0,0,0, .35);
  margin: -70px auto;
  border-radius: 300px;
  z-index: 0;
`

export default CityAndDate;


import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import './russianCities.css'
import {toggleRussianCities} from '../../../../../actions/actions'
import {russianCitySearch} from '../../../../../actions/actions'

class RussianCities extends Component {
  
  render() {
  
  let regions = this.props.RussianRegionsMediazona.data;
  

  if (this.props.russianCityToggler) {
  return (
    <div className='russian-cities-container-show'>
      {regions.map((region, index) => {
        let name = region.name;
        let dead = region.dead.reduce((acc,curr) => {
          return acc + curr
      });
      let recovered = region.recovered.reduce((acc,curr) => {
        return acc + curr
      });
      
      let confirmed = region.confirmed.reduce((acc,curr) => {
        return acc + curr
      });

        return (
          <div key={index} className='regions-stat-container'>
            <div style={{position: "relative", display: 'flex'}}>
              <p className='regions-sick'>{name}</p>
              <p className='regions-cases'>{confirmed}</p>
              <p className='regions-recovered'>{recovered}</p>
              <p className='regions-deaths'>{dead}</p>
            </div>
          </div>
        )} 
      )}
    </div>
    )
  } else {
    return (
      <div className='russian-cities-container'></div>
    )
  }
  }
}


function mapStateToProps(state) {
  return {...state}
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (props) => dispatch(toggleRussianCities(props)),
    filterRegions: (props, text, regions, initialRegions) => dispatch(russianCitySearch(props, text, regions, initialRegions))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RussianCities)


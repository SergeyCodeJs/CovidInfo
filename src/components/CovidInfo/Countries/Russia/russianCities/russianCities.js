import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import './russianCities.css'
import {toggleRussianCities} from '../../../../../actions/actions'
import {russianCitySearch} from '../../../../../actions/actions'

class RussianCities extends Component {
  
  render() {
  
  let regions = this.props.rusRegionsForFilter;

  if (this.props.russianCityToggler) {
  return (
    <div className='russian-cities-container-show'>
      {regions.map((region, index) => {
        return (
          <div key={index} className='regions-stat-container'>
            <div style={{position: "relative", display: 'flex'}}>
              <p className='regions-sick'>{region.name}</p>
              <p className='regions-cases'>{region.cases}</p>
              <p className='regions-recovered'>{region.cured}</p>
              <p className='regions-deaths'>{region.deaths}</p>
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


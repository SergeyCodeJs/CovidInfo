import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import './russianCities.css'
import {toggleRussianCities} from '../../../../../actions/actions'
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import {russianCitySearch} from '../../../../../actions/actions'

class RussianCities extends Component {
  
  render() {
  
  let regions = this.props.rusRegionsForFilter;
  let initialRegions = this.props.rusRegions;

  if (this.props.russianCityToggler) {
  return (
    <div className='russian-cities-container-show'>
      <form noValidate autoComplete="off">
        <TextField onChange={(event) => this.props.filterRegions(this.props, event.target.value, regions, initialRegions)} id="standard-basic" label="Поиск по региону..." />
      </form>
      <div className='closer' onClick={() => this.props.onClick(this.props)}>Х</div>
      {this.props.rusRegionsForFilter.map((region, index) => {
        return (
          <div key={index} className='regions-stat-container'>
            <div className='regions-sick'>{region.name}</div>
            <div className='regions-sick red regions-font-size' > Случаев заражения: {region.cases}</div>
            <div className='regions-sick green regions-font-size' > Выздоровело: {region.cured}</div>
            <div className='regions-sick regions-font-size black' > Погибло: {region.deaths}</div>
          </div>
        )
      })}
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


import React from 'react'
import { connect } from 'react-redux'
import './Russia.css'
import {toggleRussianCities, russianCitySearch, closeRussianCities} from '../../../../actions/actions'
import close from '../../../../images/close.png'
import search from '../../../../images/search.png'
import { addSpaceToNumber } from '../../../../utils/assistFunctions'

class Russia extends React.Component {
  
  render() {

    let total = addSpaceToNumber(this.props.russiaCommon.confirmed.value)
    let recovered = addSpaceToNumber(this.props.russiaCommon.recovered.value)
    let deaths = addSpaceToNumber(this.props.russiaCommon.deaths.value)

    let regions = this.props.rusRegionsForFilter;
    let initialRegions = this.props.rusRegions;

    
    let yesterdayDate = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString();
    return (
      <div className='data-container'>
        {this.props.children}
        <div className='data-info-main-container'>
        <div className='data-info-header'>Россия</div>
        <p className='data-info-header--state'>{'(обновлено: ' + yesterdayDate + ')'}</p>
          <form onSubmit={(e) => e.preventDefault()} noValidate autoComplete="off" className="form-search">
            <input placeholder='искать по региону' className='input' type="text" id="search" name="search" onClick={() => this.props.onClick(this.props)} onChange={(event) => this.props.filterRegions(this.props, event.target.value, regions, initialRegions)}></input>
          </form>

          {this.props.russianCityToggler ? <img onClick={() => this.props.closeRegions(this.props)} className='close' src={close} alt='close'></img> : <img className='search' onClick={() => this.props.onClick(this.props)} src={search} alt='search'></img>}

        
          <div className='data-info-sick-container'>
            <div className='data-info-sick'>{total}</div>
            <div className='data-info-sick--text'>заражений</div>
          </div>
          <div className='data-info-recovered-container'>
            <div className='data-info-recovered green'>{recovered} </div>
            <div className='data-info-recovered--text green'>выздоровлений</div>
          </div>
          <div className='data-info-death-container'>
            <div className='data-info-death'>{deaths}</div>
            <div className='data-info-death--text'>смертей</div>
          </div>
        </div>
      </div>
      )
  }
  
  
}

function mapStateToProps(state) {
  return {...state}
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (props) => dispatch(toggleRussianCities(props)),
    filterRegions: (props, text, regions, initialRegions) => dispatch(russianCitySearch(props, text, regions, initialRegions)),
    closeRegions: (props) => dispatch(closeRussianCities(props))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Russia)


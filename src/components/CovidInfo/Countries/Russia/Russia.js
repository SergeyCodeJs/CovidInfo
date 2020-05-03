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
    let stillSick = addSpaceToNumber(this.props.russiaCommon.confirmed.value - this.props.russiaCommon.recovered.value)

    
    let regions = this.props.RussianRegionsMediazona.data;
    let initialRegions = this.props.RussianRegionsMediazonaForFilter;
    let updated;

    if(this.props.MediaZonaUpdated) {
      updated = this.props.MediaZonaUpdated.updated_at;
  
      updated = new Date(updated);
    
      updated = updated.toLocaleDateString();
    } else {
      updated = null
    }
    

    return (
<div className='data-container'>
    <div className='data-inner-container'>
    {this.props.children}
      <div className='data-info-header'>Россия</div>
      <p className='data-info-header--state'>{'(обновлено: ' + updated + ')'}</p>
        <div className="data-info-flex-container">
        <div className='data-headers-container'>
        <div className="form-search-container">
             <form onSubmit={(e) => e.preventDefault()} noValidate autoComplete="off" className="form-search">
              <input placeholder='искать по региону' className='input' type="text" id="search" name="search" onClick={() => this.props.onClick(this.props)} onChange={(event) => this.props.filterRegions(this.props, event.target.value, regions, initialRegions)}></input>
           </form>
            {this.props.russianCityToggler ? <img onClick={() => this.props.closeRegions(this.props)} className='close' src={close} alt='close'></img> : <img className='search' onClick={() => this.props.onClick(this.props)} src={search} alt='search'></img>}
         </div>             
          <div className='data-info-sick-container'>
            <div className='data-info-sick'>{total}</div>
          </div>
          <div className='data-info-recovered-container'>
            <div className='data-info-recovered green'>{recovered} </div>
          </div>
          <div className='data-info-death-container'>
            <div className='data-info-death red'>{deaths}</div>
          </div>
          <div className='data-info-now-sick-container'>
            <div className='data-info-now-sick yellow'>{stillSick}</div>
          </div>
        </div>
        <div className='data-numbers-container'>
          <div className='data-info--text margin1'>заражений</div>
          <div className='data-info--text margin2 green'>выздоровлений</div>
          <div className='data-info--text margin3 red'>смертей</div>
          <div className='data-info--text yellow margin4 yellow'>еще болеют</div>
        </div>
      </div>
    </div>
  </div>





      // <div className='data-container'>
      //   <div className='data-inner-container'></div>
      //   {this.props.children}
      //   <div className='data-info-main-container'>
      //   <div className='data-info-header'>Россия</div>
      //   <p className='data-info-header--state'>{'(обновлено: ' + updated + ')'}</p>
      //     <div className="form-search-container">
      //       <form onSubmit={(e) => e.preventDefault()} noValidate autoComplete="off" className="form-search">
      //         <input placeholder='искать по региону' className='input' type="text" id="search" name="search" onClick={() => this.props.onClick(this.props)} onChange={(event) => this.props.filterRegions(this.props, event.target.value, regions, initialRegions)}></input>
      //       </form>
      //       {this.props.russianCityToggler ? <img onClick={() => this.props.closeRegions(this.props)} className='close' src={close} alt='close'></img> : <img className='search' onClick={() => this.props.onClick(this.props)} src={search} alt='search'></img>}
      //     </div>               
      //     <div className='data-info-sick-container'>
      //       <div className='data-info-sick'>{total}</div>
      //       <div className='data-info-sick--text'>заражений</div>
      //     </div>
      //     <div className='data-info-recovered-container'>
      //       <div className='data-info-recovered green'>{recovered} </div>
      //       <div className='data-info-recovered--text green'>выздоровлений</div>
      //     </div>
      //     <div className='data-info-death-container'>
      //       <div className='data-info-death'>{deaths}</div>
      //       <div className='data-info-death--text'>смертей</div>
      //     </div>
      //     <div className='data-info-now-sick-container'>
      //       <div className='data-info-now-sick'>{stillSick}</div>
      //       <div className='data-info-now-sick--text'>еще болеют</div>
      //     </div>
      //   </div>
      // </div>
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


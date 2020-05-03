import React from 'react'
import { connect } from 'react-redux'
import { addSpaceToNumber } from '../../../../../utils/assistFunctions'

const Moscow = (props) => {
  
  let confirmed;
  let dead;
  let recovered;
  let updated;

  if(props.MediaZonaUpdated) {
    updated = props.MediaZonaUpdated.updated_at;

    updated = new Date(updated);
  
    updated = updated.toLocaleDateString();
  } else {
    updated = null
  }
  
  

  props.RussianRegionsMediazonaForFilter.data.map((region, index) => {
    if (region.name.toLowerCase() === 'москва'){
      dead = region.dead.reduce((acc,curr) => {
        return acc + curr
      });
      recovered = region.recovered.reduce((acc,curr) => {
        return acc + curr
      });

      confirmed = region.confirmed.reduce((acc,curr) => {
        return acc + curr
      });
    }
  })

  return (
  <div className='data-container'>
            <div className='data-info-header'>Москва</div>
            <p className='data-info-header--state'>{'(обновлено: ' + updated + ')'}</p>
            <div className='data-info-sick-container'>
            <div className='data-info-sick'>{addSpaceToNumber(confirmed)}</div>
            <div className='data-info-sick--text'>заражений</div>
          </div>
          <div className='data-info-recovered-container'>
            <div className='data-info-recovered green'>{addSpaceToNumber(recovered)} </div>
            <div className='data-info-recovered--text green'>выздоровлений</div>
          </div>
          <div className='data-info-death-container'>
            <div className='data-info-death'>{addSpaceToNumber(dead)}</div>
            <div className='data-info-death--text'>смертей</div>
          </div>
          <div className='data-info-now-sick-container'>
            <div className='data-info-now-sick'>{addSpaceToNumber(confirmed - recovered)}</div>
            <div className='data-info-now-sick--text'>еще болеют</div>
          </div>
  </div>)}

function mapStateToProps(state) {
  return {...state}
}

export default connect(mapStateToProps, null)(Moscow)


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
    <div className='data-inner-container'>
      <div className='data-info-header'>Москва</div>
      <p className='data-info-header--state'>{'(обновлено: ' + updated + ')'}</p>
        <div className="data-info-flex-container">
        <div className='data-headers-container'>
          <div className='data-info-sick-container'>
            <div className='data-info-sick'>{addSpaceToNumber(confirmed)}</div>
          </div>
          <div className='data-info-recovered-container'>
            <div className='data-info-recovered green'>{addSpaceToNumber(recovered)} </div>
          </div>
          <div className='data-info-death-container'>
            <div className='data-info-death'>{addSpaceToNumber(dead)}</div>
          </div>
          <div className='data-info-now-sick-container'>
            <div className='data-info-now-sick'>{addSpaceToNumber(confirmed - recovered)}</div>
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
)}

function mapStateToProps(state) {
  return {...state}
}

export default connect(mapStateToProps, null)(Moscow)


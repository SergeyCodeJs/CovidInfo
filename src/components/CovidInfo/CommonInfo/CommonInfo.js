import React from 'react'
import { connect } from 'react-redux'
import difference from '../../../utils/assistFunctions'
import './CommonInfo.css'
import { addSpaceToNumber } from '../../../utils/assistFunctions'

const CommonInfo = (props) => {


  let totalSick = addSpaceToNumber(props.common.confirmed.value) || 'Unknown'
  
  let totalDeath = addSpaceToNumber(props.common.deaths.value) || 'Unknown'
  
  let totalRecovered = addSpaceToNumber(props.common.recovered.value) || 0

  let stillSick = addSpaceToNumber(props.common.confirmed.value - props.common.deaths.value) || 'Unknown'

  let yesterdayDate = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString()
  
  return (
  <div className='data-container'>
    <div className='data-info-header'>Весь мир</div>
    <p className='data-info-header--state'>{'(обновлено: ' + yesterdayDate + ')'}</p>
    <div className='data-info-sick-container'>
      <div className='data-info-sick'>{totalSick}</div>
      <div className='data-info-sick--text'>заражений</div>
    </div>
    <div className='data-info-recovered-container'>
      <div className='data-info-recovered green'>{totalRecovered} </div>
      <div className='data-info-recovered--text green'>выздоровлений</div>
    </div>
    <div className='data-info-death-container'>
      <div className='data-info-death'>{totalDeath}</div>
      <div className='data-info-death--text'>смертей</div>
    </div>
    <div className='data-info-now-sick-container'>
      <div className='data-info-now-sick'>{stillSick}</div>
      <div className='data-info-now-sick--text'>еще болеют</div>
    </div>
  </div>
  )
}

function mapStateToProps(state) {
  return {...state}
}

export default connect(mapStateToProps, null)(CommonInfo)

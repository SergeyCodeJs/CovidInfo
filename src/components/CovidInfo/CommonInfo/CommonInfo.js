import React from 'react'
import { connect } from 'react-redux'
import difference from '../../../utils/assistFunctions'
import './CommonInfo.css'
const CommonInfo = (props) => {
  
  let totalSick = props.common.confirmed.value || 'Unknown'
  let totalDeath = props.common.deaths.value || 'Unknown'
  let totalRecovered = props.common.recovered.value || 0


  let yesterdayDate = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString()
  
  return (
  <div className='data-container'>
    <div className='data-info-header'>Весь мир</div>
    <p className='data-info-header--state'>{'(обновлено: ' + yesterdayDate + ')'}</p>
    <div className='data-info-sick-container'>
      <div className='data-info-sick'>{totalSick}</div>
      <div className='data-info-sick--text'>болеет</div>
    </div>
    <div className='data-info-recovered-container'>
      <div className='data-info-recovered green'>{totalRecovered} </div>
      <div className='data-info-recovered--text green'>выздоровело</div>
    </div>
    <div className='data-info-death-container'>
      <div className='data-info-death'>{totalDeath}</div>
      <div className='data-info-death--text'>умерло</div>
    </div>
  </div>
  )
}

function mapStateToProps(state) {
  return {...state}
}

export default connect(mapStateToProps, null)(CommonInfo)

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
    <div className='data-info-header'>В мире <p className='data-info-header--state'>{'(по состоянию на: ' + yesterdayDate + ')'}</p></div>
    <div className='data-info-sick red'>{totalSick}</div>
    <div className='data-info-sick--text red'>заболело</div>
    <div className='data-info-sick green'>{totalRecovered} </div>
    <div className='data-info-sick--text green'>выздоровело</div>
    <div className='data-info-sick'>{totalDeath}</div>
    <div className='data-info-sick--text'>умерло</div>
  </div>
  )
}

function mapStateToProps(state) {
  return {...state}
}

export default connect(mapStateToProps, null)(CommonInfo)

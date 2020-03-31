import React from 'react'
import { connect } from 'react-redux'

const Moscow = (props) => {
  
  let total = props.russiaCommon.confirmed.value
  let recovered = props.russiaCommon.recovered.value
  let deaths = props.russiaCommon.deaths.value
  
  let name;
  let yesterdayDate = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString()
  return (
  <div className='data-container'>
    <div>
      {props.rusRegions.map((region, index) => {
        if(region.name.toLowerCase() === 'москва') {
        return (
          <div key = { index }>
            <div className='data-info-header'>В Москве <p className='data-info-header--state'>{'(по состоянию на: ' + yesterdayDate + ')'}</p></div>
            <div className='data-info-sick red'>{ region.cases }</div>
            <div className='data-info-sick--text red'>заболело</div>
            <div className='data-info-sick green' >{ region.cured }</div>
            <div className='data-info-sick--text green'>выздоровело</div>
            <div className='data-info-sick'>{ region.deaths }</div>
            <div className='data-info-sick--text'>умерло</div>
          </div>
        )
          }
      })}
    </div>
  </div>
  )
}

function mapStateToProps(state) {
  return {...state}
}

export default connect(mapStateToProps, null)(Moscow)


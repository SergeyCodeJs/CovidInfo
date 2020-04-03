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
            <div className='data-info-header'>Москва</div>
            <p className='data-info-header--state'>{'(обновлено: ' + yesterdayDate + ')'}</p>
            <div className='data-info-sick-container'>
            <div className='data-info-sick'>{region.cases}</div>
            <div className='data-info-sick--text'>болеет</div>
          </div>
          <div className='data-info-recovered-container'>
            <div className='data-info-recovered green'>{region.cured} </div>
            <div className='data-info-recovered--text green'>выздоровело</div>
          </div>
          <div className='data-info-death-container'>
            <div className='data-info-death'>{region.deaths}</div>
            <div className='data-info-death--text'>умерло</div>
          </div>
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


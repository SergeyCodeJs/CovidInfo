import React from 'react'
import { connect } from 'react-redux'
import { addSpaceToNumber } from '../../../../../utils/assistFunctions'

const Moscow = (props) => {
  
  let yesterdayDate = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString()
  return (
  <div className='data-container'>
    <div>
      {props.rusRegions.map((region, index) => {
        if(region.name.toLowerCase() === 'москва') {
          let cases = addSpaceToNumber(region.cases);
          let cured = addSpaceToNumber(region.cured);
          let deaths = addSpaceToNumber(region.deaths)

        return (
          <div key = { index }>
            <div className='data-info-header'>Москва</div>
            <p className='data-info-header--state'>{'(обновлено: ' + yesterdayDate + ')'}</p>
            <div className='data-info-sick-container'>
            <div className='data-info-sick'>{cases}</div>
            <div className='data-info-sick--text'>болеет</div>
          </div>
          <div className='data-info-recovered-container'>
            <div className='data-info-recovered green'>{cured} </div>
            <div className='data-info-recovered--text green'>выздоровело</div>
          </div>
          <div className='data-info-death-container'>
            <div className='data-info-death'>{deaths}</div>
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


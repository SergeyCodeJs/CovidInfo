import React from 'react'
import { connect } from 'react-redux'

const fetchedData = (props) => {

let data = {
  commonInfo: {
    totalSick: props.common.confirmed.value || 'Unknown',
    totalDeath: props.common.deaths.value || 'Unknown',
    totalRecovered: props.common.recovered.value || 'Unknown',
    yesterdayTotalSick: props.dailySummary[props.dailySummary.length-2].totalConfirmed || 'Unknown',
    yesterdayTotalRecovered: props.dailySummary[props.dailySummary.length-2].totalRecovered || 'Unknown'
  }
}

  return data
}

function mapStateToProps(state) {
  return {...state}
}

export default connect(mapStateToProps, null)(fetchedData)
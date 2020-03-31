import React, {Component} from 'react'
import {connect} from 'react-redux'
var Highcharts = require('highcharts');  
require('highcharts/modules/exporting')(Highcharts); 

class CovidRisingGraphic extends Component {

componentDidMount() {

  let dates = this.props.dailySummary.map(e => e.reportDate);
  let confirmed = this.props.dailySummary.map(e => e.totalConfirmed);
  let deaths = this.props.dailySummary.map(e => e.deaths.total);
  let yesterdayDate = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString()

  Highcharts.chart('container', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Всего заболело и выздоровело в мире ' + '(по состоянию на: ' + yesterdayDate + '):'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: dates,
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' '
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Заболевших',
        data: confirmed,
        color: '#a52e2e'
    },
    {
      name: 'Умерших',
      data: deaths,
      color: '#51763f'
  } ]
});
}

render() {

  
  return (
    <figure className="highcharts-figure">
      <div id="container"></div>
      <p className="highcharts-description">
      </p>
    </figure>
  )
  
}
}

function mapStateToProps(state) {
  return {...state}
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CovidRisingGraphic)
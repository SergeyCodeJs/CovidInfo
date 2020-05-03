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
        text: ''
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
        name: 'Заболело (в мире)',
        data: confirmed,
        color: '#E45707'
    },
    {
      name: 'Умерло (в мире)',
      data: deaths,
      color: 'black'
  } ]
});
}

render() {

  return (
    <figure style={{margin:0, boxShadow: '0px 4px 0px rgba(157, 157, 157, 0.25)',
        borderRadius: '7px'}} className="highcharts-figure">
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
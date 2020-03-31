import React, { Component } from 'react'
import { connect } from 'react-redux'
import './russiaRegions.css'
import days from '../../../../../utils/changeDay'
var Highcharts = require('highcharts');  
require('highcharts/modules/exporting')(Highcharts); 



class RussiaRegions extends Component {
  componentDidMount() {

    let regions = this.props.rusRegions;
    let length = [];
    let regionsHistory = regions.map((region, index) => {
      
      if (region.histogram) {
        
        let values = region.histogram.map(e => e.value);
        
        
        length.push(region.histogram.length);
        
        
        return {
          chart: {
            type: 'area',
            spacingBottom: 0,
            spacingTop: 0,
            spacingLeft: 0,
            spacingRight: 0,
            width: 370,
            height: 200,
            backgroundColor: 'gray',
            color: 'gray'
        },
        title: {
            text: 'Статистика заражений по региону за последние ' + length[index] + days(length[index])
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: '',
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
            valueSuffix: ''
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
            data: values,
            color: '#a52e2e'
        }, ]
        }
      } else {
        length.push(null);
        return null
      }
    })
    
    regions.map((element,index) => {
      
      if (element.histogram) {
        Highcharts.chart('container-regions' + index, regionsHistory[index])
      }
    })
  }

  
  
  render() {
  let yesterdayDate = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString()

  return (
<div>
    <div className='russia-regions-container'>

      {this.props.rusRegions.map((region, index) => {
        
        return ( 
          
          region.histogram 

          ? 
          <div className='data-container-regions' style={{height: 700}} key = { index }>
          <div className='data-info-header'>{ region.name } {'(по состоянию на: ' + yesterdayDate + ')'}</div>
          <div className='data-info-sick red'>{ region.cases }</div>
          <div className='data-info-sick--text red'>заболело</div>
          <div className='data-info-sick green' >{ region.cured }</div>
          <div className='data-info-sick--text green'>выздоровело</div>
          <div className='data-info-sick'>{ region.deaths }</div>
          <div className='data-info-sick--text'>умерло</div>
          <div style={{position: 'relative', width: 370, height: 400}}>
            <div className="regions-graphic">
              <figure key={index} className="highcharts-figure">
                  <div id={"container-regions" + index}></div>
                  <p className="highcharts-description">
                  </p>
              </figure>
            </div>
          </div>
        </div>
        : 
        
        <div className='data-container-regions' style={{height: 700}} key = { index }>
        <div className='data-info-header'>{ region.name } {'(по состоянию на: ' + yesterdayDate + ')'}</div>
        <div className='data-info-sick red'>{ region.cases }</div>
        <div className='data-info-sick--text red'>заболело</div>
        <div className='data-info-sick green' >{ region.cured }</div>
        <div className='data-info-sick--text green'>выздоровело</div>
        <div className='data-info-sick'>{ region.deaths }</div>
        <div className='data-info-sick--text'>умерло</div>
        <div className="no-stat">К сожалению, статистика по данному региону недоступна</div>
      </div>)

      })}
    </div>
  </div>
    )
  }
}


function mapStateToProps(state) {
  return {...state}
}

export default connect(mapStateToProps, null)(RussiaRegions)


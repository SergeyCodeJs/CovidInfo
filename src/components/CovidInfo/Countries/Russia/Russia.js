import React from 'react'
import { connect } from 'react-redux'
import './Russia.css'
import Button from '@material-ui/core/Button'
import {toggleRussianCities} from '../../../../actions/actions'


class Russia extends React.Component {
  
  render() {

    let total = this.props.russiaCommon.confirmed.value
    let recovered = this.props.russiaCommon.recovered.value
    let deaths = this.props.russiaCommon.deaths.value
    
    let name;
    let yesterdayDate = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString();
    return (
      <div className='data-container'>
        {this.props.children}
        <div>
        <Button style={{position: "absolute", left: 195, top: -1, height: 35, width: 150}} variant="contained" onClick={() => this.props.onClick(this.props)}>По регионам</Button>
        <div className='data-info-header'>В России <p className='data-info-header--state'>{'(по состоянию на: ' + yesterdayDate + ')'}</p></div>
          <div className='data-info-sick red'>{total}</div>
          <div className='data-info-sick--text red'>заболело</div>
          <div className='data-info-sick green'>{recovered}</div>
          <div className='data-info-sick--text green'>выздоровело</div>
          <div className='data-info-sick'>{deaths}</div>
          <div className='data-info-sick--text'>умерло</div>
        </div>
      </div>
      )
  }
  
  
}

function mapStateToProps(state) {
  return {...state}
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (props) => dispatch(toggleRussianCities(props))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Russia)


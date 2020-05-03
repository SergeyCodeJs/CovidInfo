import React from 'react'
import heart from '../../images/icons-heart.png' 
import {connect} from 'react-redux'
import './Header.css'
var moment = require('moment');


const Header = (props) => {
  let day = moment(props.lastUpdated);
  day = moment(day).format('DD.MM.YYYY, HH:mm')

  return (
    <div>
      <div className='header-container'>
        {props.h1 ? <h1 className='header'>{props.head}</h1> : <h2 className='header'>{props.head}</h2>}
        <div className='header-text-container'>
          <p className='header-text'>{props.text}</p>
          {props.heart ? <img src={heart} alt='heart' className='heart'></img> : null}
        </div>
      </div>
    </div>
  )
}


function mapStateToProps(state) {
  return {...state}
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)


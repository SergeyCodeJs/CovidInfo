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
        <h1 className='header'>Карта заражения COVID-19</h1>
        <div className='header-text-container'>
          <p className='header-text'>Берегите себя, оставайтесь дома</p>
          <img src={heart} alt='heart' className='heart'></img>
        </div>
      </div>
    {/* <p className='updated'>Последнее обновление: </p>
    <p className='updated'>Информация по миру и общие данные по России - {day},</p>
    <p className='updated'>Информация по регионам России - 03.04.2020, 03:20</p> */}
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


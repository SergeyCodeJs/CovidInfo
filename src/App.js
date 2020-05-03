import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import Layout from './hoc/Layout'
import Header from './components/Header/Header';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import CommonInfo from './components/CovidInfo/CommonInfo/CommonInfo'
import Russia from './components/CovidInfo/Countries/Russia/Russia'
import RussiaRegions from './components/CovidInfo/Countries/Russia/russiaRegions/russiaRegions'
import Moscow from './components/CovidInfo/Countries/Russia/Moscow/Moscow'
import Map from './components/Map/Map'
import CovidRisingGraphic from './components/graphics/covidRisingGraphic/covidRisingGraphic';
import RussianCities from './components/CovidInfo/Countries/Russia/russianCities/russianCities'
import YandexMap from './components/yandexMap/yandexMap'
import InfoSource from './components/InfoSource/InfoSource'
class App extends React.Component {

  render(props) {
    if (this.props.dailySummary && this.props.confirmed && this.props.deaths && this.props.recovered && this.props.russiaCommon && this.props.RussianRegionsMediazona && this.props.MediaZonaUpdated && this.props.RussianRegionsMediazonaForFilter) {
      return (
        <div className='content-wrapper'>
          <div className='content-margins'>
          <Header head='Карта заражения COVID-19' text='Берегите себя, оставайтесь дома' heart={true} h1={true}/>
          <Map />
          <div className='stat-blocks-container'>
              <CommonInfo/>
              <Russia>
              <RussianCities />
              </Russia>
              <Moscow />
          </div>
          <Layout>
            <Header head='График заражения COVID-19' text='' heart={false} h1={false}/>
            <CovidRisingGraphic />
            <InfoSource />
          </Layout>
          </div>
        </div>
      );} else {
        return <Backdrop open={true} className='backdrop'> <CircularProgress color="inherit" /></Backdrop>
      }
    }
  }
  

function mapStateToProps(state) {
  return {...state}
}

export default connect(mapStateToProps, null)(App)
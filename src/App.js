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

class App extends React.Component {

  render(props) {
    if (this.props.dailySummary && this.props.confirmed && this.props.deaths && this.props.recovered && this.props.russiaCommon) {
      return (
        <div className='content-wrapper'>
          <Header />
          
          <Map></Map>
          <div className='stat-blocks-container'>
              <CommonInfo/>
              <Russia>
              <RussianCities />
              </Russia>
              
              <Moscow />
          </div>
          <Layout>
            <CovidRisingGraphic />
          </Layout>
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
import React, {Component} from 'react'
import {connect} from 'react-redux'
import mapboxgl from 'mapbox-gl'
import './Map.css'
var MapboxLanguage = require('@mapbox/mapbox-gl-language');


class Map extends Component {
  
  componentDidMount() {
    let props = this.props;

    function generatePointsObjects(props) {
      
      let regions = props.rusRegions;
      let finalData = regions.map((region, index) => {
        return {
          'type': 'Feature',
          'geometry': {
          'type': 'Point',
          'coordinates': [
          region.coordinates[0],
          region.coordinates[1]
          ]
          },
          'properties': {
          'title': region.name + ':' + ' заражено: ' + region.cases + ', выздоровело: ' + ' ' + region.cured + ', умерло: ' + ' ' + region.deaths,
          'icon': 'marker'
          }
    }
  })
    let foreignRegions = props.confirmed
    foreignRegions.map((region, index) => {
      let obj;
      obj = {
        'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [
        region.long,region.lat
        ]
        },
        'properties': {
        'title': region.combinedKey + ':' + ' заражено: ' + region.confirmed + ', выздоровело: ' + region.recovered + ', умерло: ' + region.deaths + ', еще болеют: ' + region.active,
        'icon': 'marker'
        }
      }    
      finalData.push(obj)  
      return obj
    })
    
    
  return finalData
};

    
    
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyZ2V5c3Rla2giLCJhIjoiY2szaHBxamRhMDA0cjNjbXd4Z3JsY2UxciJ9.ByzscoPmD9B153xscOTnww';
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [55, 55],
    zoom: 1
    });

    var language = new MapboxLanguage();
    map.addControl(language);

    map.on('load', function() {
      // load icon

//language
      map.setLayoutProperty('country-label', 'text-field', [
        'format',
        ['get', 'name_ru'],
        { 'font-scale': 1.2 },
        '\n',
        {},
        ['get', 'name_ru'],
        {
        'font-scale': 0.8,
        'text-font': [
        'literal',
        ['DIN Offc Pro Italic', 'Arial Unicode MS Regular']
        ]
        }
        ]);
        //points
        map.addSource('points', {
          'type': 'geojson',
          'data': {
          'type': 'FeatureCollection',
          'features': generatePointsObjects(props)
          }
          });
          map.addLayer({
          'id': 'points',
          'type': 'symbol',
          'source': 'points',
          'layout': {
          // get the icon name from the source's "icon" property
          // concatenate the name to get an icon from the style's sprite sheet
          'icon-image': ['concat', ['get', 'icon'], '-15'],
          'icon-size': 2,
          //'icon-allow-overlap': true,
          // get the title name from the source's "title" property
          // 'text-field': ['get', 'title'],
          // 'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          // 'text-size': 10,
          // 'text-offset': [0, 0.6],
          // 'text-anchor': 'top'
          }
          });
          var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: true
            });

            map.on('mouseenter', 'points', function(e) {
              // Change the cursor style as a UI indicator.
              map.getCanvas().style.cursor = 'pointer';
              
              var coordinates = e.features[0].geometry.coordinates.slice();
              var title = e.features[0].properties.title;
              
              // Ensure that if the map is zoomed out such that multiple
              // copies of the feature are visible, the popup appears
              // over the copy being pointed to.
              while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
              }
              
              // Populate the popup and set its coordinates
              // based on the feature found.
              popup
              .setLngLat(coordinates)
              .setHTML(title)
              .addTo(map);
              });
            
              map.on('mouseleave', 'points', function() {
              map.getCanvas().style.cursor = '';
              popup.remove();
              });
    })
    map.rotateTo(0, { duration: 5000 });
  }  

render() {
  
  return (
    <div>
      <h2 className='map-header'>Карта распространения заболевания: </h2>
      <div id='map' style={{width: '90%', margin: '0 auto', height: '50vh'}} className="mapContainer" />
    </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Map)
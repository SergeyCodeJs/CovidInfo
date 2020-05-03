import React, {Component} from 'react'
import {connect} from 'react-redux'
import mapboxgl from 'mapbox-gl'
import './Map.css'
import russianCityNames from './rusCitiesToMap'
var MapboxLanguage = require('@mapbox/mapbox-gl-language');

class Map extends Component {
  
  componentDidMount() {
    let props = this.props;

    function generatePointsObjects(props) {
      
      let regions = props.RussianRegionsMediazona.data;
      let russiaRegions = props.RussianRegionsMediazona.data;

      

      russiaRegions.map((region,index) => {
        
        switch(region.name) {
          case 'Санкт-Петербург':
            region.coordinates = ["30.315868", "59.939095"];
            break
          case 'Москва':
            region.coordinates = ["37.622504", "55.753215"];
            break
          case 'Севастополь':
            region.coordinates = ["33.525369", "44.616604"];
            break
          case 'Калининградская область':
            region.coordinates = ["21.218944", "54.56009"];
            break
          case 'Ленинградская область':
            region.coordinates = ["29.608975", "59.337013"];
            break
          case 'Псковская область':
            region.coordinates = ["29.236911", "57.236486"];
            break
          case 'Смоленская область':
            region.coordinates = ["32.998543", "54.956192"];
            break
          case 'Брянская область':
            region.coordinates = ["33.422197", "52.909192"];
            break
          case 'Республика Крым':
            region.coordinates = ["33.993751", "45.389194"];
            break
          case 'Республика Карелия':
            region.coordinates = ["33.232608", "63.621324"];
            break
          case 'Новгородская область':
            region.coordinates = ["32.490222", "58.307715"];
            break
          case 'Тверская область':
            region.coordinates = ["34.706195", "57.093033"];
            break
          case 'Калужская область':
            region.coordinates = ["35.445185", "54.3718"];
            break
          case 'Орловская область':
            region.coordinates = ["36.481042", "52.781455"];
            break
          case 'Курская область':
            region.coordinates = ["36.121347", "51.535008"];
            break
          case 'Республика Адыгея':
            region.coordinates = ["40.252969", "44.429866"];
            break
          case 'Мурманская область':
            region.coordinates = ["35.010051", "68.004154"];
            break
          case 'Вологодская область':
            region.coordinates = ["44.151406", "49.615821"];
            break
          case 'Ярославская область':
            region.coordinates = ["39.105138", "57.817361"];
            break
          case 'Московская область':
            region.coordinates = ["36.493903", "55.766131"];
            break
          case 'Тульская область':
            region.coordinates = ["37.575693", "53.888064"];
            break
          case 'Липецкая область':
            region.coordinates = ["39.149784", "52.644554"];
            break
          case 'Белгородская область':
            region.coordinates = ["37.303198", "50.872231"];
            break
          case 'Краснодарский край':
            region.coordinates = ["39.610422", "45.544904"];
            break
          case 'Карачаево-Черкесская Республика':
            region.coordinates = ["41.753928", "43.770947"];
            break
          case 'Кабардино-Балкарская Республика':
            region.coordinates = ["43.408274", "43.494396"];
            break
          case 'Ивановская область':
            region.coordinates = ["41.966406", "56.967836"];
            break
          case 'Владимирская область':
            region.coordinates = ["40.898894", "55.904195"];
            break
          case 'Рязанская область':
            region.coordinates = ["40.950331", "54.559725"];
            break
          case 'Тамбовская область':
            region.coordinates = ["41.592249", "52.474699"];
            break
          case 'Воронежская область':
            region.coordinates = ["40.233395", "50.970898"];
            break
          case 'Ростовская область':
            region.coordinates = ["41.268128", "47.728732"];
            break
          case 'Ставропольский край':
            region.coordinates = ["43.344521", "44.953551"];
            break
          case 'Республика Северная Осетия — Алания':
            region.coordinates = ["44.262033", "43.092669"];
            break
          case 'Костромская область':
            region.coordinates = ["43.788495", "58.456003"];
            break
          case 'Нижегородская область':
            region.coordinates = ["44.279559", "56.595648"];
            break
          case 'Республика Мордовия':
            region.coordinates = ["44.319669", "54.205758"];
            break
          case 'Пензенская область':
            region.coordinates = ["43.946823", "53.240932"];
            break
          case 'Волгоградская область':
            region.coordinates = ["44.151406", "49.615821"];
            break
          case 'Республика Калмыкия':
            region.coordinates = ["45.325701", "46.414024"];
            break
          case 'Чеченская Республика':
            region.coordinates = ["45.747667", "43.305784"];
            break
          case 'Республика Ингушетия':
            region.coordinates = ["45.054581", "43.103590"];
            break
          case 'Республика Марий Эл':
            region.coordinates = ["48.197858", "56.485739"];
            break
          case 'Республика Чувашия':
            region.coordinates = ["47.086875", "55.492023"];
            break
          case 'Ульяновская область':
            region.coordinates = ["47.606533", "53.891057"];
            break
          case 'Саратовская область':
            region.coordinates = ["46.034158", "51.533103"];
            break
          case 'Астраханская область':
            region.coordinates = ["47.466189", "46.851463"];
            break
          case 'Республика Дагестан':
            region.coordinates = ["47.095742", "42.259793"];
            break
          case 'Архангельская область':
            region.coordinates = ["43.336661", "63.637517"];
            break
          case 'Кировская область':
            region.coordinates = ["49.69543", "58.344108"];
            break
          case 'Республика Татарстан':
            region.coordinates = ["50.911013", "55.350336"];
            break
          case 'Самарская область':
            region.coordinates = ["50.34431", "53.452932"];
            break
          case 'Оренбургская область':
            region.coordinates = ["53.498682", "52.743528"];
            break
          case 'Ненецкий автономный округ':
            region.coordinates = ["54.15", "68.12"]; // УТОЧНИТЬ ПРОВЕРИТЬ
            break
          case 'Республика Коми':
            region.coordinates = ["54.789669", "64.125463"];
            break
          case 'Пермский край':
            region.coordinates = ["56.225679", "59.117698"];
            break
          case 'Удмуртская Республика':
            region.coordinates = ["52.796972", "57.166784"];
            break
          case 'Республика Башкортостан':
            region.coordinates = ["56.525537", "54.271500"];
            break
          case 'Ямало-Ненецкий автономный округ':
            region.coordinates = ["80.005397", "66.086435"];
            break
          case 'Ханты-Мансийский АО':
            region.coordinates = ["65.897508", "61.588912"];
            break
          case 'Свердловская область':
            region.coordinates = ["61.530761", "58.586755"];
            break
          case 'Челябинская область':
            region.coordinates = ["60.395641", "54.446199"];
            break
          case 'Тюменская область':
            region.coordinates = ["68.096045", "57.541821"];
            break
          case 'Курганская область':
            region.coordinates = ["64.809405", "55.448347"];
            break
          case 'Омская область':
            region.coordinates = ["73.344416", "56.103472"];
            break
          case 'Томская область':
            region.coordinates = ["78.63728", "58.949193"];
            break
          case 'Новосибирская область':
            region.coordinates = ["79.264861", "55.582396"];
            break
          case 'Алтайский край':
            region.coordinates = ["83.4674", "53.2084"]; // ПРОВЕРИТЬ УТОЧНИТЬ
            break
          case 'Республика Алтай':
            region.coordinates = ["86.55", "50.55"]; // ПРОВЕРИТЬ УТОЧНИТЬ
            break
          case 'Красноярский край':
            region.coordinates = ["95.968477", "67.236779"];
            break
          case 'Кемеровская область':
            region.coordinates = ["86.990382", "54.89794"];
            break
          case 'Республика Хакасия':
            region.coordinates = ["89.897078", "53.386357"];
            break
          case 'Республика Тыва':
            region.coordinates = ["94.793085", "51.584332"];
            break
          case 'Иркутская область':
            region.coordinates = ["106.363305", "57.100294"];
            break
          case 'Республика Бурятия':
            region.coordinates = ["112.348699", "54.544222"];
            break
          case 'Забайкальский край':
            region.coordinates = ["116.200424", "52.847258"];
            break
          case 'Республика Саха (Якутия)':
            region.coordinates = ["119.845652", "65.061073"];
            break
          case 'Амурская область':
            region.coordinates = ["127.728064", "53.413341"];
            break
          case 'Еврейская автономная область':
            region.coordinates = ["132.257612", "48.522902"];
            break
          case 'Чукотский автономный округ':
            region.coordinates = ["175", "67"]; // ПРОВЕРИТЬ УТОЧНИТЬ
            break
          case 'Магаданская область':
            region.coordinates = ["154.036835", "62.575815"];
            break
          case 'Хабаровский край':
            region.coordinates = ["136.637034", "51.695886"];
            break
          case 'Приморский край':
            region.coordinates = ["134.709375", "45.041980"];
            break
          case 'Камчатский край':
            region.coordinates = ["169.782981", "61.350179"];
            break
          case 'Сахалинская область':
            region.coordinates = ["142.750797", "50.150926"];
            break
        }
      })
    

      let finalData = regions.map((region, index) => {
        let dead = region.dead.reduce((acc,curr) => {
          return acc + curr
        });
        let recovered = region.recovered.reduce((acc,curr) => {
          return acc + curr
        });
  
        let confirmed = region.confirmed.reduce((acc,curr) => {
          return acc + curr
        });

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
          'title': region.name + ':' + ' заражено: ' + confirmed + ', выздоровело: ' + ' ' + recovered + ', умерло: ' + ' ' + dead,
          'icon': 'marker'
          }
    }
  })
    let foreignRegions = props.confirmed
    let englishNames = [];

    foreignRegions.forEach((region, index) => {
      englishNames.push(region.combinedKey);
    })

    foreignRegions.map((region, index) => {
      switch(region.combinedKey) {
        case region.combinedKey:
          region.combinedKeyRus = russianCityNames[index];
          break
      }
    })

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
          'icon-size': 1,
          // 'icon-allow-overlap': true,
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
            closeOnClick: false
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
      <div id='map' data-tap-disabled="true" style={{width: '100%', margin: '0 auto', height: 409}} className="mapContainer" />
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
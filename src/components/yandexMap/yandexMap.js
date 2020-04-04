import React from 'react'

export default function YandexMap() {
  return (
<div style={{position: 'relative', overflow: 'hidden', width: '100%', maxWidth: 1440, margin: '0 auto', textAlign: 'center'}}>

<a href="https://yandex.ru/web-maps?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: 12, position: 'absolute', top: 0, width: '100%'}}>Яндекс.Карты</a>

<a href="https://yandex.ru/web-maps/covid19?ll=41.775580%2C54.894027&utm_medium=mapframe&utm_source=maps&z=3" style={{color: '#eee', fontSize: 12, position: 'absolute', top: 14}}>Карта распространения коронавируса в России и мире</a>

<iframe src="https://yandex.ru/web-maps/covid19?embed=covid-map" width="100%" height="409" frameBorder="0" allowFullScreen={true} style={{position:' relative'}}></iframe>

</div>
  )
}


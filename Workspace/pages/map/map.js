Page({
  data: {
    markers: [{
      iconPath: '../../resource/image/gps.png',
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 17,
      height: 23
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '../../resource/image/gps.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    circles:[{
      latitude: 23.099994,
      longitude: 113.324520,
      color: '#FF000080',
      fillColor: '#7cb5ec88',
      radius: 3000,
      strokeWidth:1
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})
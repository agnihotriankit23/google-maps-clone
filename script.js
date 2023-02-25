const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYW5raXRhZ25pMjMiLCJhIjoiY2xlanFib2JqMGRzbTNyazV1aTNkczA4ZCJ9.GleAcJN0krN6FJR6-y5a1w'


  

  navigator.geolocation.getCurrentPosition(successLocation,errorLoaction,{
    enableHighAccuracy:true
  })

  function setUpMap(centrePosition){
    const map = new mapboxgl.Map({
      accessToken : MAPBOX_ACCESS_TOKEN,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: centrePosition,
      zoom:15
    });
    const NavigationControls = new mapboxgl.NavigationControl();
map.addControl(NavigationControls);

const DirectionControls = new MapboxDirections({
  accessToken: MAPBOX_ACCESS_TOKEN
  });

  map.addControl(DirectionControls,'top-left')
  
  }

  function successLocation(position){
    setUpMap([position.coords.longitude,position.coords.latitude])
  }

  function errorLoaction(){
    setUpMap([-2.24,53.48])
  }

  
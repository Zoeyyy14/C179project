let latitude=27.2046,longitute=77.4977
mapboxgl.accessToken='pk.eyJ1Ijoiem9leXkxNCIsImEiOiJjbDJqa2ltOTQwMTd5M2puZG1kdDBhY2o1In0.qS3gar56HTKIWTeUOT2EWw'

var map=new mapboxgl.Map({
    container:'map',
    styles:'mapbox://styles/mapbox/streets-v11',
    center:[longitute,latitude],
    zoom:16
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
);

map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    'top-left'
)
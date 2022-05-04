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

var img1=document.querySelector("#amber")
var marker1=new mapboxgl.Marker({
    element:img1
})
.stLngLat([27.2046,77.4977])
.addTo(map);

map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    'top-left'
)
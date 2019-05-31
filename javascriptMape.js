let map;
let markeri = [
    {koordinate:{lat: 45.815399, lng: 15.966568}, contentString: `<h1 name="ime">Antonio Boras</h1>
    <p>Škola: <b>Prirodoslovna škola Vladimira Preloga</b></p>
	<p>Nudi instrukcije iz: <b>matematike</b></p>
	<p>Email: <b>antonio.boras895@gmail.com</b></p>
	<input type="button" id="gumb1" value="Pošalji poruku" class="popup-button" name="popup-poruka">
	<input type="button" id="gumb2" value="Pošalji token" class="popup-button">`},
    {koordinate:{lat: 45.795500, lng: 15.926400}, contentString: `<h1 name="ime">Hana Horvetzky</h1>
    <p>Škola: <b>V. gimnazija</b></p>
	<p>Nudi instrukcije iz: <b>engleskog</b></p>
	<p>Email: <b>hana.horvetzky@gmail.com</b></p>
	<input type="button" id="gumb1" value="Pošalji poruku" class="popup-button" name="popup-poruka">
	<input type="button" id="gumb2" value="Pošalji token" class="popup-button">`},
	{koordinate:{lat: 45.815728, lng: 15.844523}, contentString: `<h1 name="ime">Matija Vasiljev</h1>
    <p>Škola: <b>X. gimnazija "Ivan Supek"</b></p>
	<p>Nudi instrukcije iz: <b>hrvatskog</b></p>
	<p>Email: <b>matija.vasiljev@gmail.com</b></p>
	<input type="button" id="gumb1" value="Pošalji poruku" class="popup-button" name="popup-poruka">
	<input type="button" id="gumb2" value="Pošalji token" class="popup-button">`},
	{koordinate:{lat: 45.839337, lng: 16.057946}, contentString: `<h1 name="ime">Max Mlinarić-Subotec</h1>
    <p>Škola: <b>I. tehnička škola "Nikola Tesla"</b></p>
	<p>Nudi instrukcije iz: <b>matematike</b></p>
	<p>Email: <b>mixi.je.zakon@gmail.com</b></p>
	<input type="button" id="gumb1" value="Pošalji poruku" class="popup-button" name="popup-poruka">
	<input type="button" id="gumb2" value="Pošalji token" class="popup-button">`},
	{koordinate:{lat: 45.775054, lng: 15.983537}, contentString: `<h1 name="ime">Anton Bošnjak</h1>
    <p>Škola: <b>XIII. gimnazija</b></p>
	<p>Nudi instrukcije iz: <b>engleskog</b></p>
	<p>Email: <b>anton.bosnjak@gmail.com</b></p>
	<input type="button" id="gumb1" value="Pošalji poruku" class="popup-button" name="popup-poruka">
	<input type="button" id="gumb2" value="Pošalji token" class="popup-button">`},
	{koordinate:{lat: 45.792258, lng: 16.035124}, contentString: `<h1 name="ime">Grga Sokić</h1>
    <p>Škola: <b>Prva ekonomska škola</b></p>
	<p>Nudi instrukcije iz: <b>hrvatskog</b></p>
	<p>Email: <b>grga-pec-sokic@gmail.com</b></p>
	<input type="button" id="gumb1" value="Pošalji poruku" class="popup-button" name="popup-poruka">
	<input type="button" id="gumb2" value="Pošalji token" class="popup-button">`},
];
let zoom = 12;
let koor = {lat: 45.815399, lng: 15.966568};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: koor,
    zoom: zoom,
    styles:[
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#848484"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "color": "#5b5b5b"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#c363c4"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#222222"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.text",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#0f0f0f"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#292929"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#252525"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#65a3da"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
]
});
for(let i = 0; i < markeri.length; i++){
    dodajMarker(markeri[i]);
}
function dodajMarker(prop){
    let marker = new google.maps.Marker({
        position: prop.koordinate,
        map: map,
        icon: "covacZadnji.png",
        });
    let info = new google.maps.InfoWindow({
        content: prop.contentString
    });
    google.maps.event.addListener(marker, 'click', function(){
        info.open(map, marker);
    });
}
}
document.getElementById("filtriraj").addEventListener("click", function(e){
    e.preventDefault();
    let i  = document.getElementById("Kvart").selectedIndex;
    console.log(i);
    if(i === 0){
        zoom = 14;
        koor = {lat: 45.815399, lng: 15.966568};
        initMap();
    }
    else{
        let KvartSelected = document.getElementById("Kvart").options[i].text;
        console.log(KvartSelected);
        let Grad  = document.getElementById("Grad").options[0].text;
        let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + KvartSelected + ",+" + Grad + "&key=AIzaSyD6-8OIlBjMXUpzRsNQuE3ITDYQ6cxUyts"
        console.log(url);
        axios.get(url)  
        .then(function(response){
            console.log(response);
            let lat = response.data.results[0].geometry.location.lat;
            let lng = response.data.results[0].geometry.location.lng;
            koor.lat = lat;
            koor.lng = lng;
            zoom = 14;
            initMap();
        })
        
        .catch(function(error){
            console.log(error);
        });
    }
});
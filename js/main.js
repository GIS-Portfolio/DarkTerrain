//function to start the Leaflet map
function createMap(){

    //Varibles needed for running the funcation
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a> | <a href="https://sounny.github.io/">Sounny Slitine</a>';
    
    var apitoken = 'pk.eyJ1Ijoic291bm55IiwiYSI6ImNqcGRpaGVhbzAwaWsza24wbnhtMnR6NnQifQ.J3MAaLF0GbWo8hWP2MKtsw' //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */
    
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}'; //URL used for Stanard MaxBox Styles
    
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}'; //URL used for Custom MapBox Styles
    
    
    //Variables for the different basemaps
    var darkTerrain = L.tileLayer(mbStyleUrl, {id: 'sounny/cjy6np5ld1sjg1cme97n3yosk', token: apitoken,  attribution: mbAttr});
    
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    var dark  = L.tileLayer(mbUrl, {id: 'mapbox.dark', token: apitoken,  attribution: mbAttr});
    
    var outdoors = L.tileLayer(mbUrl, {id: 'mapbox.outdoors', token: apitoken,  attribution: mbAttr});
    
    var streets = L.tileLayer(mbUrl, {id: 'mapbox.streets', token: apitoken, attribution: mbAttr})
    
    
    
    //create the map*/
    var map = L.map('map', {
        center: [31.00, -5],//Coordinated to center the map
        zoom: 6, //zoom level
        layers:darkTerrain //default base
    });
    
    //Adds Marker*/
    L.marker([31.00, -5]).addTo(map);
    
    //create the basemap control layer*/
    var baseLayers = {
		"Outdoors": outdoors,
        "Grayscale": grayscale,
		"Darkscale": dark,
        "Dark Terrain": darkTerrain,
        "Streets": streets
        
    };
    
    L.control.layers(baseLayers).addTo(map);
};

//calling the funcation
$(document).ready(createMap);
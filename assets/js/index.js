/*
function onDeviceReadyPush() {
var push = PushNotification.init({
    android: {
        senderID: "725227860513"
    },
    ios: {
        alert: "true",
        badge: "true",
        sound: "true"
    },
windows: {}
});
push.on('registration', function(data) {
$("#info_device").append(JSON.stringify(data));
});
push.on('notification', function(data) {
$("#info_device").append(JSON.stringify(data));
    // data.message,
    // data.title,
    // data.count,
    // data.sound,
    // data.image,
    // data.additionalData
});
push.on('error', function(e) {
// e.message
$("#info_device").append(JSON.stringify(e));
});
}

//window.localStorage.setItem("token_push", result);
document.addEventListener('deviceready', onDeviceReadyPush, true);

var app = {
initialize: function() {
this.bindEvents();
},

bindEvents: function() {
document.addEventListener('deviceready', this.onDeviceReady, false);
document.getElementById('scan').addEventListener('click', this.scan, false);
},

onDeviceReady: function() {
app.receivedEvent('deviceready');
//Funcion jquery
},

receivedEvent: function(id) {
var parentElement = document.getElementById(id);
var listeningElement = parentElement.querySelector('.listening');
var receivedElement = parentElement.querySelector('.received');
listeningElement.setAttribute('style', 'display:none;');
receivedElement.setAttribute('style', 'display:block;');
console.log('Received Event: ' + id);
}
};
*/

var url_server = localStorage.getItem('url_server');
if (!url_server) {
url_server = "https://app2.sanzon.mx";
window.url_server = url_server;
localStorage.setItem('url_server', url_server);
}

function guid() {
function s4() {
return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
var my_uuid = localStorage.getItem('my_uuid');
if (!my_uuid) {
my_uuid = guid();
localStorage.setItem('my_uuid', my_uuid);
}

if (navigator.geolocation) {
//navigator.geolocation.watchPosition(showPosition);
navigator.geolocation.getCurrentPosition(showPosition);
//alert("Geolicalizacion soportada.");
function showPosition(position) {
var geo_info = "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
window.localStorage.setItem("User_Lat", position.coords.latitude);
window.localStorage.setItem("User_Lon", position.coords.longitude);
window.localStorage.setItem("geo_aprox", position.coords.accuracy);
//alert(geo_info);
}
} else {
//alert("Geolicalizacion no soportada.");
}


function handleOpenURL(url) {
setTimeout(function() {
alert("Recibido: " + url);

}, 0);
}




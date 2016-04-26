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

window.localStorage.setItem("token_push", result);

document.addEventListener('deviceready', onDeviceReadyPush, true);

if (navigator.geolocation) {
//navigator.geolocation.watchPosition(showPosition);
navigator.geolocation.getCurrentPosition(showPosition);
//alert("Geolicalizacion soportada.");
} else {
//alert("Geolicalizacion no soportada.");
}
function showPosition(position) {
var geo_info = "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
window.localStorage.setItem("User_Lat", position.coords.latitude);
window.localStorage.setItem("User_Lon", position.coords.longitude);
window.localStorage.setItem("geo_aprox", position.coords.accuracy);
//alert(geo_info);
}

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

},

scan: function() {

var scanner = cordova.require("cordova/plugin/BarcodeScanner");
scanner.scan( function (result) {

var User_Lat = window.localStorage.getItem("User_Lat");
var User_Lon = window.localStorage.getItem("User_Lon");
var geo_aprox = window.localStorage.getItem("geo_aprox");

$("#info_qr").html("Espere un momento...");
$("#info_qr").load("http://app.sanzon.tk/movil/validate_qr.php?f="+result.format+"&qr=" + result.text + "&token_push=" + window.localStorage.getItem("token_push") + "&lat="+User_Lat + "&lon="+User_Lon + "&geo_aprox="+geo_aprox);

if (result.format == "QR_CODE") {
window.plugins.childBrowser.showWebPage(args.text, { showLocationBar: false });
}

}, function (error) {
alert("Escaneo cancelado: " + error);
$("#info_qr").html("Espere un momento...");
$("#info_qr").load("http://app.sanzon.tk/movil/validate_qr.php?m="+error+"&token_push=" + window.localStorage.getItem("token_push") + "&lat="+User_Lat + "&lon="+User_Lon + "&geo_aprox="+geo_aprox);
} );
}
};

function handleOpenURL(url) {
  setTimeout(function() {
    alert("Recibido: " + url);
  }, 0);
}
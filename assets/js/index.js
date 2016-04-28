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
var url_server_def = "https://app2.sanzon.mx";
if (!url_server) {
window.url_server = url_server_def;
localStorage.setItem('url_server', url_server_def);
} else {
window.url_server = url_server;
}

function guid() {
function s4() {
return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
var my_uuid = localStorage.getItem('my_uuid');
var my_uuid_def = guid();
if (!my_uuid) {
window.my_uuid = my_uuid_def;
localStorage.setItem('my_uuid', my_uuid_def);
} else {
window.my_uuid = url_server;
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

window.handle_url = "";
function handleOpenURL(url) {
setTimeout(function() {
//alert("Recibido: " + url);
window.handle_url = url;
window.onOnline(url);
}, 0);
}

var app = {
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('scan').addEventListener('click', this.scan, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('Received Device Ready Event');
        console.log('calling setup push');
        app.setupPush();
    },
    setupPush: function() {
        console.log('calling push init');
        var push = PushNotification.init({
            "android": {
                "senderID": "725227860513"
            },
            "ios": {
                "sound": true,
                "vibration": true,
                "badge": true
            },
            "windows": {}
        });
        console.log('after init');
        push.on('registration', function(data) {
            //$("#info_device").append(JSON.stringify(data));
            window.localStorage.setItem("token_push", JSON.stringify(data));
            console.log('registration event: ' + data.registrationId);
            var oldRegId = localStorage.getItem('registrationId');
            if (oldRegId !== data.registrationId) {
                // Save new registration ID
                localStorage.setItem('registrationId', data.registrationId);
                // Post registrationId to your app server as the value has changed
            }
            var parentElement = document.getElementById('registration');
            var listeningElement = parentElement.querySelector('.waiting');
            var receivedElement = parentElement.querySelector('.received');
            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
        });
        push.on('error', function(e) {
            console.log("push error = " + e.message);
            //$("#info_device").append(JSON.stringify(e));
            window.localStorage.setItem("token_push", JSON.stringify(e));
        });
        push.on('notification', function(data) {
            //$("#info_device").append(JSON.stringify(data));
            window.localStorage.setItem("token_push", JSON.stringify(data));
            console.log('notification event');
            navigator.notification.alert(
                data.message,         // message
                null,                 // callback
                data.title,           // title
                'Ok'                  // buttonName
            );
       });
}

};

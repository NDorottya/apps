"use strict";
(function () {
    // Check connection
    var checkConnection = document.querySelector("#check-connection"),
        connectionDisplay = document.querySelector("#connection-display");

    if (checkConnection && connectionDisplay) {
        checkConnection.onclick = function () {
            var connection = window.navigator.mozConnection,
                online = "<strong>Connected:</strong> " + (connection.bandwidth),
                metered = "<strong>Metered:</strong> " + connection.metered;

            connectionDisplay.innerHTML = "<h4>Result from Check connection</h4>" + online + "<br>" + metered;
            connectionDisplay.style.display = "block";
        };
    }

    // Check battery
    var checkBattery = document.querySelector("#check-battery"),
        batteryDisplay = document.querySelector("#battery-display");
    if (checkBattery && batteryDisplay) {
        checkBattery.onclick = function () {
            var battery = navigator.battery,
                batteryLevel = Math.round(battery.level * 100) + "%",
                charging = battery.charging,
                chargingTime = parseInt(battery.chargingTime / 60, 10),
                dischargingTime = parseInt(battery.dischargingTime / 60, 10),
                batteryInfo;

            batteryInfo = "<h4>Result from Check battery</h4><strong>Battery level:</strong> " + batteryLevel + "<br>";
            batteryInfo += "<strong>Battery charging:</strong> " + charging + "<br>";
            batteryInfo += "<strong>Battery charging time:</strong> " + chargingTime + "<br>";
            batteryInfo += "<strong>Battery discharging time:</strong> " + dischargingTime;

            batteryDisplay.innerHTML = batteryInfo;
            batteryDisplay.style.display = "block";
        };
    }

    // Geolocation
    var geolocation = document.querySelector("#geolocation"),
        geolocationDisplay = document.querySelector("#geolocation-display");
    if (geolocation && geolocationDisplay) {
        geolocation.onclick = function () {
            navigator.geolocation.getCurrentPosition(function (position) {
                geolocationDisplay.innerHTML = "<strong>Latitude:</strong> " + position.coords.latitude + ", <strong>Longitude:</strong> " + position.coords.longitude;
                geolocationDisplay.style.display = "block";
            },
            function () {
                geolocationDisplay.innerHTML = "Failed to get your current location";
                geolocationDisplay.style.display = "block";
            });
        };
    }
})();

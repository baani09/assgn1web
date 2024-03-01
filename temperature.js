$(document).ready(function() {
    $('#convertBtn').on('click', function() {
        var fahrenheit = parseFloat($('#fahrenheit').val());
        if (!isNaN(fahrenheit)) {
            var celsius = (fahrenheit - 32) * (5 / 9);
            var kelvin = celsius + 273.15;
            $('#conversion-results').html('<p>Celsius: ' + celsius.toFixed(2) + ' °C</p><p>Kelvin: ' + kelvin.toFixed(2) + ' K</p>');
        } else {
            $('#conversion-results').html('<p>Please enter a valid temperature.</p>');
        }
    });
});
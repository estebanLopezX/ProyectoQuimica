document.getElementById("celsius").addEventListener("input", function() {
    var celsius = parseFloat(this.value);
    if (!isNaN(celsius)) {
        var kelvin = celsius + 273.15;
        document.getElementById("resultado").innerText = "Kelvin: " + kelvin.toFixed(2);
    } else {
        document.getElementById("resultado").innerText = "";
    }
});


document.getElementById("celsius1").addEventListener("input", function() {
    var celsius1 = parseFloat(this.value);
    if (!isNaN(celsius1)) {
        var fahrenheit = celsius1 * 9/5 + 32
        document.getElementById("resultado1").innerText = "Fahrenheit: " + fahrenheit.toFixed(2);
    } else {
        document.getElementById("resultado1").innerText = "";
    }
});

document.getElementById("fahrenheit").addEventListener("input", function() {
    var fahrenheit = parseFloat(this.value);
    if (!isNaN(fahrenheit)) {
        var celsius =  (fahrenheit - 32)* 5/9
        document.getElementById("resultado2").innerText = "Celsius: " + celsius.toFixed(2);
    } else {
        document.getElementById("resultado2").innerText = "";
    }
});

document.getElementById("fahrenheit1").addEventListener("input", function() {
    var fahrenheit1 = parseFloat(this.value);
    if (!isNaN(fahrenheit1)) {
        var celsius =  ((fahrenheit1 - 32)* 5/9) + 273.15
        document.getElementById("resultado3").innerText = "Celsius: " + celsius.toFixed(2);
    } else {
        document.getElementById("resultado3").innerText = "";
    }
});

document.getElementById("kelvin").addEventListener("input", function() {
    var kelvin = parseFloat(this.value);
    if (!isNaN(kelvin)) {
        var celsius =  kelvin - 273.15
        document.getElementById("resultado4").innerText = "Celsius: " + celsius.toFixed(2);
    } else {
        document.getElementById("resultado4").innerText = "";
    }
});

document.getElementById("kelvin1").addEventListener("input", function() {
    var kelvin1 = parseFloat(this.value);
    if (!isNaN(kelvin1)) {
        var fahrenheit =  ((kelvin1 - 273.15)* 9/5) + 32
        document.getElementById("resultado5").innerText = "Celsius: " + fahrenheit.toFixed(2);
    } else {
        document.getElementById("resultado5").innerText = "";
    }
});
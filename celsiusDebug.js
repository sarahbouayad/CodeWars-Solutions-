function weatherInfo (temp) {
    var celsius = (temp - 32) * (5/9)
    if (celsius < 0)
      return (celsius + " is freezing temperature")
    else
      return (celsius + " is above freezing temperature")
  }
  
  function convertToCelsius (temperature) {
    var celsius = (temperature - 32) * (5/9)
    return temperature
  }
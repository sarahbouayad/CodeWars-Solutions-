// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

function century(year) {
    // Finish this :)
    return Math.ceil(year/100);
  }

  // others way to code the answer 

  function century(year){
    let result = 0; 

    for (let i = 0; i < year; i++){
      if(i % 100 === 0){
        result++;
      }
    }
    return result
  }

  
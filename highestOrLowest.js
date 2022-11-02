// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"




function highAndLow(numbers){
    // return highest number, split and max() min()
    numbers = numbers.split(" ")
    let min = Math.max.apply(null, numbers)
    let max = Math.min.apply(null, numbers)
    console.log(min)
    console.log(max)
  //   let highestNumber = Array.from(numbers.split(" ").max())
  //   let lowestNumber = Array.from(numbers.split(" ").min())
  return min + " " + max
  }
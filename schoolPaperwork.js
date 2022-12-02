// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.


function paperwork(n, m) {
    console.log(n, m)
  //  n = classmates and m = pages
  //   calculate how many pages do you need
  //   if n < 0 or m < 0 return 0
    if( n < 0 || m < 0){
      return 0
    }else{
      return n*m
    }
  }
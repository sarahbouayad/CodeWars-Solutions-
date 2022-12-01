function stray(numbers) {
    // odd-length array of integers 
    // which all of them are the same 
    // the input array will always be valid(odd.length >= 3)
    
    return numbers.find(
    number => numbers.indexOf(number) === numbers.lastIndexOf(number)
    )
    }
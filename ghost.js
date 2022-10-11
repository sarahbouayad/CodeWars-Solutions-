// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated


class Ghost {
    constructor(){
       this.color = this.randomizer()
    }
      randomizer(){
      let colors = ['white', 'yellow', 'purple', 'red']
      let colorRandom = Math.floor(Math.random()*colors.length);
      return colors[colorRandom]
    }
  }
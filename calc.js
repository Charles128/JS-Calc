var removeFromFrontOfArray = function(array, numOfElements){
  for ( i = 0; i < numOfElements; i++){
    array.shift()
  }

  return array
}

var calculator = {
  equation: [],


  attachEventListeners: function(){
    $('.number').on('click', function(){
      $('#calc-display').append(this.innerHTML)
      calculator.createEquationFromInput(this.innerHTML)
      console.log(calculator.equation)
    })

    $('#operands').on('click', 'div', function(){
      $('#calc-display').append(this.innerHTML)
      calculator.createEquationFromInput(this.innerHTML)
      console.log(calculator.equation)
    })

    $(document).on('keypress', function(event){
      if (event.keyCode = 13){ calculator.solve() }
    })
  },

  createEquationFromInput: function(keyPressed){
    if ((calculator.equation[calculator.equation.length -1])/1 && keyPressed/1){
      calculator.equation[calculator.equation.length -1] = calculator.equation[calculator.equation.length -1].concat(keyPressed)
    }

    else {
      calculator.equation.push(keyPressed)
    }
  },

  solve: function(){
    console.log('solve')

    for (i = 0; i < calculator.equation.length; i++){
      if (calculator.equation[i] === ' + '){
        var num1 = parseInt(calculator.equation[i-1])
        var num2 = parseInt(calculator.equation[i+1])
        removeFromFrontOfArray(calculator.equation, 3)
        calculator.equation.unshift(num1 + num2)
      }

      if (calculator.equation[i] === ' - '){
        var num1 = parseInt(calculator.equation[i-1])
        var num2 = parseInt(calculator.equation[i+1])
        removeFromFrontOfArray(calculator.equation, 3)
        calculator.equation.unshift(num1 - num2)
      }

      if (calculator.equation[i] === ' x '){
        var num1 = parseInt(calculator.equation[i-1])
        var num2 = parseInt(calculator.equation[i+1])
        removeFromFrontOfArray(calculator.equation, 3)
        calculator.equation.unshift(num1 * num2)
      } 

      if (calculator.equation[i] === ' / '){
        var num1 = parseInt(calculator.equation[i-1])
        var num2 = parseInt(calculator.equation[i+1])
        removeFromFrontOfArray(calculator.equation, 3)
        calculator.equation.unshift(num1 / num2)
      }
    }

    if (calculator.equation.length != 1) {
      calculator.solve()
    }

    console.log(calculator.equation)

  }

}

window.onload = function(){
  calculator.attachEventListeners()
}
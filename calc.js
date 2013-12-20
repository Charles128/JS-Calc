var removeFromArray = function(array, indices){
  var newArray = []
  
  for ( i = 0; i < array.length; i++){
    if (indices.indexOf(i) === -1){
      newArray.push(array[i])
    }
  }

  return newArray
}

var calculator = {
  equation: [],

  attachEventListeners: function(){
    $('.number').on('click', function(){
      $('#calc-display').append(this.innerHTML)
      calculator.createEquationFromInput(this.innerHTML)
    })

    $('#operands').on('click', 'div', function(){
      $('#calc-display').append(this.innerHTML)
      calculator.createEquationFromInput(this.innerHTML)
    })

    $('#equals').on('click', function(){
      calculator.evaluate()
    })

    $('#clear').on('click', function(){
      calculator.resetCalc()
    })

    $(document).on('keypress', function(event){
      if (event.keyCode = 13){ calculator.evaluate() }
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

  evaluate: function(){
  
    if (calculator.equation.indexOf(' x ') > -1){
      for (i = 0; i < calculator.equation.length; i++){
        if (calculator.equation[i] === ' x '){
          var num1 = parseInt(calculator.equation[i-1])
          var num2 = parseInt(calculator.equation[i+1])
          calculator.equation[i] = (num1 * num2)
          calculator.equation = removeFromArray(calculator.equation, [i-1,i+1])

          if (calculator.equation.length != 1){
            calculator.evaluate()
          }
        }
      }
    }

    if (calculator.equation.indexOf(' / ') > -1){
      for (i = 0; i < calculator.equation.length; i++){
        if (calculator.equation[i] === ' / '){
          var num1 = parseInt(calculator.equation[i-1])
          var num2 = parseInt(calculator.equation[i+1])
          calculator.equation[i] = (num1 / num2)
          calculator.equation = removeFromArray(calculator.equation, [i-1,i+1])

          if (calculator.equation.length != 1){
            calculator.evaluate()
          }
        }
      }
    }

    if (calculator.equation.indexOf(' + ') > -1){
      for (i = 0; i < calculator.equation.length; i++){
        if (calculator.equation[i] === ' + '){
          var num1 = parseInt(calculator.equation[i-1])
          var num2 = parseInt(calculator.equation[i+1])
          calculator.equation[i] = (num1 + num2)
          calculator.equation = removeFromArray(calculator.equation, [i-1,i+1])
          
          if (calculator.equation.length != 1){
            calculator.evaluate()
          }
        }
      }
    }

    if (calculator.equation.indexOf(' - ') > -1){
      for (i = 0; i < calculator.equation.length; i++){
        if (calculator.equation[i] === ' - '){
          var num1 = parseInt(calculator.equation[i-1])
          var num2 = parseInt(calculator.equation[i+1])
          calculator.equation[i] = (num1 - num2)
          calculator.equation = removeFromArray(calculator.equation, [i-1,i+1])

          if (calculator.equation.length != 1){
            calculator.evaluate()
          }
        }
      }
    } 
      
    $('#calc-display').html(calculator.equation[0])
  },

  resetCalc: function(){
    $('#calc-display').empty()
    calculator.equation = []
  }
}

window.onload = function(){
  calculator.attachEventListeners()
}
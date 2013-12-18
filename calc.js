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
      if (event.keyCode = 13){ console.log('call solve function') }
    })
  },

  createEquationFromInput: function(keyPressed){
    if ((calculator.equation[calculator.equation.length -1])/1 && keyPressed/1){
      calculator.equation[calculator.equation.length -1] = calculator.equation[calculator.equation.length -1].concat(keyPressed)
    }

    else {
      calculator.equation.push(keyPressed)
    }
  }

}

window.onload = function(){
  calculator.attachEventListeners()
}
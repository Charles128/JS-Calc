var calculator = {
  equation: [],

  attachEventListeners: function(){
    $('.number').on('click', function(){
      $('#calc-display').append(this.innerHTML)
      calculator.equation.push(parseInt(this.innerHTML))
      console.log(calculator.equation)
    })

    $('#operands').on('click', 'div', function(){
      $('#calc-display').append(this.innerHTML)
      calculator.equation.push(this.innerHTML)
      console.log(calculator.equation)
    })
  },

}

window.onload = function(){
  calculator.attachEventListeners()
}
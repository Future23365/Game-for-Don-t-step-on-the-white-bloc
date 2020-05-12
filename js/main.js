$(function() {
  let index = 0;
  let j = 0;
  let ul = $('article ul');
  add();
  
  function add() {
    ul.prepend($('<li><div>5</div><div>5</div><div>5</div><div>5</div></li>'));

  }
  ul.on('')
  start();
  

  function start() {
    let isAdd = 0;
    let step = 6;
    let flag = true;
    setInterval(function() {
      ul.css('bottom', index + 'px');
      isAdd++;
      index = index - step;
      let x = 150/step;
      if(isAdd > (x * 2 / 3)) {
        add();
        console.log("isAdd:" + isAdd)
        console.log("x:" + x * 2 / 3)
        isAdd = 0;
        
      }
      if(flag === true) {
        step ++;
        console.log(step)
        flag = false
      }
    }, 50)
  }


})
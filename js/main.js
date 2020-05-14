$(function() {
  let ul = $('article ul');
  let startButton = $('.start-game');
  let header = $('header');
  let startGame = null;
  let score = 0;
  let speed = 10;
  let bottomPosition = 600;
  add();
  startButton.on('click', function() {
    $(this).hide('fast', 'swing',function() {
      $('.mask').css('display', 'none');
      start();
    });
  })
  function add() {
    let li = $('<li></li>');
    let div = [];
    for(let i = 0; i < 4; i++) {
      div[i] = $('<div></div>').on('click', function() {
        end();
      })
    }
    let blackDiv = random();
    div[blackDiv] = $('<div style="background-color: black"></div>').on('click', function() {
      $(this).css('background-color', '#ccc');
      $(this).off('click');
      score++;
      header.html('您的得分：' + score);
      if(score % 10 == 0) {
        speed = speed + 5;
      }
    });

    for(let i = 0; i < 4; i++) {
      li.append(div[i]);
    }
    $('article ul').prepend(li);
  }

  function start() {
    let flag = 0;
    let index = 0;
    startGame = setInterval(function() {
      bottomPosition -= speed;
      flag += 1;
      if(flag >= Math.floor((150/speed - 2))) {
        add();
        flag = -2;
      }
      $('article ul').css('bottom', bottomPosition + 'px');
      if(bottomPosition < 0 && ((bottomPosition-speed) % -150 > bottomPosition % -150))
      {
        
        for(let i = 0; i < 3; i++) {
          console.log($('article ul').find('li').eq(5).find('div').eq(i).css('background-color'))
          if($('article ul').find('li').eq(5).find('div').eq(i).css('background-color') === 'rgb(0, 0, 0)')
          {
            end();
          }
        }
        index ++;
      }
    }, 50)
  }

  function random() {
    let random = Math.floor((Math.random() * 4));
    return random;
  }


  function end() {
    clearInterval(startGame);
        $('.mask').css('display', 'block');
        startButton.show('fast', function() {
          startButton.html('Game Over!');
    score = 0;
    speed = 10;
    bottomPosition = 600;
    $('article ul').css('bottom', bottomPosition + 'px');
    $('article ul').empty();
    add();
        });
    
  }

})
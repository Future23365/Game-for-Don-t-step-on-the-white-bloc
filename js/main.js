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
        clearInterval(startGame);
        $('.mask').css('display', 'block');
        startButton.show('fast', function() {
          startButton.html('Game Over!');
          score = 0;
          speed = 10;
          bottomPosition = 600;
          ul.css('bottom', bottomPosition + 'px');
          ul.empty();
          add();
        });
      })
    }
    let blackDiv = random();
    div[blackDiv] = $('<div style="background-color: black"></div>').on('click', function() {
      $(this).css('background-color', '#ccc');
      score++;
      header.html('您的得分：' + score);
      if(score % 20 == 0) {
        speed = speed + 5;
      }
    });

    for(let i = 0; i < 4; i++) {
      li.append(div[i]);
    }
    ul.prepend(li);
  }

  function start() {
    let flag = 0;
    startGame = setInterval(function() {
      bottomPosition -= speed;
      flag += 1;
      if(flag >= (150/speed - 2)) {
        add();
        flag = -2;
      }
      ul.css('bottom', bottomPosition + 'px');
    }, 50)
  }

  function random() {
    let random = Math.floor((Math.random() * 4));
    return random;
  }


})
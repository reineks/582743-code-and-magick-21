'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var rendercloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


window.renderStatistics = function (ctx) {
  rendercloud(ctx, 110, 60, 'green');
  rendercloud(ctx, 100, 50, 'white');

  ctx.fillStyle = `black`;
  ctx.fillText('Вы', 110, 75);
  ctx.fillRect(160, 60, 430, 20);
};

// ctx — канвас на котором рисуется игра.
// names — массив, с именами игроков прошедших уровень. Имя самого игрока — Вы. Массив имён формируется случайным образом.
// times — массив, по длине совпадающий с массивом names. Массив содержит время прохождения уровня соответствующего игрока из массива names. Время прохождения уровня задано в миллисекундах.


/* js渲染*/
/*动态添加图片框架*/

/*引入zepto库*/

var total = 9;
var zWin = $(window);
var render = function() {
  var padding = 2;
  var winWidth = zWin.width();
  var picWidth = Math.floor((winWidth - padding*3) / 4); /*直接舍掉小数*/
  var tmpl = '';
  for (var i = 1; i <= total; i++) {
    var p = padding;

    var imgSrc = 'images/'+i+'.jpg';  /*获得图片的完整路径*/
    if (i%4 == 1) {  /*判断是否是最左边的图片*/
      p = 0;
    }
    tmpl += '<li class="animated bounceIn" style = "width:'+picWidth+'px;height:'+picWidth+'px;paddng-top='+padding+'px;padding-left:'+p+'px"><canvas id="cvs_'+i+'"></canvas></li>';
    var imageObj = new Image();
    imageObj.index = i;
    imageObj.onload = function() {
      var cvs = $('#cvs_'+this.index)[0].getContext('2d');
      cvs.width = this.width;
      cvs.height = this.height;
      cvs.drawImage(this,0,0);

    }
    imageObj.src = imgSrc;


  }
  $('#container').html(tmpl);
}
render();

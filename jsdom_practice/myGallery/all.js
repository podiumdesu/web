//window.onload =  prepareLinks;
//对window.onload时加载多个函数

/**************onload时加载多个函数***********/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function")　{
    window.onload = func;
  }else {
    window.onload = function(){
      oldonload()
      func();
    }
  }
}

addLoadEvent(prepareLinks);
addLoadEvent(prepareGallery);

/************************************************/

/****************得到标签a下class是popup的元素*************/

function prepareLinks() {
    if (!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");  //获取数组
    for (let i = 0; i < links.length; i++) {　　//循环遍历
      if (links[i].getAttribute("class") == "popup") {　　//判断条件
        links[i].onclick = function() {  //触发事件
          popUp(this.href);
        //popUp(this.getAttribute("href"));  //也可以
          return false;　　//记得return false阻止原本浏览器的动作
        }
      }
    }
}


/*得到链接后打开新窗口*/

function popUp(winURL) {
  window.open(winURL,"popup","width=1000,height=1300"); //打开新窗口
}

/*******************************************************/

//window.onload = prepareGallery;
function prepareGallery() {
  if ((!document.getElementById) || (!document.getElementsByTagName)) return false;
  if (!document.getElementById("gallery")) return false;　　//检查元素
    var galleries = document.getElementById("gallery");　//先找到这个元素
    var aLinks = galleries.getElementsByTagName("a");　//找元素中的标签数组
    for (var i = 0; i < aLinks.length; i++){　//遍历数组
      aLinks[i].onclick = function() { //给每个元素都赋上onclick事件
        //showPic(this);　　//显示图片
        //return !showPic(this);  //对onclick事件的默认行为做出判断
        return showPic(this) ? false : true;
      }
    }
}

function showPic(whichpic) {
  if (!document.getElementById("placeholder")) return false;
  var source = whichpic.getAttribute("href"); //把路径存入变量
  var placeholder = document.getElementById("placeholder");//获得元素节点
  if (placeholder.nodeName != 'IMG') return false;
  placeholder.setAttribute("src",source);

  if (document.getElementById("discription")) {　//判断是否有该元素
  //判断是否有title元素
    var word = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : '';
//    var word = whichpic.getAttribute("title");
    var display = document.getElementById("discription");

    if (display.firstChild.nodeType == 3) {
      display.firstChild.nodeValue = word;  //文字节点
    }
  }
  return true;  //给函数一个返回值，这样才能设置return，对onclick事件的默认行为做出判断
}


/*
function getChild() {

  var children = document.getElementsByTagName("body")[0];
  alert(children.childNodes.length);
  alert(children.nodeType);  //元素节点是１，属性节点是２，文本节点是３

}

*/

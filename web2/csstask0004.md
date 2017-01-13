csstask0004
===
### css概念选择器
以level更新

* 使用css
    ```css
    <!-- 外链 --> 引入外部资源
    <link rel="stylesheet" href="/path/to/style.css">
       rel=relation关系  

    <!-- 嵌入 -->css的规则写在style标签里，用于写样式
    <style type="text/css">
      li { margin: 0; list-style: none; }
      p { margin: 1em 0; }
    </style>

    <!-- 内联 -->把样式规则写在一个元素的style里面
    <p style="margin:1em 0">Example Content</p>
    ```
<!--more-->
推荐第一种，维护比较方便

* 注释
    ```css
    /* 设置按钮宽度 */
    .form button {
      width: 240px;
    }

    /**
     * 设置默认样式
     */
    body {
      margin: 0;
      /* font-size: 12px; */
      //color: #333;
    }
    ```

* 选择器：选择器用来从页面中选择元素，以给它们定义样式。
* 简单选择器
  1.通配选择器
  2.标签选择器
  3.id选择器
  4.类选择器


  * 通配选择器（使用较少）
        ```css
        /* 匹配所有元素 */
        * {
          box-sizing: inherit;
        }
        ```

  * 标签选择器
        ```css
        /* 匹配所有p元素 */
        p {
          margin: 1em 0;
        }
        ```

  * id选择器 (id)
      ```css
      <p id="example">Example Content</p>  

      <style type="text/css">
        /* 匹配id为example的元素
         * 注意：id 值在一个 HTML 中必须唯一
         */
        #example {
          font-size: 14px;
          line-height: 1.6;
          color: red;
        }
      </style>

      ```

  * 类选择器 (class)
      ```css
        <p class="warning">这是一条警告信息</p>

        <!-- 可以给一个元素指定多个class，用空格隔开 -->
        <p class="warning icon">这是另外一条警告信息</p>

        <style type="text/css">
          .warning {
            color: orange;
          }
          .icon {
            background: url(warn.png) no-repeat 0 0;
          }
        </style>
      ```

* 复杂一点
  * 属性选择器
        ```css
        <p>
          <label>用户名：</label>
          <input name="username" value="zhao" disabled>
        </p>

        <style>
          input[disabled] {    /*有disabled这个属性的input*/
            background: #eee;
            color: #999;
            cursor: not-allowed;  /*禁用光标*/
          }
        </style>    

        ```
        ```css
        <p>
        <label>密码：</label>
        <input type="password" required>
        </p>

        <style>
          input[type="password"] {  /*定义某一个值的属性选择器*/
            border-color: red;
            color: red;
          }
        </style>

        ```

    * 以空格分隔开的值
        ```css
        <p>
          <label>身高：</label>
          <input name="height">
        </p>
        <p>
          <label>体重：</label>
          <input name="weight">
        </p>
        <p>
          <label>BMI：</label>
          <output for="weight height">22</output>  /*output有for属性，结果是从什么算出来的*/
        </p>

        <style>
          [for~="height"] {  /*for属性里包含来自height的数据，要以空格分隔开的值*/
            color: red;    /*与类（class）选择器相似*/
          }
        </style>
        ```

    * 以某个字符串开头的情况
        ```css
        <p><a href="#top">回到顶部</a></p>  
        <p><a href="/home">返回首页</a></p>

        <style>
          a[href^="#"] {   /*匹配a标签里所有以#开头页面内的跳转*/
            color: red;
          }
        </style>
        ```
        * 以某个字符串结尾的情况
        ```css
        <p>你可以<a href="a.jpg">查看原图</a></p>

        <style>
          a[href$=".jpg"] {  /*链接到.jpg*/
            color: red;
          }
        </style>
        ```
    *只要有字符串就行
        ```css
        <i class="icon-user">用户</i>
        <i class="icon-wifi">WiFi</i>
        <i class="other1 icon-car">汽车</i>
        <i class="icon-heart other2">爱心</i>

        <style>
          [class^="icon-"], [class*=" icon-"] {  /* *=包含 icon-即可 *表示匹配*/
            color: coral;            /*  ^= 以icon出现在开头的情况 &表示结尾*/
            font-family: FontAwesome;
            font-style: normal;
            margin-right: 1em;
          }
          .icon-user::before {
            content: '\f007';
          }
          .icon-wifi::before {
            content: '\f1eb';
          }
          .icon-car::before {
            content: '\f1b9';
          }
          .icon-heart::before {
            content: '\f004';
          }
        </style>    

        ```
  * 伪类选择器（基于 DOM 之外的信息去（比如根据用户和网页的交互状态）选择元素。）
    a:link    { ... }   /* 未访问过的链接 */

    a:visited { ... }   /* 已访问过的链接 */

    a:hover   { ... }   /* 鼠标移到链接上的样式 */

    a:active  { ... }   /* 鼠标在连接上按下时的样式 */

    a:focus   { ... }   /* 获得焦点时的样式 */

      ```css
      <nav>
        <ul>
          <li><a href="http://w3.org">W3C</a>
          <li><a href="http://example.com">example.com</a>
          <li><a href="http://www.360.com">360</a>
        </ul>
      </nav>

      <label>搜索：<input name="q" type="search"></label>

      <style>
        a:link {
          color: black;
        }
        a:visited {
          color: gray;
        }
        a:hover {
          color: orange;
        }
        a:active {
          color: red;
        }
        :focus {    /*获得焦点时，用tab切换*/
          outline: 2px solid red;
        }
      </style>

      ```

* 选择器组合
  * 直接组合EF
  * 后代组合E F
  * 亲子组合E>F

  * 直接组合EF
      ```css
      <p class="warning">这是一条警告信息</p>   /*标签选择器*/
      <div class="warning icon">这是另外一条警告信息</div>  /*类选择器*/
      p.warning { color: orange; }  
      ```
    * 组合形式：
    E[foo="bar"]  /*属性选择器*/

    E.warning  /*类选择器*/

    E#myid   /*id选择器*/

    #myid.warning

    .warning[foo="bar"]

  * 后代组合E F
      ```css
      <article>
        <h1>拉森火山国家公园</h1>
        <p>拉森火山国家公园是位于美国加州北部的国家公园，整个国家公园
        中最主要的景观就是拉森火山，是世界上最大的穹顶火山，也是喀斯喀
        特山脉中最南端的火山。</p>
        <section>
          <h2>气候</h2>
          <p>因为拉森火山国家公园是处于中高海拔地区，在7500呎以下，其
          气候大体来说是冬冷夏温。高于这个高度，气候非常寒冷，连夏天都
          不太热。</p>
        </section>
      </article>

      <style>
        /* 后代选择器 */
        article p {   /*都在article里面的标签*/
          color: coral;
        }
        /* 亲子选择器 */
        article > p {  /*直接属于article的p标签*/
          color: limegreen;
        }
        article section h2 {
          border-bottom: 1px dashed #999;
        }
      </style>
      ```
* 同时为一组选择器定义样式
    ```css

    body, h1, h2, h3, h4, h5, h6, ul, ol, li {
      margin: 0;
      padding: 0;
    }

    [type="checkbox"], [type="radio"] {  /*属性选择器*/
      box-sizing: border-box;
      padding: 0;
    }

    ```


### 层叠、继承和css单位
* 优先级问题：哪条规则生效？
    ```css
    <article>
      <h1 class="title">拉森火山国家公园</h1>
    </article>

    <style>
      .title {
        color: blue;
      }
      article h1 {
        color: red;
      }
    </style>
    ```
  * 结果是字体是蓝色的

* 选择器的特异度(Specificity)
选择器 	            内联?	id个数	(伪)类个数	标签个数	特异度

#nav .list li a:link	0	 1	         2	       2	     0122

.hd ul.links a	        0	 0	         2	       2         0022


* 简单选择器的特异度级别

Level 0: *

Level 1: 标签选择器、伪元素  /*p*/

Level 2: 类、伪类、属性  /* .*/

Level 3: id  /* # */

Level 4: 内联

* 属性覆盖

    ```css
    <button class="btn">普通按钮</button>
    <button class="btn btn-primary">主要按钮</button>

    <style>
      .btn {
        display: inline-block;
        padding: .36em .8em;
        margin-right: .5em;
        line-height: 1.5;
        text-align: center;
        cursor: pointer;
        border-radius: .3em;
        border: none;
        background: #e6e6e6;
        color: #333;
      }
      .btn.btn-primary {    /*定义不同的地方*/
        color: #fff;
        background: #218de6;
      }
    </style>
    ```

  * important

      ```css
      <button class="btn">普通按钮</button>
      <button class="btn btn-primary">主要按钮</button>

      <style>
        .btn {
          display: inline-block;
          padding: .36em .8em;
          margin-right: .5em;
          line-height: 1.5;
          text-align: center;
          cursor: pointer;
          border-radius: .3em;
          border: none;
          background: #e6e6e6;
          color: #333 !important;  /*有了important后无法覆盖*/
                                   /*如果想要覆盖可在下面也加上!important*/
        }
        .btn.btn-primary {
          color: #fff ;
          background: #218de6;
        }
      </style>  
      ```
* cascading    层叠样式
  * 样式来源：
    * 页面开发者
    * 用户设置
    * 浏览器预设
  * 用户样式：浏览器可以指定一个本地 CSS 文件，打开所有页面时自动加载。
  * 浏览器预设样式:  [MozillaFirefox](https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css)
  [googlechrome](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css)
  [InternetExplorer](http://www.iecss.com/)

* 哪条声明起作用？
  1. 找出匹配到的该属性所有声明
  2. 根据规则来源，优先级从低到高：
       * 浏览器预设
       * 用户设置
       * 网页样式
  3. 同一来源中，按照特异度排序，越特殊优先级越高
  4. 特异度一样时，按照样式书写顺序，后面的优先级高

* 有!important时的变化
  1. 找出匹配到的该属性所有声明
  2. 根据规则来源，优先级从低到高：
       * 浏览器预设
       * 用户设置
       * 网页样式
       * 含 !important 的网页样式
       * 含 !important 的用户设置样式
  3. 同一来源中，按照特异度排序，越特殊优先级越高
  4. 特异度一样时，按照样式书写顺序，后面的优先级高


* 默认值策略Defaulting
  * 继承（某些属性会自动继承其父元素的计算值，除非显式指定一个值
  ```css
  <p>
    This is a <em>test</em> of <strong>inherit</strong>.
  </p>
  <style>
    p { color: #666; }
    em { color: red; }
  </style>
  ```
  * 显式继承

      ```css
      * {
        box-sizing: inherit;  /*原本不会继承的属性继承父一级*/
      }
      html {
        box-sizing: border-box;
      }
      .some-widget {
        box-sizing: content-box;
      }  
      ```
* 初始值
    * CSS 中，每个属性都有一个初始值

    * background-color 的初始值为 transparent

    * margin-left 的初始值为 0

    * 可以显式重置为初始值，比如 background-color: initial

  * css求值过程

* 各种类型的值

      * 关键字：font-size:initial、box-sizing:inherit、color:red 等

      * 字符串：content:"abc"

      * URL：background-image:url(/resources/img/logo.png)

      * 长度：font-size:2em、height:100px、width:50vw

      * 百分数：width: 50%、font-size: 200%

      * 整数：z-index: 9

      * 浮点数：line-height: 1.8

      * 颜色：color: #f00、color:rgba(0,0,0,0.5)

      * 时间：transition-duration: 0.3s

      * 角度：transform: rorateX(deg)

      * 函数：content: attr(title)、height: calc(100vh - 100px)

* 长度单位
    * 绝对单位
        * px：像素，对应显示器的一个像素点
        * in：英寸
        * 英寸cm：厘米
        * 厘米mm：毫米
        * 毫米pt：磅 (1 pt 等于 1/72 英寸)
        * 英寸pc：1pc 等于 12pt
    * 相对单位
        * em：相对于该元素的一个 font-size
        * rem：相对于 html 元素的 font-size
        * vh：浏览器窗口高度的 1%
        * vw：浏览器窗口宽度的 1%
        * vmin：vh 和 vw 中的较小者
        * vmax：vh 和 vw 中的较大者    

* 颜色
    * 关键字
    * Hex
    * RGB & RGBA
    * HSL & HSLA

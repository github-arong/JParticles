$(function(){function e(e,t){var n=document.createElement("script");n.onload=t,n.src=e,document.getElementsByTagName("head")[0].appendChild(n)}function t(e,t){var n=document.createElement("link");n.onload=t,n.href=e,n.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(n)}function n(e,t){e.find(".active").removeClass("active"),t.addClass("active")}function i(){function e(e){n(i,e),t(e)}function t(e){var t=e.position().left+parseInt(e.css("paddingLeft"))+.5;a.css({width:e.width(),transform:"translate("+t+"px,0)"})}var i=$(".header .nav"),o=i.find(".active"),a=i.find(".slideblock");t(o),setTimeout(function(){a.addClass("animation").removeClass("hidden")},0),i.find("a").hover(function(){e($(this))},function(){e(o)}),$(window).resize(function(){clearTimeout(this.timer),this.timer=setTimeout(function(){t(i.find(".active"))},400)})}function o(){$("body").height()>$(".page-header").outerHeight()+$(".page-content").outerHeight()+$(".page-footer").outerHeight()&&$(".page-footer").css({width:"100%",position:"absolute",bottom:0}),$(".page-footer").show()}function a(){new Particleground.particle("#i-bg",{eventElem:document})}function c(){$("#changelog").on("click",".accordion > .header",function(){$(this).next().stop().slideToggle(600)})}i(),o(),$("#open").click(function(){d.open()}),$("#pause").click(function(){d.pause()}),t("//cdn.bootcss.com/prettify/r298/prettify.min.css"),e("//cdn.bootcss.com/prettify/r298/prettify.min.js",function(){$(".prettyprint").length?prettyPrint():$(".quick-getting").length&&"import use use-method config-default".split(" ").forEach(function(e){$.get("/code-tpl/"+e+".html",function(t){$("."+e).text(t).addClass("prettyprint"),prettyPrint(),"use"===e&&(window.d=new Particleground.particle("#demo",{dis:80,range:60}))})})}),/\/examples\/quick-getting/i.test(location.href)?window.localStorage.setItem("read",!0):window.localStorage.getItem("read")||$(".eg-container >.menu >h5:eq(1)").append('<i class="essential pa">必读</i>'),$("#i-bg").length?a():$("#changelog").length&&c()});
//# sourceMappingURL=map/site.js.map

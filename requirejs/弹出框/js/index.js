/**
 * Created by Administrator on 2018/3/17 0017.
 */
//引用jquery的正确用法
requirejs.config({
    paths:{
        jquery: 'jquery-3.3.1'
    }
});
require(["dialog","jquery"],function (Dialog,$) {
    // var oBtn = document.getElementById("btn");
    // oBtn.onclick = function () {
    //     dialog.open();
    // }
    var settings = {
        height:300,
        title:"登录",
        content:"a.html"
    };
    var settings1={
        height:300,
        title:"登录",
        content:"登录成功"
    }

    $("#btn1").click(function(){
        var dialog1 = new Dialog();
        dialog1.open(settings);
    });
    $("#btn").click(function(){
        var dialog = new Dialog();
        dialog.open(settings1);
    });
});

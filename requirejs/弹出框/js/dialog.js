/**
 * Created by Administrator on 2018/3/17 0017.
 */
requirejs.config({
    paths:{
        jquery: 'jquery-3.3.1'
    }
});
define(["jquery"],function () {
    // $("body").html("");
    function Dialog(){
        this.$box = $('<div class = "dialog-box"></div>');
        this.$mask = $('<div class = "dialog-mask"></div>');
        this.$container = $('<div class = "dialog-container"></div>');
        this.$header = $('<div class = "dialog-header"></div>');
        this.$title = $('<div class = "dialog-title"></div>');
        this.$close = $('<div class = "dialog-btn">[X]</div>');
        this.$content = $('<div class = "dialog-content"></div>');
        this.defaultSettings={
            width:400,
            height:300,
            title:"弹框",
            content:""
        }
    }
    Dialog.prototype.open = function (settings) {
        $.extend(this.defaultSettings,settings);
        this.$box.append(this.$mask).append(this.$container);
        this.$container.append(this.$header).append(this.$content);
        this.$header.append(this.$title).append(this.$close);
        this.$container.css({
            width:this.defaultSettings.width,
            height:this.defaultSettings.height
        });
        this.$title.text(this.defaultSettings.title);
        //this.$content.html(this.defaultSettings.title);
        if(this.defaultSettings.content.indexOf("html")!=-1){
            this.$content.load("js/a.html");
        }else{
            this.$content.html(this.defaultSettings.content);
        }
        var This = this;
        $("body").append(this.$box);
        this.$close.click(function () {
            This.$box.remove();
        })
    }
   // var dialog={
   //     open:function () {
   //         var dialogHtml =
   //             '<div class="dialog-box">'+
   //             '<div class="dialog-mask"></div>'+
   //             '<div class="dialog-container">'+
   //             '<div class="dialog-header">'+
   //             '<div class="dialog-title">注册</div>'+
   //             '<div class="dialog-btn" id="close">[X]</div>'+
   //             '</div>'+
   //             '<div class="dialog-content"></div>'+
   //             '</div></div>';
   //         // document.body.innerHTML+=dialogHtml;
   //         $("body").append(dialogHtml);
   //         $("#close").click(function () {
   //             $(".dialog-box").remove();
   //         })
   //         var oClose = document.getElementById("close");
   //         oClose.onclick = function () {
   //             document.getElementsByClassName("dialog-box")[0].remove();
   //         }
   //     }
   // };
   return Dialog;
});

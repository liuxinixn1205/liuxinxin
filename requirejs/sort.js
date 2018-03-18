/**
 * Created by Administrator on 2018/3/17 0017.
 */
define(function () {
    function sortArr(arr) {
        return arr.sort(function (a,b) {
            return b-a;
        });
    }
    return sortArr;//返回函数名,在index文件里接收
});

//方式
define(function (require) {
    var arr = [5,8,6,1,3];
    var sortArr = require("sort");
    console.log(sortArr);
})
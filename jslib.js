//getByClassName

function getByCalssName(clsName,context){
    context = context || document;
    if(context.getElementsByClassName){//能力检测
        return context.getElementsByClassName(clsName);
    }else{
        var allList = context.getElementsByTagName('*');
        var result = [];
        for(var i=0;i<allList.length;i++){
             //暂时还不完善,完整的需要用到正则表达式；
            if(allList[i].className.indexof(clsName) != -1){
                result.push(allList[i]);
            }
        }
        return result;
    }
};



//nextElementSibling
function next(elem){
    do{
        elem = elem.nextSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
};



//firstElementChild
function first(elem){
    elem = elem.firstChild;
    return elem.nodeType == 1? elem : next(elem);
};



//attachEvent&&addEventListenr;
function addEvent(elem,type,handler){
    if(elem.addEventListener){
        elem.addEventListener(type,handler);
    }else if(elem.attachEvent){
        elem.fnxx = function (){
            handler.call(elem);
        };
        elem.attachEvent('on'+type,elem.fnxx);
    };
};

//detachEvent&&removeEventListener
function removeEvent(elem,type,handler){
    if(elem,removeEventListener){
        elem.removeEventListener(type,handler);
    }else if(elem.detachEvent){
        elem.detachEvent('on'+type,elem.fn.xx);
    }
}


//实现深拷贝
function clone(obj){
    var newObj = {};
    for(var p in newObj){
        if(typeof obj[p] == 'object'){
            newObj[p] = clone(obj[p]);
        }else{
            newObj[p] = obj[p]; 
        }
    }
    return newObj;
}




//cookie
//添加cookie expires以天为单位
function addCookie(key,val,expires){
    var str = key + '=' + val;
    if(expires != undefined){
        var date = new Date();
        date.setDate(date.getDate() + expires);
        str += ';expires=' + date.toUTCString();
    }
    document.cookie = str;
}

//获取cookie
function getCookie(key){
    var arr = document.cookie.split(';');
    for(var i=0;i<arr.length;i++){
        var temp = arr[i].split('=');
        if(temp[0].trim() == key){
            return temp[1];
        }
    }
}

//删除cookie
function delCookie(key){
    var date = new Date();
    date.setDate(date.getDate()-1);
    document.cookie = key + '=null' + ';expires = ' + date.toUTCString();
}
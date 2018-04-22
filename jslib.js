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
    };
    if(elem.attachEvent){
        elem.attachEvent('on'+type,handler);
    };
};
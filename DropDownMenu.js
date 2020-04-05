// 因为浏览器加载完JS文件就会去执行，这时候如果JS里面有对DOM的操作的话，DOM可能还未加载完，就会出错
// 先加载css以达到尽快显示出页面的目的，将JS放在末尾，使得DOM加载完成再加载JS

//把elements assign给 constant variables
const inputArea = document.getElementsByClassName("searchArea-input")[0];
const buttonArea = document.getElementsByClassName("buttonArea")[0];
const searchHistory = document.getElementsByClassName("searchArea-history")[0];
const searchFrame = document.getElementsByClassName("searchFrame")[0];
// click scroll
// addEventListener 会 take 2个 parameters, 第一个是 event, 第二个是这个event发生时将被executed的function,也叫callback function
inputArea.addEventListener("input",showHistory);
//当在inputArea有input事件触发时
function showHistory(){
    searchHistory.style.display = "block"; //将history部分展示
    searchFrame.classList.add("shadow");
    searchFrame.insertAdjacentElement('beforeend',buttonArea);
    //searchFrame.appendChild(buttonArea); //将buttonArea从searchFrame下面移到searFrame内部最下方，和上面一样
}

inputArea.addEventListener("blur",hideHistory);
function hideHistory(){
    searchHistory.style.display = "none"; //将history部分隐藏
    searchFrame.classList.remove("shadow");
    searchFrame.insertAdjacentElement('afterend',buttonArea);
    //element1.insertAdjacentElement('position', element2);
    // beforebegin  相当于node1.insertBefore(node2);
    // afterbegin
    // beforeend    相当于node1.appendChild(node2);
    // afterend
    //document.getElementsByTagName("body")[0].appendChild(buttonArea); //将buttonArea从searchFrame内部最下方移到body对下方
}
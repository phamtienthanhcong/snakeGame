var valueInputSort = []
const pointTrees = [];
const widthScreen = 1200;
const widthTree = 50;
var topTree = 100;
var arrowTree = []
var statusTrees = []
var showTree = []
var lengthTree=0
var i_Loop = 0;
var run
var c = document.getElementById("root");
var ctx = c.getContext("2d");
var inputValue = document.getElementById('inputValue');
var rangeInput = document.getElementById('range')
var rangeFaster = document.getElementById('range-faster')
var fasterValue = 1900 - rangeFaster.value
var doRun = 1

function getValueFromInput() {
    const valueInput = inputValue.value;
    if (valueInput){
        var statusTree = [];
        var a = [];
        valueInputSort = valueInput.split(',');
        for (var i = 0; i < valueInputSort.length; i++) {
            a[i] = parseInt(valueInputSort[i]);
            statusTree.push('0');
        }
        valueInputSort = a;
        statusTrees = statusTree;
        lengthTree = valueInputSort.length
        showNode(valueInputSort,statusTrees,valueInputSort.length)
    }
    else{
        alert("Bạn Phải điền giá trị vào input")
    }
    
}

function ramdomValue(){   
    var a = [];
    var statusTree = []
    var teamp = 0;
    for (var i = 0; i < 11; i++){
        teamp = Math.floor(Math.random() * 100)
        while(a.includes(teamp)){
            teamp = Math.floor(Math.random() * 100)
        }
        a.push(teamp)
        statusTree.push('0')
    }
    statusTrees = statusTree
    valueInputSort = a;
    inputValue.value = a;
    lengthTree = valueInputSort.length
    showNode(valueInputSort,statusTrees,valueInputSort.length)
}




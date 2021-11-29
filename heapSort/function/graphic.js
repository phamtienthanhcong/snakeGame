function showNode(valueInputSort,statusTrees,length){
    ctx.clearRect(0, 0, widthScreen, 600);
    ctx.font = "30px Times New Roman";
    ctx.fillStyle = "black";
    ctx.fillText("Mảng: ", 10,45);   
    // ctx.fillText("Mảng: ",100,45);
    var pointLeft = 95
    for (var i=0; i<length; i++){
        ctx.beginPath();
        ctx.fillStyle = ''
        ctx.arc(pointTrees[i].left+25, pointTrees[i].top, 25, 0, 2 * Math.PI);
        if (statusTrees[i]==='1'){
            ctx.fillStyle = "#2db92d";
            ctx.fill();
        }else if (statusTrees[i] === '2'){
            ctx.fillStyle = "#ffbf00";
            ctx.fill();
        }else if (statusTrees[i] === '3'){
            ctx.fillStyle = "red";
            ctx.fill();
        }
        ctx.stroke();
        if(i>0){
            ctx.moveTo(pointTrees[pointTrees[i].conect].left+25, pointTrees[pointTrees[i].conect].top+25);
            ctx.lineTo(pointTrees[i].left+25, pointTrees[i].top-25);
            ctx.stroke();
        }
        ctx.font = "25px Times New Roman";
        var reSize = 18
        var text = parseInt(valueInputSort[i])
        if (text>9){
            reSize = 18/2+2
        }
        if (text>99){
            reSize = 18/3
        }
        ctx.fillStyle = "black";
        ctx.fillText(text, pointTrees[i].left+reSize, pointTrees[i].top+9);   
    }


    for (var i = 0;i<valueInputSort.length;i++){
        // show phần tiêu đề
        if (statusTrees[i]==='1'){
            ctx.fillStyle = "#ffbf00";
            ctx.rect(pointLeft , 20, 33, 33);
            ctx.fillRect(pointLeft , 20, 33, 33);
        }else if (statusTrees[i] === '2'){
            ctx.fillStyle = "#2db92d";
            ctx.rect(pointLeft , 20, 33, 33);
            ctx.fillRect(pointLeft , 20, 33, 33);
        }
        else if(statusTrees[i] === '3'){
            ctx.fillStyle = "#3399ff";
            ctx.rect(pointLeft , 20, 33, 33);
            ctx.fillRect(pointLeft , 20, 33, 33);
        }
        else{
            ctx.beginPath();
            ctx.rect(pointLeft , 20, 33, 33);
        }
        ctx.stroke();   

        ctx.font = "24px Times New Roman";
        ctx.fillStyle = "black";
        ctx.fillText(valueInputSort[i], pointLeft+5,45);   
        pointLeft += 35.5    
    }
   
}
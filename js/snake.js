window.onload = function(){
    var snake = document.getElementById("snake");
    var food = document.getElementById('food');
    var bonus = document.getElementById('bonus');
    var span1 = document.getElementById('span1');
    var wall = document.getElementById('wall');
    var table = document.getElementById('table');
    var select = this.document.getElementById('speed');
    var cont = document.getElementById('cont');
    var pau = document.getElementById('pause');
    var rest = document.getElementById('restart');
    var pos = new Array();
    var bodyLenght = 1;
    var timer;
    var times;
    var left = false;
    var right = true;
    var top = false;
    var bottom = false;
    var score = 0;
    var speed = parseInt(select.value);

    pos[0]=[0,0];
    function createtable(){
        for(var i=0;i<16;i++){
            var tr = document.createElement('tr');
            tr.style.height=50+'px';
            for(var j=0;j<30;j++){
                var td = document.createElement('td');
                tr.appendChild(td);
                td.style.width=48+'px';
                td.style.height=48+'px';
                td.style.margin=0;
                td.style.border="1px solid red";
            }
            table.appendChild(tr);
        }
    }
    createtable();

    function newfood(){
        var exit = false;
        var position_x=parseInt(Math.random()*29)*50;
        var position_y=parseInt(Math.random()*15)*50;
        for(var i=0;i<pos.length;i++){
            if(position_x==pos[i][0]&&position_y==pos[i][1]){
                exit = true;
                break;
            }
        }
        if(!exit){
            food.style.left=position_x+'px';
            food.style.top=position_y+'px';
        }
        else{
            newfood();
        }
    }
    newfood();
    function createbonus(){
        var exit = false;
        var position_x=parseInt(Math.random()*29)*50;
        var position_y=parseInt(Math.random()*15)*50;
        for(var i=0;i<pos.length;i++){
            if(position_x==pos[i][0]&&position_y==pos[i][1]){
                exit = true;
                break;
            }
        }
        if(!exit){
            var last = 10;
            bonus.innerHTML=last;
            bonus.style.display="block";
            bonus.style.left=position_x+'px';
            bonus.style.top=position_y+'px';
            times = setInterval(function(){
                if(last>0){
                    last--;
                    bonus.innerHTML=last;
                }
                else{
                    bonus.style.display="none";
                    clearInterval(times);
                }
            },1000)
        }
        else{
            clearInterval(times);
            createbonus();
        }
    }

    function move(){
        if(left){
            if(snake.offsetLeft>0){
                snake.style.left = snake.offsetLeft-50+"px";
                for(var i=1;i<pos.length;i++){
                    if(snake.offsetLeft==pos[i][0]&&snake.offsetTop==pos[i][1]){
                        alert("游戏结束！");
                        clearInterval(timer);
                        reset();
                        break;
                    }
                }
                pos.unshift([snake.offsetLeft,snake.offsetTop]);
                pos.pop();
                if(bodyLenght>=2){
                    var one_body = document.getElementsByClassName("onebody");
                    for(var i=0;i<one_body.length;i++){
                        one_body[i].style.left=pos[i+1][0]+'px';
                        one_body[i].style.top=pos[i+1][1]+'px';
                    }
                }
            }
            else{
                alert("游戏结束！");
                clearInterval(timer);
                reset();
            }
        }else if(top){
            if(snake.offsetTop>0){
                snake.style.top = snake.offsetTop-50+"px";
                for(var i=1;i<pos.length;i++){
                    if(snake.offsetLeft==pos[i][0]&&snake.offsetTop==pos[i][1]){
                        alert("游戏结束！");
                        clearInterval(timer);
                        reset();
                        break;
                    }
                }
                pos.unshift([snake.offsetLeft,snake.offsetTop]);
                pos.pop();
                if(bodyLenght>=2){
                    var one_body = document.getElementsByClassName("onebody");
                    for(var i=0;i<one_body.length;i++){
                        one_body[i].style.left=pos[i+1][0]+'px';
                        one_body[i].style.top=pos[i+1][1]+'px';
                    }
                }
            }
            else{
                alert("游戏结束！");
                clearInterval(timer);
                reset();
            }
        }else if(right){
            if(snake.offsetLeft<1450){
                snake.style.left = snake.offsetLeft+50+"px";
                for(var i=1;i<pos.length;i++){
                    if(snake.offsetLeft==pos[i][0]&&snake.offsetTop==pos[i][1]){
                        alert("游戏结束！");
                        clearInterval(timer);
                        reset();
                        break;
                    }
                }
                pos.unshift([snake.offsetLeft,snake.offsetTop]);
                pos.pop();
                if(bodyLenght>=2){
                    var one_body = document.getElementsByClassName("onebody");
                    for(var i=0;i<one_body.length;i++){
                        one_body[i].style.left=pos[i+1][0]+'px';
                        one_body[i].style.top=pos[i+1][1]+'px';
                    }
                }
            }
            else{
                alert("游戏结束！");
                clearInterval(timer);
                reset();
            }
        }else if(bottom){
            if(snake.offsetTop<750){
                snake.style.top = snake.offsetTop+50+"px";
                for(var i=1;i<pos.length;i++){
                    if(snake.offsetLeft==pos[i][0]&&snake.offsetTop==pos[i][1]){
                        alert("游戏结束！");
                        clearInterval(timer);
                        reset();
                        break;
                    }
                }
                pos.unshift([snake.offsetLeft,snake.offsetTop]);
                pos.pop();
                if(bodyLenght>=2){
                    var one_body = document.getElementsByClassName("onebody");
                    for(var i=0;i<one_body.length;i++){
                        one_body[i].style.left=pos[i+1][0]+'px';
                        one_body[i].style.top=pos[i+1][1]+'px';
                    }
                }
            }
            else{
                alert("游戏结束！");
                clearInterval(timer);
                reset();
            }
        }
        var stop = snake.offsetTop;
        var sleft = snake.offsetLeft;
        var ftop = food.offsetTop;
        var fleft = food.offsetLeft;
        var bleft = bonus.offsetLeft;
        var btop = bonus.offsetTop;
        if((fleft-sleft<50&&fleft-sleft>-50&&ftop-stop<50&&ftop-stop>-50)||
            (bleft-sleft<50&&bleft-sleft>-50&&btop-stop<50&&btop-stop>-50)){
            newfood();
            score++;
            span1.innerHTML=score;
            bonus.style.display="none";
            var onebody = document.createElement('div'); 
            onebody.setAttribute("class","onebody");
            onebody.style.width=50+'px';
            onebody.style.height=50+'px';
            onebody.style.background="gray";
            onebody.style.position="absolute";
            wall.appendChild(onebody);
            bodyLenght++;
            if((bodyLenght-1)%10==0){
                createbonus();
            }
            if(bodyLenght<=2){
                if(right){
                    onebody.style.left=snake.offsetLeft-50+'px';
                    onebody.style.top=snake.offsetTop+'px';
                    pos.push([onebody.offsetLeft,onebody.offsetTop]);
                }
                else if(left){
                    onebody.style.left=snake.offsetLeft+50+'px';
                    onebody.style.top=snake.offsetTop+'px';
                    pos.push([onebody.offsetLeft,onebody.offsetTop]);
                }
                else if(top){
                    onebody.style.left=snake.offsetLeft+'px';
                    onebody.style.top=snake.offsetTop+50+'px';
                    pos.push([onebody.offsetLeft,onebody.offsetTop]);
                }
                else if(bottom){
                    onebody.style.left=snake.offsetLeft+'px';
                    onebody.style.top=snake.offsetTop-50+'px';
                    pos.push([onebody.offsetLeft,onebody.offsetTop]);
                }
            }
            else{
                onebody.style.left=pos[bodyLenght-2][0]+'px';
                onebody.style.top=pos[bodyLenght-2][1]+'px';
                pos.push([onebody.offsetLeft,onebody.offsetTop]);
            }
        }
    }
    timer = setInterval(move,speed);
    document.onkeydown = function(ev){
        var ev = ev || event;
        var keyCode = ev.keyCode;
        switch(keyCode){
           case 37: 
           if(right==false){
            left = true;
            top = false;
            bottom = false;
            right = false;
           }
            break;
           case 38: 
           if(bottom==false){
            top = true;
            left = false;
            bottom = false;
            right = false;
           }
            break;
           case 39: 
           if(left==false){
            right = true;
            left = false;
            bottom = false;
            top = false;
           }
            break;
           case 40: 
           if(top==false){
            bottom = true;
            left = false;
            top = false;
            right = false;
           }
            break;
           case 65: 
           if(right==false){
            left = true;
            top = false;
            bottom = false;
            right = false;
           }
            break;
           case 87: 
           if(bottom==false){
            top = true;
            left = false;
            bottom = false;
            right = false;
           }
            break;
           case 68: 
           if(left==false){
            right = true;
            left = false;
            bottom = false;
            top = false;
           }
            break;
           case 83: 
           if(top==false){
            bottom = true;
            left = false;
            top = false;
            right = false;
           }
            break;
        }
    }
    document.onkeyup = function(ev){
        var ev = ev || event;
        var keyCode = ev.keyCode;
        switch(keyCode){
            case 37: 
           if(right==false){
            left = true;
            top = false;
            bottom = false;
            right = false;
           }
            break;
           case 38: 
           if(bottom==false){
            top = true;
            left = false;
            bottom = false;
            right = false;
           }
            break;
           case 39: 
           if(left==false){
            right = true;
            left = false;
            bottom = false;
            top = false;
           }
            break;
           case 40: 
           if(top==false){
            bottom = true;
            left = false;
            top = false;
            right = false;
           }
            break;
           case 65: 
           if(right==false){
            left = true;
            top = false;
            bottom = false;
            right = false;
           }
            break;
           case 87: 
           if(bottom==false){
            top = true;
            left = false;
            bottom = false;
            right = false;
           }
            break;
           case 68: 
           if(left==false){
            right = true;
            left = false;
            bottom = false;
            top = false;
           }
            break;
           case 83: 
           if(top==false){
            bottom = true;
            left = false;
            top = false;
            right = false;
           }
            break;
        }
    }
    function reset(){
        newfood();
        snake.style.left=0+'px';
        snake.style.top=0+'px';
        score=0;
        span1.innerHTML=score;
        right = true;
        left = false;
        bottom = false;
        top = false;
        if(bodyLenght>=2){
            var one_body = document.getElementsByClassName("onebody");
            for(var i=bodyLenght-1;i>0;i--){
                wall.removeChild(one_body[i-1]);
            }
        }
        bodyLenght=1;
        pos.splice(1,pos.length);
        speed = parseInt(select.value);
        timer = setInterval(move,speed);
    }
    pau.onclick = function(){
        clearInterval(timer);
        document.getElementById('cont').disabled=0;
        this.setAttribute("disabled","true");
    }
    cont.onclick = function(){
        timer = setInterval(move,speed);
        this.setAttribute("disabled","true");
        document.getElementById('pause').disabled=0;
    }
    rest.onclick = function(){
        clearInterval(timer);
        newfood();
            snake.style.left=0+'px';
            snake.style.top=0+'px';
            score=0;
            span1.innerHTML=score;
            right = true;
            left = false;
            bottom = false;
            top = false;
            if(bodyLenght>=2){
                var one_body = document.getElementsByClassName("onebody");
                for(var i=bodyLenght-1;i>0;i--){
                    wall.removeChild(one_body[i-1]);
                }
            }
            bodyLenght=1;
            pos.splice(1,pos.length);
            speed = parseInt(select.value);
            timer = setInterval(move,speed);
    }
}
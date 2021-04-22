
window.onload = function () {

    //무명함수
    // id사용
    ( function(){
        // 이벤트 발생
        document.getElementById("btn01").addEventListener("click", print); 
        // 수행함수
        function print () {
            console.log("click")
            document.getElementById("main01").innerHTML = "Hi EveryOne!";
        }

        //태그명 사용
        function print1() { 
            var msg="입력 내용: ";
            var myInput = document.getElementsByTagName("input");
            for (var i=0; i < myInput.length; i++) {
                msg += (myInput[i].value+", ");
            }
            document.getElementById("msg01").innerHTML = msg;
            // alert(msg); 매번 창띄워지니 출력으로 대체 
        }
        print1();

        //클래스명 사용
        var bgcolor = document.getElementsByClassName("bgcolor");
        
        var ul = document.createElement('ul');
        for(var i=0; i<bgcolor.length; i++){
            var li = document.createElement('li');
            li.innerHTML = bgcolor[i].innerHTML;
            ul.appendChild(li);
        }
        document.getElementById("myClass").innerHTML="각 요소의 내용:";
        document.getElementById("myClass").appendChild(ul);

        //요소의 내용 수정_요소 내용 가져오기
        document.getElementById("btn02").addEventListener("click",getMsg);
        function getMsg(){
            var msg = document.getElementById("myList").innerHTML;
            var msg01 = document.getElementById("myList").textContent;
            alert(msg); // 요소포함
            alert(msg01); // 요소 미포함
        }

        // 요소의 내용 수정_요소 내용 설정하기
        document.getElementById("btn03").addEventListener("click", putMsg);
        function putMsg(){
            msg="<p><b>DOM 요소 내용 수정:</b> <i> innerHTML 속성, textContetn 속성</i></p>";
            document.getElementById("inner").innerHTML=msg;
            document.getElementById("text").textContent=msg;
        }

        // 요소의 속성 수정
        document.getElementById("image01").addEventListener('mouseover',changeImg01);
        document.getElementById("image01").addEventListener('mouseout',changeImg02);
        function changeImg01(){
            // document.getElementById("image01").src == Return the URL of an image  
            document.getElementById("image01").src="C:/Users/sjy01/git/HTML_basicSource/img/lion.jpg";
        }
        function changeImg02(){
            document.getElementById("image01").src="C:/Users/sjy01/git/HTML_basicSource/img/flower01.jpg";
        }

        //요소의 스타일 수정
        function changeStyle(){
            //하이픈은 특수문자라서 정규식 이용
            var stringVal = document.getElementById("change-style01").innerText;
            var stringNew = stringVal.replace(/\-/g,"");
            console.log(stringVal  +"-----------------------------"+ stringNew );
            if(stringVal.includes("-")){ //포함하면
                var stringNew = stringVal.replace(/\-/g," ");
                console.log(stringVal + "=================" + stringNew);
                document.getElementById("change-style02").innerHTML = stringNew;
                document.getElementById("change-style02").style.backgroundColor="yellow";
            }
        }
        changeStyle();

        //스타일변경
        document.getElementById("btn04").addEventListener('click',changeStyle01);
        var changeBgSt = document.getElementById("main02");
        function changeStyle01() {
            changeBgSt.style.backgroundColor="green";
            changeBgSt.style.color = "white";
            changeBgSt.style.fontStyle = "italic";
            changeBgSt.style.fontWeight = "bold";
        }


        //새로운 요소의 삽입_텍스트 노드를 갖는 경우
        document.getElementById("btn05").addEventListener('click',addElement);
        function addElement(){
                var newP = document.createElement("p");
                var txtNode = document.createTextNode("새로운 p 요소가 추가되었습니다.");
                newP.appendChild(txtNode);
                document.getElementById("main03").appendChild(newP);
        }
        //새로운 요소의 삽입_속성 노드를 갖는 경우
        document.getElementById("btn06").addEventListener('click',addElement01);
        function addElement01(){
            var newImg = document.createElement("img");
                var srcNode = document.createAttribute("src");
                srcNode.value = "C:/Users/sjy01/git/HTML_basicSource/img/flower01.jpg";
                var heightNode = document.createAttribute("height");
                heightNode.value = "100";
                newImg.setAttributeNode(srcNode);
                newImg.setAttributeNode(heightNode);
                document.getElementById("main04").appendChild(newImg);
            }
            
        //기존 요소의 삭제
        document.getElementById("btn07").addEventListener('click',removeNode);
        function removeNode() {
            var parent = document.getElementById("list01");
            var child = document.getElementById("i2");
            parent.removeChild(child);
        }

        //open(), close() 메서드(07popup.html안에 소스 있음)
        document.getElementById("btn08").addEventListener('click', winOpen)
        function winOpen() {
            window.open("07-popup.html","_blank","width=450, height=300"); //연결할 URL, 타킷, 창의 이름, 옵션리스트
        }
        
        //setTimeout() 메서드
       // 시간을 딜레이 없이 나타내기위한 선 실행
        showTime();
        // 이후 0.5초에 한번씩 시간을 갱신한다.
        setInterval(showTime, 500);
       
        function showTime() {
            today = new Date();
            today = today.toLocaleString();
            var clock = document.getElementById("clock");
            clock.style.backgroundColor = "yellow";
            clock.style.color = "blue";
            clock.style.fontWeight = "bold";
            clock.innerHTML = today;
        }

        //clearTimeout() 메서드
        var timerID = 5
        show(timerID);
        //setInterval(show(timerID), 500);

        function show(timerID) {
        
            for(var i=timerID; 0 <= i; i--){
                console.log("i=== 0000   " + i);
                var myArea01 = document.getElementById("myArea01");
                
                if ( i == 0 ) {
                    console.log("i=== 1111   " + i);
                    
                    clearTimeout(i);
                    location.replace("07-popup.html");
                    break;
                } 
                        myArea01.innerHTML = (i+"초 후에 새 문서가 표시됩니다.");
                        myArea01.style.backgroundColor = "pink";
                        myArea01.style.color = "blue";
                        myArea01.style.fontWeight = "bold";
                        myArea01.style.fontSize = "30pt";
                console.log("i===    " + i);
            
            }
        }
        
        // clearTimeout(timerID);
        // location.replace("07-popup.html");

        

        // if (timerID < 1 ) {
        //     clearTimeout(timerID);
        //     location.replace("07-popup.html");
        // } 
        // else { 
        //     myArea = document.getElementById("myArea");
        //     myArea.innerHTML = (n+"초 후에 새 문서가 표시됩니다.");
        //     myArea.style.backgroundColor = "yellow";
        //     myArea.style.color = "blue";
        //     myArea.style.fontWeight = "bold";
        //     myArea.style.fontSize = "30pt";
        //     setTimeout("Show(" + (timerID - 1) + ")", 500);
            
        // }

    } )();

    


    




}
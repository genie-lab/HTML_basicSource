
window.onload = function () {

    (function () {
        var dateDiv = document.getElementById('date');
        var now = new Date();
        // var str = '<ul>\n';

        // for (var i = 0; i < 4; i++) {
        //     let data = null;
        //     switch (i) {
        //         case 0: data = "기본 형식 : " + now; break;
        //         case 1: data = "toGMTString() 형식: " + now.toGMTString(); break;
        //         case 2: data = "toLocaleString() 형식: &nbsp;" + now.toLocaleString(); break;
        //         case 3: data = "toString() 형식: &nbsp;" + now.toString(); break;
        //         default: break;
        //     }
        //     str += "<li id=date-string" + i + ">" + i + "번째 : " + data + "</li>\n";
        // }
        // str += '</ul>\n';
        // dateDiv.innerHTML = str;


        //  http://ezcode.kr/study/view/222
        var ul = document.createElement('ul');
        for (var i = 0; i < 4; i++) {
            var li = document.createElement('li');
            switch (i) {
                case 0: data = "기본 형식 : " + now; break;
                case 1: data = "toGMTString() 형식: " + now.toGMTString(); break;
                case 2: data = "toLocaleString() 형식: &nbsp;" + now.toLocaleString(); break;
                case 3: data = "toString() 형식: &nbsp;" + now.toString(); break;
                default: break;
            }
            li.innerHTML = i + "번째 : " + data;
            ul.appendChild(li)
        }
        dateDiv.appendChild(ul);
    })();

}
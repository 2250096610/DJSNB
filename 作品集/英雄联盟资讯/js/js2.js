window.onload = function () {
    var arr = document.getElementsByTagName('p');
    for (var i = 0; i < arr.length; i++) {
        arr[i].onclick = function () {
            if (this.id == '1') {
                document.getElementById("box1").style.display = 'block';
                document.getElementById("box2").style.display = 'none';
                document.getElementById("box3").style.display = 'none';
            }
            else if (this.id == '2') {
                document.getElementById("box1").style.display = 'none';
                document.getElementById("box2").style.display = 'block';
                document.getElementById("box3").style.display = 'none';
            }
            else {
                document.getElementById("box1").style.display = 'none';
                document.getElementById("box2").style.display = 'none';
                document.getElementById("box3").style.display = 'block';
            }
            if (this.className == 'btn1') {
                this.className = 'btn2';
                var name = this.id;
                var btn = document.getElementsByClassName('btn2');
                for (var j = 0; j < btn.length; j++) {
                    if (btn[j].id != name) {
                        btn[j].className = 'btn1';
                    }
                }
            }
        }
    }
}
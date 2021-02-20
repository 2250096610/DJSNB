var oLis=document.getElementsByTagName("li");
var i,j;
var length=oLis.length;
for(i=0;i<length;i++){
    oLis[i].onclick=function(){
        for(j=0;j<length;j++){
            oLis[j].className="";
        }
        this.className+="clickstyle";
    }
}
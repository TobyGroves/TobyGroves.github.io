var canv=document.getElementById("can");
var gc=canv.getContext("2d");
setInterval(lol,1);

fPx=1150/2-200;
fPy=700;
fO="down";
pix=3;
line=1000000;
ii=0;
jj=0;
paces=hmm(line);
function lol(){
  ii++;
  if(ii>Math.pow(2,jj)){
    jj++;
    switch(jj%7){
      case 0:
      gc.fillStyle="#0000FF";
      break;
      case 1:
      gc.fillStyle="#00FF00";
      break;
      case 2:
      gc.fillStyle="#FF0000";
      break;
      case 3:
      gc.fillStyle="#00FFFF";
      break;
      case 4:
      gc.fillStyle="#FF00FF";
      break;
      case 5:
      gc.fillStyle="#FFFF00";
      break;
      case 6:
      gc.fillStyle="#FFFFFF";
      break;
    }
  }
  direction=3;
  if(ii<paces.length){
    direction=paces[ii];
    //console.log(direction);
  }
  if(fO=="up"){
    switch(direction){
      case 1: for(var a=0;a<pix;a++){
        fPx--;
        fO="left";
        gc.fillRect(fPx,fPy,1,1);
      }break;
      case 0: for(var a=0;a<pix;a++){
        fPx++;
        fO="right";
        gc.fillRect(fPx,fPy,1,1);
      }
      break;
    }
  }
  else if(fO=="down"){
    //console.log(fO);
    switch(direction){
      case 0: for(var a=0;a<pix;a++){
        fPx--;
        fO="left";
        gc.fillRect(fPx,fPy,1,1);
      }break;
      case 1: for(var a=0;a<pix;a++){
        //console.log(a);
        fPx++;
        //console.log(fPx);
        fO="right";
        //console.log(fO);
        gc.fillRect(fPx,fPy,1,1);
        //console.log("Done");
      }
      break;
    }
  }
  else if(fO=="right"){
    switch(direction){
      case 1: for(var a=0;a<pix;a++){
        fPy--;
        fO="up";
        gc.fillRect(fPx,fPy,1,1);
      }break;
      case 0: for(var a=0;a<pix;a++){
        fPy++;
        fO="down";
        gc.fillRect(fPx,fPy,1,1);
      }
      break;
    }
  }
  else if(fO=="left"){
    switch(direction){
      case 0: for(var a=0;a<pix;a++){
        fPy--;
        fO="up";
        gc.fillRect(fPx,fPy,1,1);
      }break;
      case 1: for(var a=0;a<pix;a++){
        fPy++;
        fO="down";
        gc.fillRect(fPx,fPy,1,1);
      }
      break;
    }
  }
  //console.log("alph");
}
function hmm(line){
  //console.log("OVER HERE");
  maxLine=line;
  //console.log("OVER HERE");
  lines=[0,1];
  //console.log("OVER HERE");
  for(var i=2;i<maxLine;i++) {
    j=i;
    //console.log("OVER HERE");
    if((j/2)==Math.floor(j/2)){
      if((i/2)%2==1){
          lines[i]=1;
      }
      if((i/2)%2==0){
          lines[i]=0;
      }
    }
    else{
      lines[i]=lines[(i+1)/2];
    }
  }
  return lines;
}

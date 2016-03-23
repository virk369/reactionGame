
function rnd() {
r1=new Date();
num=Math.round(Math.abs(Math.sin(r1.getTime())*10000000))%5;
return num;}

function start() {
if(q==1){return}
c=0;
ad=0;
da=0;
setTimeout("spel()",1000+1000*rnd());
document.ful.text13.value="wait...";}

function stop() {
if(da==1){return}
if(ad==1){return}
if(q==1){return}
if(c==0){fusk()}
if(c==0){return}
da=1
rak();}

function rak() {
slutTime=new Date();
sltid=slutTime.getTime();
tidpo=(sltid-stid)/1000
if (ad==1)tidpo=2;
tidtot=tidtot+tidpo;
as="";if (tidtot<1)as="0"
document.ful.text11.value="Total time: "+as+Math.round(tidtot*100)/100+" seconds"
as="";if (tidpo<1)as="0"
if(ad==0){
if (k==1)document.ful.text1.value="Reaction time 1: "+as+tidpo+" seconds"
if (k==2)document.ful.text2.value="Reaction time 2: "+as+tidpo+" seconds"
if (k==3)document.ful.text3.value="Reaction time 3: "+as+tidpo+" seconds"
if (k==4)document.ful.text4.value="Reaction time 4: "+as+tidpo+" seconds"
if (k==5)document.ful.text5.value="Reaction time 5: "+as+tidpo+" seconds"
if (k==6)document.ful.text6.value="Reaction time 6: "+as+tidpo+" seconds"
if (k==7)document.ful.text7.value="Reaction time 7: "+as+tidpo+" seconds"
if (k==8)document.ful.text8.value="Reaction time 8: "+as+tidpo+" seconds"
if (k==9)document.ful.text9.value="Reaction time 9: "+as+tidpo+" seconds"
if (k==10)document.ful.text10.value="Reaction time 10: "+as+tidpo+" seconds"
document.ful.text13.value="Push Start";
}
as="";if (tidtot<1)as="0"
document.ful.text11.value="Total time: "+as+Math.round(tidtot*100)/100+" seconds"
as="";if (tidtot/k<1)as="0"
document.ful.text12.value="Avg. time: "+as+Math.round(tidtot*10000/(k*100))/100+" seconds"
if(k>4){
q=1
document.ful.text13.value="Game Over...";
   }
}

function spel() {
if (ad==1)return
k=k+1
c=1;
startTime=new Date();
stid=startTime.getTime();
document.ful.text13.value="PUSH STOP!!!";
}

function fusk() {
document.ful.text13.value="Too soon. 2 sec penalty. Push start!"
ad=1
stid=0;
rak();
}
tidtot=0;
k=0;
q=0;
ad=0;

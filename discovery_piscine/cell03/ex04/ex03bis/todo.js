i=0
window.onload = function() {
    i=0;
    if(document.cookie!="undefined")
    {
    let decodedCookie = decodeURIComponent(document.cookie);;
    let ca = decodedCookie.split(';');;
    m=0;
    for(i=0; i <ca.length; i++) {
        let c = ca[i];;
        while (c.charAt(0) == ' ') {
        c = c.substring(1);;
        }

        idname=c.split('=')[0];
        numbe=Number(idname);     
        word=c.split('=')[1]
        makealittleguy(c.split('=')[1],idname);;//need to find a way to get number of characters of the id inside the string in cookie
        if(numbe>m){
            m=numbe;
        }
    }
    i=m+1;
    }
}
$("button").click(function(){
    stuffs=prompt("Engage in the act of creation, fool.", "make a little guy!")
    makealittleguy(stuffs,i);
    i=i+1;
})

function makealittleguy(stuffs,theirnumber) {
    const thing = document.createElement("div");
    thing.innerHTML = stuffs;
    thing.id=theirnumber;
    thing.style.border="1px black";
    thing.onclick=function () {DES_TROY(this.id);};
    thing.style.margin="2px";
    thing.style.padding="5px";
    thing.style.position="absolute";
    document.getElementById("ft_list").appendChild(thing);
    h=i;
    for(h=i; h!=-1; h=h-1) {
        fall=((i-h)*50)+50+"px";
        if(document.getElementById(h)){
            $("#"+h).css("top",fall)
        }
        
    }
    document.cookie = theirnumber.toString() + "=" + stuffs + ";path=/";
}

function DES_TROY(justalilguy) {
    if (i!=justalilguy){
        confirmation=confirm("Destroy this creature?");
        if (confirmation==true ){
            victim = document.getElementById(justalilguy);
            victim.remove();
            alert("Your EXP increased.")
            h=i;
            for(h=i; h!=-1; h=h-1) {
                fall=((i-h-1)*50)+50+"px";
                if(document.getElementById(h)){
                    $("#"+h).css("top",fall)
                }
                
            }
            document.cookie = justalilguy+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";//EXPIRE, CREATURE
        }
        else {
            alert("The creature is relieved for being able to live for just one more second.")
        }
    }     
}


//-------------------------


function actofcreation() {
    stuffs=prompt("Engage in the act of creation, fool.", "make a little guy!")
    makealittleguy(stuffs,i);
    i=i+1;
}
function makealittleguy(stuffs,theirnumber) {
    const thing = document.createElement("div");
    thing.innerHTML = stuffs;
    thing.id=theirnumber;
    thing.onclick=function () {DES_TROY(this.id);};
    thing.style.border="1px black";
    thing.style.margin="2px";
    thing.style.padding="5px";
    thing.style.position="absolute";
    document.getElementById("ft_list").appendChild(thing);
    h=i;
    for(h=i; h!=-1; h=h-1) {
        fall=((i-h)*50)+50+"px";
        if(document.getElementById(h)){
            document.getElementById(h).style.top=fall;
        }
        
    }
    document.cookie = theirnumber.toString() + "=" + stuffs + ";path=/";
}
function DES_TROY(justalilguy) {
    if (i!=justalilguy){
        confirmation=confirm("Destroy this creature?");
        if (confirmation==true ){
            victim = document.getElementById(justalilguy);
            victim.remove();
            alert("Your EXP increased.")
            h=i;
            for(h=i; h!=-1; h=h-1) {
                fall=((i-h-1)*50)+50+"px";
                if(document.getElementById(h)){
                    document.getElementById(h).style.top=fall;
                }
                
            }
            document.cookie = justalilguy+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";//EXPIRE, CREATURE
        }
        else {
            alert("The creature is relieved for being able to live for just one more second.")
        }
    }     
}

function Submitted(){
    if(document.getElementById("fname").value=="" || document.getElementById("lname").value=="") {
        alert("Form not submitted properly, Please check details and try again!" + document.getElementById("lname").value);
    }else{
        alert("Form Submitted successfully!");        
    }
}

function resetcolors(){

    /**
     * ColorScheme1:
     * #A83B5E
     * white
     * pink
     * #D0D7D9
     * #7EDDF2
     * #012E40
     **/

    var H1 = document.getElementsByTagName("h1");    
    var H2 = document.getElementsByTagName("h2");
    var H3 = document.getElementsByTagName("h3");
    var H4 = document.getElementsByTagName("h4");
    var TD = document.getElementsByTagName("td");
    var IFRAME = document.getElementsByTagName("iframe");
    var LABEL = document.getElementsByTagName("label");
    var SIMPLE = document.getElementsByClassName("simple");
    var ABTME = document.getElementsByClassName("abtme");
    var ABTME2 = document.getElementsByClassName("abtme2");
    var VID = document.getElementsByClassName("eleisvid");

    for(i = 0; i < H1.length ; i++){
        H1[i].style.color = "white";
    }

    for(i = 0; i < H2.length; i++){
        H2[i].style.color = "#A83B5E";
    }

    for(i = 0; i < H3.length; i++){
        H3[i].style.color = "pink";
    }

    for(i = 0; i < H4.length; i++){
        H4[i].style.color = "#A83B5E";
    }

    for(i = 0; i < TD.length; i++){
        TD[i].style.color = "pink";
    }

    for(i = 0; i < IFRAME.length; i++){
        IFRAME[i].style.color = "#A83B5E";
    }
    
    for(i = 0; i < LABEL.length; i++){
        LABEL[i].style.color = "#7EDDF2";
    }
    
    for(i = 0; i < ABTME.length; i++){
        ABTME[i].style.color = "white";
    }

    for(i = 0; i < ABTME2.length; i++){
        ABTME2[i].style.color = "#D0D7D9";
    }

    for(i = 0; i< SIMPLE.length; i++){
        SIMPLE[i].style.color = "#7EDDF2"
    }

    for(i = 0; i< VID.length; i++){
        VID[i].style.border = "#012E40"
    }
    

}

function colorchange1(){

    //document.getElementById("h3").style.color="#064457";
    var H1 = document.getElementsByTagName("h1");    
    var H2 = document.getElementsByTagName("h2");
    var H3 = document.getElementsByTagName("h3");
    var H4 = document.getElementsByTagName("h4");
    var TD = document.getElementsByTagName("td");
    var IFRAME = document.getElementsByTagName("iframe");
    var LABEL = document.getElementsByTagName("label");
    var SIMPLE = document.getElementsByClassName("simple");
    var INPUT = document.getElementsByTagName("input");
    var ABTME = document.getElementsByClassName("abtme");
    var ABTME2 = document.getElementsByClassName("abtme2");
    var VID = document.getElementsByClassName("eleisvid");

    /**
      * ColorScheme2:
      * #2AA837
      * #A83B5E
      * #F56F9A
    **/

    for(i = 0; i < H1.length ; i++){
        H1[i].style.color = "#F56F9A";
    }

    for(i = 0; i < H2.length; i++){
        H2[i].style.color = "#012E40";
    }

    for(i = 0; i < H3.length; i++){
        H3[i].style.color = "#2AA837";
    }

    for(i = 0; i < H4.length; i++){
        H4[i].style.color = "#A83B5E";
    }

    for(i = 0; i < TD.length; i++){
        TD[i].style.color = "#2AA837";
    }

    for(i = 0; i < IFRAME.length; i++){
        IFRAME[i].style.color = "#A83B5E";
    }
    
    for(i = 0; i < LABEL.length; i++){
        LABEL[i].style.color = "#2AA837";
    }

    for(i = 0; i < ABTME.length; i++){
        ABTME[i].style.color = "#A83B5E";
    }

    for(i = 0; i < ABTME2.length; i++){
        ABTME2[i].style.color = "#F56F9A";
    }
    
    for(i = 0; i< SIMPLE.length; i++){
        SIMPLE[i].style.color = "#2AA837"
    }

    for(i = 0; i< VID.length; i++){
        VID[i].style.border = "#A83B5E"
    }
}


function colorchange2(){

    //document.getElementById("h3").style.color="#064457";
    var H1 = document.getElementsByTagName("h1");    
    var H2 = document.getElementsByTagName("h2");
    var H3 = document.getElementsByTagName("h3");
    var H4 = document.getElementsByTagName("h4");
    var TD = document.getElementsByTagName("td");
    var IFRAME = document.getElementsByTagName("iframe");
    var LABEL = document.getElementsByTagName("label");
    var SIMPLE = document.getElementsByClassName("simple");
    var INPUT = document.getElementsByTagName("input");
    var ABTME = document.getElementsByClassName("abtme");
    var ABTME2 = document.getElementsByClassName("abtme2");
    var VID = document.getElementsByClassName("eleisvid");

    /**
     * #C12F20
     * "#BEA96A
     * #F5F7DF
     **/

    for(i = 0; i < H1.length ; i++){
        H1[i].style.color = "#BEA96A";
    }

    for(i = 0; i < H2.length; i++){
        H2[i].style.color = "#C12F20";
    }

    for(i = 0; i < H3.length; i++){
        H3[i].style.color = "#C12F20";
    }

    for(i = 0; i < H4.length; i++){
        H4[i].style.color = "#F5F7DF";
    }

    for(i = 0; i < TD.length; i++){
        TD[i].style.color = "#BEA96A";
    }

    for(i = 0; i < IFRAME.length; i++){
        IFRAME[i].style.color = "#F5F7DF";
    }
    
    for(i = 0; i < LABEL.length; i++){
        LABEL[i].style.color = "#C12F20";
    }

    for(i = 0; i < ABTME.length; i++){
        ABTME[i].style.color = "#F5F7DF";
    }

    for(i = 0; i < ABTME2.length; i++){
        ABTME2[i].style.color = "#C12F20";
    }
    
    for(i = 0; i< SIMPLE.length; i++){
        SIMPLE[i].style.color = "#BEA96A"
    }

    for(i = 0; i< VID.length; i++){
        VID[i].style.border = "#BEA96A"
    }
    
}

function audiochanger(){
    document.getElementById("my-audio").setAttribute('src', 'Media/Audios/Audio-3.mp3');
}
function audiochanger2(){
    document.getElementById("my-audio").setAttribute('src', 'Media/Audios/audio2.mp3');
}
function audiochanger3(){
    document.getElementById("my-audio").setAttribute('src', 'Media/Audios/audio1.mp3');
}
//Kald-JS-figuuri joonestamine
//© Karl-Erik Kald

var modalTitle = "<div id='dlgTitle'><h1>Seaded</h1></div><br>"
var bgColorCtrl = "<br> <label for='BG_RGB_R'>Punane:</label><br>"+
"<input type='number' id='BG_RGB_R' min='0' max='255'></input>"+
"<br> <label for='BG_RGB_G'>Roheline:</label><br>"+
"<input type='number' id='BG_RGB_G' min='0' max='255'></input>"+
"<br> <label for='BG_RGB_B'>Sinine:</label><br>"+
"<input type='number' id='BG_RGB_B' min='0' max='255'></input>";
var copyRightInfo = "<b>© 2020 Karl-Erik Kald. Kõik õigused kaitstud</b><br>"+
"<h2>E-post:</h2> <a href='mailto:karl80038@gmail.com'>karl80038@gmail.com</a>";

var dlgNavControl = 
"<nav id= 'dlgNav'>" +
"    <ul>"+ 
"        <li><a id='setBG' onClick='settingHandler(event)'>Taustavärv</a></li>"+
"        <li><a id='viewCopyRight' onClick='settingHandler(event)'>Autoriõigus ning kontaktteave</a></li>" +
"    </ul>"+
"</nav>";

var dlgModalButtons = "<div id='dlgBTN'><input type='button' id='dlgSave' value='Salvesta' onClick='settingHandler(event)'> <input type='button' id='dlgClose' value='Sulge' onClick='settingHandler(event)'></div>"
function clearArea() 
{
    if (event.target.id == "Kustuta")
    {
        // document.getElementById("mainControls").style.backgroundColor="salmon";
        // document.getElementById("mainControls").innerHTML="<b>Soovite ala tühjendada?</b>  <input type='button' id='Kustuta_Jah' value='Jah' onClick = 'clearArea(event)'>" +
        // "<input type='button' id='Kustuta_Ei' value='Ei' onClick = 'clearArea(event)'>";
        document.getElementById("modal-content").innerHTML="<b>Soovite ala tühjendada?</b><br><input type='button' id='Kustuta_Jah' value='Jah' onClick = 'clearArea(event)'>" +
        "<input type='button' id='Kustuta_Ei' value='Ei' onClick = 'clearArea(event)'>";        
        document.getElementById("modal-content").style.height="100px";
        document.getElementById("modal").style.visibility="visible"
        document.getElementById("modal").style.display="block";
    }
    if (event.target.id == "Kustuta_Jah")
    {
        var area = document.getElementById("drawArea").getContext("2d");
        area.clearRect(0, 0, 300, 400);
        document.getElementById("modal-content").innerHTML="<b>Ala tühjendati edukalt.</b><br><input type='button' id='modalOK' value='OK' onClick = 'clearArea(event)'>";
        document.getElementById("modal-content").style.height="100px";
        document.getElementById("modal").style.visibility="visible"
        document.getElementById("modal").style.display="block";

    }
    if (event.target.id == "Kustuta_Ei")
    {
        document.getElementById("mainControls").style.backgroundColor="white";
        document.getElementById("mainControls").innerHTML="<input type='button' id='Kustuta' value='Kustuta' onClick = 'clearArea(event)'> " +
        "<input type='button' value='Terve figuur' onClick = 'drawEntireFigure()'>";
        document.getElementById("modal").style.visibility="hidden"
        document.getElementById("modal").style.display="none";
    }
    if (event.target.id == "modalOK")
    {
        document.getElementById("mainControls").style.backgroundColor="white";
        document.getElementById("mainControls").innerHTML="<input type='button' id='Kustuta' value='Kustuta' onClick = 'clearArea(event)'> " +
        "<input type='button' value='Terve figuur' onClick = 'drawEntireFigure()'>";
        document.getElementById("modal").style.visibility="hidden";
        document.getElementById("modal").style.display="none";
    }

}

function drawHead()
{
    var head = document.getElementById("drawArea").getContext("2d");
    head.fillStyle = "yellow";
    head.strokeStyle = "black";
    head.fillRect(120, 100, 60, 80);
}

function drawEyes()
{
    var eyes = document.getElementById("drawArea").getContext("2d");
    eyes.fillStyle = "black";
    eyes.beginPath();
    eyes.arc(132, 140, 5, 0, 2*Math.PI, true);
    eyes.fill();
    eyes.beginPath();
    eyes.arc(168, 140, 5, 0, 2*Math.PI, true);
    eyes.fill();
    eyes.closePath();
}

function drawLeftEar()
{
    var ears = document.getElementById("drawArea").getContext("2d");
    // ears.fillStyle = "rgb(238,130,238)";
    ears.fillStyle = "yellow";
    ears.strokeStyle = "yellow";
    ears.lineWidth="10";
    ears.beginPath();
    ears.stroke();
    ears.arc(110, 140, 15, 1.6, 1.5*Math.PI);
    // ears.fill();
    ears.moveTo(110, 140);
    ears.lineTo(200, 140);
    ears.stroke();
    ears.fill();
    ears.closePath();
}

function drawRightEar()
{
    // More info on the properties for canvas:  
    // https://www.w3schools.com/tags/ref_canvas.asp
    // context.fillRect(x,y,width,height);
    // context.arc(x,y,r,sAngle,eAngle,counterclockwise);
    // context.arcTo(x1,y1,x2,y2,r);
	// context.scale(scalewidth,scaleheight);
    // context.rotate(angle);
    var ears = document.getElementById("drawArea").getContext("2d");
    ears.fillStyle = "yellow";
    ears.strokeStyle = "yellow";
    ears.lineWidth="10";
    ears.beginPath();
    ears.stroke();
    ears.arc(190, 140, 15, 1.6, 1.5*Math.PI, true);
    ears.fill();
    ears.moveTo(190, 140);
    ears.lineTo(140, 140);
    ears.stroke();
    ears.fill();
    ears.closePath();
}

function drawHair()
{
    // More info on the properties for canvas:  
    // https://www.w3schools.com/tags/ref_canvas.asp
    // context.fillRect(x,y,width,height);
    // context.arc(x,y,r,sAngle,eAngle,counterclockwise);
    // context.arcTo(x1,y1,x2,y2,r);
	// context.scale(scalewidth,scaleheight);
    // context.rotate(angle);
    var hair = document.getElementById("drawArea").getContext("2d");
    hair.fillStyle = "brown";
    hair.beginPath();
    hair.fillRect(120, 95, 60, 10);

}

function drawMouth()
{
    // More info on the properties for canvas:  
    // https://www.w3schools.com/tags/ref_canvas.asp
    // context.fillRect(x,y,width,height);
    // context.arc(x,y,r,sAngle,eAngle,counterclockwise);
    // context.arcTo(x1,y1,x2,y2,r);
	// context.scale(scalewidth,scaleheight);
    // context.rotate(angle);
    var mouth = document.getElementById("drawArea").getContext("2d");
    mouth.strokeStyle = "red";
    mouth.lineWidth="1";
    mouth.beginPath();
    // mouth.moveTo(140, 140);
    // mouth.lineTo(141, 140);
    // mouth.moveTo(141, 140);
    // mouth.lineTo(142, 141);
    // mouth.moveTo(142, 141);
    // mouth.lineTo(143, 142);
    // mouth.moveTo(143, 142);
    // mouth.lineTo(144, 143);
    // mouth.moveTo(144, 143);
    // mouth.lineTo(145, 144);
    // mouth.moveTo(145, 145);
    // mouth.lineTo(146, 145);
    mouth.arc(150, 150, 15, 0, 1*Math.PI);
    mouth.stroke();
}

function drawNose()
{
    // More info on the properties for canvas:  
    // https://www.w3schools.com/tags/ref_canvas.asp
    // context.fillRect(x,y,width,height);
    // context.arc(x,y,r,sAngle,eAngle,counterclockwise);
    // context.arcTo(x1,y1,x2,y2,r);
	// context.scale(scalewidth,scaleheight);
    // context.rotate(angle);
    var nose = document.getElementById("drawArea").getContext("2d");
    nose.strokeStyle = "yellow";
    nose.fillStyle = "black";
    nose.lineWidth="0";
    nose.beginPath();
    nose.arc(148, 147, 1, 0, 2*Math.PI, true);
    nose.stroke();
    nose.fill();
    nose.beginPath();
    nose.arc(152, 147, 1, 0, 2*Math.PI, true);
    nose.stroke();
    nose.fill();
}

function drawBody()
{
    // More info on the properties for canvas:  
    // https://www.w3schools.com/tags/ref_canvas.asp
    // context.fillRect(x,y,width,height);
    // context.arc(x,y,r,sAngle,eAngle,counterclockwise);
    // context.arcTo(x1,y1,x2,y2,r);
	// context.scale(scalewidth,scaleheight);
    // context.rotate(angle);
    var body = document.getElementById("drawArea").getContext("2d");
    body.fillStyle = "yellow";
    body.strokeStyle = "yellow";
    body.beginPath();
    body.arc(110, 200, 15, 1.5, 1.5*Math.PI, false);
    body.stroke();
    body.fill();
    body.beginPath();
    body.fillRect(110, 180, 80, 80);
    body.stroke();
    body.fill();
    body.beginPath();
    body.arc(189, 200, 15, 1.5, 1.5*Math.PI, true);
    body.stroke();
    body.fill();
}

function drawLeftHand()
{
    var hand = document.getElementById("drawArea").getContext("2d");
    hand.fillStyle = "yellow";
    hand.strokeStyle = "black";
    hand.beginPath();
    hand.fillRect(50, 195, 80, 10);
}

function drawRightHand()
{
    var hand = document.getElementById("drawArea").getContext("2d");
    hand.fillStyle = "yellow";
    hand.strokeStyle = "black";
    hand.beginPath();
    hand.fillRect(195, 195, 50, 10);
}

function drawLeftFoot()
{
    var foot = document.getElementById("drawArea").getContext("2d");
    foot.fillStyle = "yellow";
    foot.strokeStyle = "black";
    foot.beginPath();
    foot.fillRect(115, 250, 10, 50);
}

function drawRightFoot()
{
    var foot = document.getElementById("drawArea").getContext("2d");
    foot.fillStyle = "yellow";
    foot.strokeStyle = "black";
    foot.beginPath();
    foot.fillRect(175, 250, 10, 50);
}

function drawPants()
{
    var pants = document.getElementById("drawArea").getContext("2d");
    pants.fillStyle = "blue";
    pants.strokeStyle = "black";
    pants.beginPath();
    pants.fillRect(110, 240, 80, 20);
    pants.beginPath();
    pants.fillRect(115, 250, 10, 40);
    pants.beginPath();
    pants.fillRect(175, 250, 10, 40);
}

function drawShirt()
{
    var shirt = document.getElementById("drawArea").getContext("2d");

    shirt.fillStyle = "red";
    shirt.strokeStyle = "black";
    shirt.beginPath();
    shirt.fillRect(110, 180, 80, 60);
    shirt.beginPath();
    shirt.arc(110, 200, 15, 1.5, 1.5*Math.PI, false);
    shirt.stroke();
    shirt.fill();
    shirt.beginPath();
    shirt.arc(189, 200, 15, 1.5, 1.5*Math.PI, true);
    shirt.stroke();
    shirt.fill();
    shirt.beginPath();
    shirt.fillRect(70, 195, 80, 10);
    shirt.beginPath();
    shirt.fillRect(185, 195, 40, 10);
}

function drawBoots()
{
    var boots = document.getElementById("drawArea").getContext("2d");
    boots.fillStyle = "black";
    boots.strokeStyle = "black";
    boots.beginPath();
    boots.fillRect(115, 290, 10, 10);
    boots.beginPath();
    boots.fillRect(175, 290, 10, 10);
}

function drawEntireFigure()
{
    drawHead();
    drawBody();
    drawHair();
    drawLeftEar();
    drawRightEar();
    drawEyes();
    drawNose();
    drawMouth();
    drawLeftHand();
    drawLeftFoot();
    drawRightHand();
    drawRightFoot();
    drawPants();
    drawShirt();
    drawBoots();

}
   function openSettings()
   {
        document.getElementById("modal-content").innerHTML= modalTitle + dlgNavControl + "<div id='dlgContent'>"+ bgColorCtrl + "</div>" + dlgModalButtons;
        document.getElementById("modal-content").style.height="350px";

        document.getElementById("modal").style.visibility="visible"
        document.getElementById("modal").style.display="block";

   }
   function settingHandler()
   {
        if (event.target.id == "setBG")
        {

            document.getElementById("modal-content").innerHTML= modalTitle + dlgNavControl + "<div id='dlgContent'>" + bgColorCtrl + "</div>"+ dlgModalButtons;
            document.getElementById("modal").style.visibility="visible";
            document.getElementById("modal").style.display="block";
        }
        if (event.target.id == "viewCopyRight")
        {

            document.getElementById("modal-content").innerHTML= modalTitle + dlgNavControl +  "<div id='dlgContent'>" + copyRightInfo + "</div>"+ dlgModalButtons;
            document.getElementById("modal").style.visibility="visible";
            document.getElementById("modal").style.display="block";
        }
        if (event.target.id == "dlgClose")
        {
            document.getElementById("modal").style.visibility="hidden";
            document.getElementById("modal").style.display="none";
        }

   }

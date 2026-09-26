# Python-FullStack-Learning  
<!DOCTYPE html>
<html>
    <head>
        <title>js Bulb on of</title>
    </head>
    <body>
        <h2>What can JavaScript Do?</h2>
        <p id="demo">JavaScript can change the style of an HTML element.<mark>Click change Size.</mark></p>
        <p >JavaScript can change HTMl attribute value.</p>
        <p>In this case JavaScript change the value of 
            the src attribute of an image.</p>
            <p id="demo1"><mark>JavaScript can hide HTML elements. Click  Hide. </mark></p>
        <button onclick="document.getElementById('myImage').src='bulbon.png'">Turn On Light</button>
        <img id="myImage" src="bulboff.png" style="width: 100px;">
        <button onclick="document.getElementById('myImage').src='bulboff.png'">Turn Off Light</button>
        <button onclick="document.getElementById('demo').style.fontSize='35px'">Click_change _size</button>
        <button onclick="document.getElementById('demo1').style.display='none'">Click Hide</button>

    </body>
</html>

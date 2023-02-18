document.getElementById('cal-btn').addEventListener('click', function(){
const  baseFieldTriangle = document.getElementById('b-field');
const baseFieldTrianglestring = baseFieldTriangle.value;
const newbaseFieldTriangle = parseFloat(baseFieldTrianglestring)

const  heightFieldTriangle = document.getElementById('h-field');
const heightFieldTrianglestring = heightFieldTriangle.value;
const newheightFieldTriangle = parseFloat(heightFieldTrianglestring)

a= typeof newbaseFieldTriangle;
b= typeof newheightFieldTriangle;

if (typeof a === 'NaN' && typeof b === 'NaN' ){
    
    alert ('enter number')
   }
   else{
    const totalTriangleField = 0.5*newbaseFieldTriangle*newheightFieldTriangle;
   

    const displayfield = document.getElementById('t-field');
    displayfield.innerText = totalTriangleField;

   }



    
})
// rectangle 

document.getElementById('cal-btn-r').addEventListener('click', function(){
const  widthFieldrectangle = document.getElementById('w-field');
const widthFieldrectanglestring = widthFieldrectangle.value;
const newwidthFieldrectangle = parseFloat(widthFieldrectanglestring)

const  lengthFieldrectangle = document.getElementById('l-field');
const lengthFieldrectanglestring = lengthFieldrectangle.value;
const newlengthFieldrectangle = parseFloat(lengthFieldrectanglestring)

a= typeof newwidthFieldrectangle;
b= typeof newlengthFieldrectangle;

if (typeof a === 'NaN' && typeof b === 'NaN' ){
    
    alert ('enter number')
   }
   else{
    const totalrectangleField = newwidthFieldrectangle*newlengthFieldrectangle;
   

    const displayfieldr = document.getElementById('t-field-r');
    displayfieldr.innerText = totalrectangleField;

   }



    
})


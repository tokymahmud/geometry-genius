// triangle
document.getElementById('cal-btn').addEventListener('click', function(){
    const  baseFieldTriangle = document.getElementById('b-field');
    const baseFieldTrianglestring = baseFieldTriangle.value;
    const newbaseFieldTriangle = parseFloat(baseFieldTrianglestring)
    
    const  heightFieldTriangle = document.getElementById('h-field');
    const heightFieldTrianglestring = heightFieldTriangle.value;
    const newheightFieldTriangle = parseFloat(heightFieldTrianglestring)
  
    function validitycheck(v1,v2){
        if (isNaN(v1) || isNaN(v2) || v1<0 ||v2<0){
        
            alert ('enter number correctly');
            return;
        
        }
        else{
            const totalTriangleField = 0.5*newbaseFieldTriangle*newheightFieldTriangle;
           
        
            const displayfield = document.getElementById('t-field');
            displayfield.innerText = totalTriangleField;
            return;
        
        }
        
        
            

    }
    validitycheck(newbaseFieldTriangle,newheightFieldTriangle);
    
    
       baseFieldTriangle.value  = '';
       heightFieldTriangle.value  = '';
    
        
    
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

// Parallelogram

document.getElementById('cal-btn-p').addEventListener('click', function(){
    const  baseFieldParallelogram = document.getElementById('b-field-p');
    const baseFieldParallelogramstring = baseFieldParallelogram.value;
    const newbaseFieldParallelogram = parseFloat(baseFieldParallelogramstring)
    
    const  heightFieldParallelogram = document.getElementById('h-field-p');
    const heightFieldParallelogramstring = heightFieldParallelogram.value;
    const newheightFieldParallelogram = parseFloat(heightFieldParallelogramstring)
    
    a= typeof newbaseFieldParallelogram;
    b= typeof newheightFieldParallelogram;
    
    if (typeof a === 'NaN' && typeof b === 'NaN' ){
        
        alert ('enter number')
       }
       else{
        const totalParallelogramField = newbaseFieldParallelogram*newheightFieldParallelogram;
       
    
        const displayfieldp = document.getElementById('t-field-p');
        displayfieldp.innerText = totalParallelogramField;
    
       }
    
    
    
        
    })


    // Rhombus


    document.getElementById('cal-btn-rmb').addEventListener('click', function(){
        const  d1FieldRhombus = document.getElementById('d1');
        const d1FieldRhombusstring = d1FieldRhombus.value;
        const newd1FieldRhombus = parseFloat(d1FieldRhombusstring)
        
        const  d2FieldRhombus = document.getElementById('d2');
        const d2FieldRhombusstring = d2FieldRhombus.value;
        const newd2FieldRhombus = parseFloat(d2FieldRhombusstring)
        
        a= typeof newd1FieldRhombus;
        b= typeof newd2FieldRhombus;
        
        if (typeof a === 'NaN' && typeof b === 'NaN' ){
            
            alert ('enter number')
           }
           else{
            const totalRhombusField = 0.5*newd1FieldRhombus*newd2FieldRhombus;
           
        
            const displayfieldp = document.getElementById('t-field-p');
            displayfieldp.innerText = totalRhombusField;
        
           }
        
        
        
            
        })

        // Pentagon

        document.getElementById('cal-btn-pnt').addEventListener('click', function(){
            const  pFieldPentagon = document.getElementById('p');
            const pFieldPentagonstring = pFieldPentagon.value;
            const newpFieldPentagon = parseFloat(pFieldPentagonstring)
            
            const  bFieldPentagon = document.getElementById('b');
            const bFieldPentagonstring = bFieldPentagon.value;
            const newbFieldPentagon = parseFloat(bFieldPentagonstring)
            
            a= typeof newpFieldPentagon;
            b= typeof newbFieldPentagon;
            
            if (typeof a === 'NaN' && typeof b === 'NaN' ){
                
                alert ('enter number')
               }
               else{
                const totalPentagonField = 0.5*newpFieldPentagon*newbFieldPentagon;
               
            
                const displayfieldpnt = document.getElementById('t-field-pnt');
                displayfieldpnt.innerText = totalPentagonField;
            
               }
            
            
            
                
            })
        
// Ellipse

document.getElementById('cal-btn-el').addEventListener('click', function(){
    const  aFieldEllipse = document.getElementById('a');
    const aFieldEllipsestring = aFieldEllipse.value;
    const newaFieldEllipse = parseFloat(aFieldEllipsestring)
    
    const  bassFieldEllipse = document.getElementById('bass');
    const bassFieldEllipsestring = bassFieldEllipse.value;
    const newbassFieldEllipse = parseFloat(bassFieldEllipsestring)
    
    a= typeof newaFieldEllipse;
    b= typeof newbassFieldEllipse;
    
    if (typeof a === 'NaN' && typeof b === 'NaN' ){
        
        alert ('enter number')
       }
       else{
        const totalEllipseField = 3.1416*newaFieldEllipse*newbassFieldEllipse;
       
    
        const displayfieldel = document.getElementById('t-field-el');
        displayfieldel.innerText = totalEllipseField;
    
       }
    
    
    
        
    })


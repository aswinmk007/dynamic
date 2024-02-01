const Calculatebmi=()=>{
    var height=document.getElementById('height').value
    var weight=document.getElementById('weight').value

    if(weight > 0 && height > 0){
        var bmi = weight / ((height/100)**22)
       
        
    
    }
    result.innerHTML=`Your BMI: ${bmi}`
}
   
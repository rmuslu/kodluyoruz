function circleArea(r){
    let area = Math.PI*r*r;
    console.log(area.toFixed(2)); 
}

function circleCircumference(r){
    let circum = Math.PI*2*r
    console.log(circum) ;
}

module.exports = {
    circleArea,
 circleCircumference
}
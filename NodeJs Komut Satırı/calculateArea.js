const arguments = process.argv.slice(2);
function calculateArea(r){
    let area = Math.PI*r*r;
    return area.toFixed(2);;
}
console.log(`Yarıçapı ${arguments[0]} olan dairenin alanı: ${calculateArea(arguments[0] *1)}`);
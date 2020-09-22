var resultFieled = $("#result");

function insertNumber(number){
    // alert(number);
    var existingNumbers = resultFieled.val();

    resultFieled.val(existingNumbers + number);
}

function clearResult(){
    resultFieled.val('')
}

function calculate(){
    var result = eval(resultFieled.val());
    resultFieled.val(result);
}
function deleteNumbers(){
   var presentValue = resultFieled.val();

   if(presentValue!=''){
    resultFieled.val(presentValue.slice(0,-1));
   }

}
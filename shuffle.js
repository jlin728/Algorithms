// datatype= numbers, strings, etc.
// for(var i=arr.length; i>=0; i--){
//     var newArray = []
//     var random = Math.trunc(Math.random()*arr.length);
//     if ((typeof newarray[random]=="Null") || (typeof newarray[random]=="undefined"){
//         newarray[random] = arr[i];
//     }
//     else {
//         i++
//     }
//     return newArray;
// }
// console.log(shuffle([1,2,35,5,8,78,"jiff"]))





function shuff(arr){
    for(var i = 0; i<arr.length; i++){
        var temp = arr[i];
        var index = Math.trunc(Math.random()*arr.length);
        arr [i] = arr[index];
        arr[index] = temp;
        console.log(arr);
    }
}
shuff([2,3,4,5,8,0])
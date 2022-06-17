function calc() {
  var inves = document.getElementById("amount").value;
  var inves = parseInt(inves,10);
  var eq = document.getElementById("equity").value;
  var eq = parseInt(eq,10);
  
  var num = inves*100;
  var deno = eq;
  var postmoney = num/deno;
  var premoney = postmoney-inves;

  document.getElementById("pre").value = premoney;
  document.getElementById("post").value = postmoney;
}


// function updateTextView(_obj){
//   var num = getNumber(_obj.val());
//   if(num==0){
//     _obj.val('');
//   }else{
//     _obj.val(num.toLocaleString());
//   }
// }
// function getNumber(_str){
//   var arr = _str.split('');
//   var out = new Array();
//   for(var cnt=0;cnt<arr.length;cnt++){
//     if(isNaN(arr[cnt])==false){
//       out.push(arr[cnt]);
//     }
//   }
//   return Number(out.join(''));
// }
// $(document).ready(function(){
//   $('input[type=text]').on('keyup',function(){
//     (updateTextView($(this)));
//   });
// });
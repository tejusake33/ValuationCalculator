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
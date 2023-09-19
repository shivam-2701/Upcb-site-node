let slider = document.getElementById("myRange");
let output = document.getElementById("principal");
let rateSlider = document.getElementById("rateRange");
let rateOutput = document.getElementById("rate");
let timeSlider = document.getElementById("timeRange");
let timeOutput = document.getElementById("time");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }
output.value = slider.value;
rateOutput.value = rateSlider.value;
timeOutput.value = timeSlider.value;

slider.oninput = function() {
  output.value = this.value;
}
rateSlider.oninput = function() {
  rateOutput.value = this.value;
}
timeSlider.oninput = function() {
  timeOutput.value = this.value;
}


let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");
let calculate = () => {
  let p = Number(document.getElementById("principal").value);
  let r = Number(document.getElementById("rate").value);
  let t = Number(document.getElementById("time").value);
  let duration = "year";//document.getElementById("duration").value;
  var element =  document.getElementById('duration');
if (typeof(element) != 'undefined' && element != null)
{
  duration = element.value;
}
  let A = duration == "year" ? p * (Math.pow((1 + r / 100), t)) : p * (Math.pow((1 + r / 1200), t));
  let CI = A - p;

  result.innerHTML = `<div>Principal Amount: <span>Rs ${p.toFixed(2)}</span></div>
  <div>Total Interest: <span>Rs ${CI.toFixed(2)}</span></div>
  <div>Total Amount: <span>Rs ${A.toFixed(2)}</span></div>`;
};
calculateBtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);

function calculateEMI(){
   let p=Number(document.getElementById('principal').value);
   r=document.getElementById('rate').value
   t=document.getElementById('time').value
     let duration = "year";//document.getElementById("duration").value;
  var element =  document.getElementById('duration');
if (typeof(element) != 'undefined' && element != null)
{
  duration = element.value;
}
   // let A = duration == "year" ? p * (Math.pow((1 + r / 100), t)) : p * (Math.pow((1 + r / 1200), t));
   let e = (p * (r/1200) * Math.pow((1 + (r/1200)), 12*t))/(Math.pow((1 + (r/1200)), 12*t) -1)
   let A = e * 12 * t;
   let CI = A - p;
   // let emi = (A/(12*t));
   // emi = emi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   document.getElementById("result").innerHTML=`<div>Principal Amount: <span>Rs ${p.toFixed(2)}</span></div>
  
  <div>EMI: <span>Rs ${e.toFixed(2)}</span></div>
  <div>Total Interest: <span>Rs ${CI.toFixed(2)}</span></div>
  <div>Total Amount: <span>Rs ${A.toFixed(2)}</span></div>`;
}


function calc()
{
	var w = document.bmiform.wkg.value;
	var h = document.bmiform.hcm.value;
        var hg = h*h/10000;
	var bmi = w/hg;
	document.bmiform.bmi.value = bmi;
 if(bmi < 18.5)
 {
	document.bmiform.result.value = "You are Underweight"; 
 }
 if(bmi >= 18.5 && bmi<25)
 {
	document.bmiform.result.value = "You are Normal"; 
 }
  if(bmi >=25 && bmi< 30)
 {
	document.bmiform.result.value = "You are Overweight"; 
  }
 if(bmi >=30 && bmi<40)
{
	document.bmiform.result.value = "You are Obese"; 
 }
 if(bmi >=30 && bmi<40)
{
	document.bmiform.result.value = "You are Extremely Obese"; 
 }
 }
function reset()
{
	location.reload();
}
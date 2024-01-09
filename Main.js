const btnEl = document.getElementById("btn");
const valueInputEl = document.getElementById("value");
const resultEl = document.getElementById("weight-condition");


function BMICalculator() {
  const heightValue = document.getElementById("Height").value / 100;
  const weightValue = document.getElementById("weight").value;
  // console.log(heightValue, weightValue);
  const BmiValue = weightValue / (heightValue * heightValue);
  valueInputEl.value = BmiValue;
//   console.log(BmiValue);

  if (BmiValue < 18.5) {
    resultEl.innerHTML = "under Weight";
    resultEl.style.color ="red"
  } else if (BmiValue >= 18.5 && BmiValue <= 24.9) {
    resultEl.innerHTML = "Normal Weight";
    resultEl.style.color ="green"
  } else if (BmiValue >= 25 && BmiValue <= 29.9) {
    resultEl.innerHTML = "Over Weight";
    resultEl.style.color ="yellow"
  } else if (BmiValue >= 30) {
    resultEl.innerHTML = "Obesity";
    resultEl.style.color ="red"
  }
}
btnEl.addEventListener("click", BMICalculator);

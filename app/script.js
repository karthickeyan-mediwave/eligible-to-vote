const ageInput = document.querySelector("#input-no");
const eligibility = document.querySelector("#btn-eligibility");
const clear = document.querySelector("#btn-clear");
const result = document.querySelector("#result-show");
clear.addEventListener("click", function () {
  document.querySelector("#input-no").value = "";
  document.getElementById("result-show").style.display = "none";
});
eligibility.addEventListener("click", function () {
  const userAge = ageInput.value;
  if (!userAge) {
    result.innerHTML = "Please Enter Age";
    return;
  }
  if (userAge < 18) {
    result.innerHTML = "You are not eligible to vote";
    result.style.color = "red";
    result.style.display = "block";
  } else {
    result.innerHTML = "You are  eligible to vote";
    result.style.color = "green";
    result.style.display = "block";
  }
});

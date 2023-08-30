const ageInput = document.querySelector("#input-no");
const eligibility = document.querySelector("#btn-eligibility");
const clear = document.querySelector("#btn-clear");
clear.addEventListener("click", function () {
  document.querySelector("#input-no").value = "";
  document.getElementById("result-show").style.display = "none";
});
eligibility.addEventListener("click", function () {
  const userAge = ageInput.value;
  if (!userAge) {
    document.querySelector("#result-show").innerHTML = "Please Enter Age";
    return;
  }
  if (userAge < 18) {
    document.querySelector("#result-show").innerHTML =
      "You are not eligible to vote";
    document.querySelector("#result-show").style.color = "red";
    document.getElementById("result-show").style.display = "block";
  } else {
    document.querySelector("#result-show").innerHTML =
      "You are  eligible to vote";
    document.querySelector("#result-show").style.color = "green";
    document.getElementById("result-show").style.display = "block";
  }
});

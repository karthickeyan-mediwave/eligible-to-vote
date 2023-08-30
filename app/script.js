const ageInput = document.querySelector("#input-no");
const eligibility = document.querySelector("#btn-eligibility");
const clear = document.querySelector("#btn-clear");
const result = document.querySelector("#result-show");

clear.addEventListener("click", function () {
  console.log("clear", document.querySelector("#input-no").value);
  document.querySelector("#input-no").value = "";
  document.getElementById("result-show").style.display = "none";
});

eligibility.addEventListener("click", function () {
  const userAge = ageInput.value;
  if (!userAge) {
    console.log("hiiiii");
    document.querySelector("#result-show").innerHTML = "Please Enter Age";
    return;
  }
  if (userAge < 18) {
    console.log("less");
    // result = "You are not eligible to vote";
    // result.style.color = "green";
    document.querySelector("#result-show").innerHTML =
      "You are not eligible to vote";
    document.querySelector("#result-show").style.color = "red";
    document.getElementById("result-show").style.display = "block";
  } else {
    console.log("ok");
    //result = "You are eligible to vote";
    document.querySelector("#result-show").innerHTML =
      "You are  eligible to vote";
    document.querySelector("#result-show").style.color = "green";
    document.getElementById("result-show").style.display = "block";
  }
});

const emailInput = document.querySelector("#email-input");

console.log(emailInput.value);

function signupHandler() {
  const userEmailAddress = emailInput.value;
  const recepient1 = "lorne@friendsofnewcomers.ca";
  const recepient2 = "harold@friendsofnewcomers.ca";
  const subject = "Add me to newcomers list!";
  const body = `I wish to be added to your text messages as a newcomer. My email address is ${userEmailAddress}`;
  const mailtoLink = `mailto:${recepient1}, ${recepient2}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

const signupButton = document.querySelector("#signup-button");
signupButton.addEventListener("click", signupHandler);

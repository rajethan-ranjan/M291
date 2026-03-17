const firstNameField = document.getElementById("first-name");
const lastNameField = document.getElementById("last-name");
const sendButton = document.getElementById("send-button");
const errorContainer = document.getElementById("error-container");

validateInputFields();

[firstNameField, lastNameField].forEach((field) => {
  field.addEventListener("input", validateInputFields);
});

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  alert(
    `Danke für deine Anmeldung, ${firstNameField.value} ${lastNameField.value}! 🎉`,
  );
});

function validateInputFields() {
  const errors = [];

  if (!firstNameField.value.trim()) {
    errors.push("Bitte gib deinen Vornamen ein.");
  }

  if (!lastNameField.value.trim()) {
    errors.push("Bitte gib deinen Nachnamen ein.");
  }
  errorContainer.innerHTML = errors.join("<br>");
  sendButton.disabled = errors.length > 0;
}

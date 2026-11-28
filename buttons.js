const buttons = document.querySelectorAll(".tab-buttons button");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    button.classList.add("active");

    document.getElementById(button.dataset.tab)
      .classList.add("active");
  });
});

document.querySelectorAll(".tab-buttons button").forEach(button => {
  button.addEventListener("click", () => {

    // Remove active class from all buttons
    document.querySelectorAll(".tab-buttons button")
      .forEach(btn => btn.classList.remove("active"));

    // Hide all sections
    document.querySelectorAll(".tab-content")
      .forEach(section => section.classList.remove("active"));

    // Activate selected button
    button.classList.add("active");

    // Display selected section
    document.getElementById(button.dataset.tab)
      .classList.add("active");

  });
});
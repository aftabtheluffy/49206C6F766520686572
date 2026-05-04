function checkPassword() {
  const pass = document.getElementById("password").value;

  if (pass === "home") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    alert("Wrong password");
  }
}

function searchText() {
  const input = document.getElementById("searchInput").value.toLowerCase();

  if (input === "the moon is beautiful") {
    window.open("eyes.html", "_blank"); // OPEN NEW TAB
  }
}
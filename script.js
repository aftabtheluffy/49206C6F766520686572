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
    document.getElementById("resultImg").style.display = "block";
  } else {
    document.getElementById("resultImg").style.display = "none";
  }
}
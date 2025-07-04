
const scriptURL = "https://script.google.com/macros/s/AKfycbyd1bxvPrwqZVeANqJ95he47RfuAck420LTQ0YOsBiJDvISLnXU-emPX9HbxLhGOPou/exec";

document.getElementById("loginForm")?.addEventListener("submit", async function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const formData = new URLSearchParams();
  formData.append("action", "login");
  formData.append("username", username);
  formData.append("password", password);

  const res = await fetch(scriptURL, {
    method: "POST",
    body: formData
  });

  const result = await res.json();
  if (result.success) {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("role", result.role);
    window.location.href = role === "Admin" ? "admin.html" : "checker.html";
  } else {
    document.getElementById("loginMessage").innerText = "Login gagal: " + result.message;
  }
});

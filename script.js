function validateForm() {
  let valid = true;
  const uname = document.getElementById("uname").value;
  const pass = document.getElementById("pass").value;
  const unameError = document.getElementById("unameError");
  const passError = document.getElementById("passError");
  const errorDiv = document.getElementById("error");

  
  unameError.textContent = "";
  passError.textContent = "";
  errorDiv.textContent = "";
  errorDiv.style.display = "none";

  if (uname.trim() === "") {
      unameError.textContent = "Username is required";
      valid = false;
  }

  
  if (pass.trim() === "") {
      passError.textContent = "Password is required";
      valid = false;
  }

  
  if (valid && uname !== pass) {
      errorDiv.textContent = "Invalid username or password. Password must match the username.";
      errorDiv.style.display = "block";
      valid = false;
  }


  if (valid) {
      alert("Login Successful!");
  }

  return valid;
}

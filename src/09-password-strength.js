/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  var len = 0;
  var upperCase = 0;
  var LowerCase = 0;
  var num = 0;
  var specialChar = 0;

  function hasUpperCase(pass) {
    return pass !== pass.toLowerCase();
  }
  function hasLowerCase(pass) {
    return pass !== pass.toUpperCase();
  }
  function hasNumber(pass) {
    // COPY PASTE//
    var isnum = /\d/.test(pass)
    return isnum;
  }
  function hasSpecialChar(pass) {
    //CPY PASTTTTTTE//
    var isSpec = /[^a-zA-Z0-9]/.test(pass)
    return isSpec;
  }

  if(typeof(password)!== "string") return "weak"
  if (password.length >= 8) { len = 1 }
  if (hasUpperCase(password)) { upperCase = 1 }
  if (hasLowerCase(password)) { LowerCase = 1 }
  if (hasNumber(password)) { num = 1 }
  if (hasSpecialChar(password)) { specialChar = 1 }


  const totalScore = len + upperCase + LowerCase + num + specialChar;

  if (totalScore <= 1) return "weak"
  else if (totalScore < 4) return "medium"
  else if (totalScore == 4) return "strong"
  else return "very strong"



}

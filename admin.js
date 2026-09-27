const USER_HASH = "d97f08c796a29a9358959402f19a48d01b74f0ab31990b308fbba2aca3bd7d47";
const PASS_HASH = "052e31b3b5739bb7a1b1cc259d353c00e8a7b16189945e7bf2c00bcd17efebc2";
const SESSION_KEY = "rrtourism_admin_session";
const SESSION_MS = 8 * 60 * 60 * 1000;

const loginView = document.getElementById("loginView");
const dashboardView = document.getElementById("dashboardView");
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("adminUsername");
const passwordInput = document.getElementById("adminPassword");
const loginMessage = document.getElementById("loginMessage");
const sectionTitle = document.getElementById("sectionTitle");
const sidebar = document.querySelector(".sidebar");

async function hashText(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, "0")).join("");
}

function readSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    if (!data || Date.now() > data.expiresAt) {
      sessionStorage.removeItem(SESSION_KEY);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

function showDashboard() {
  loginView.classList.add("hidden");
  dashboardView.classList.remove("hidden");
}

function showLogin() {
  dashboardView.classList.add("hidden");
  loginView.classList.remove("hidden");
  passwordInput.value = "";
  usernameInput.focus();
}

function logout() {
  sessionStorage.removeItem(SESSION_KEY);
  showLogin();
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginMessage.textContent = "Checking credentials…";
  const [userHash, passHash] = await Promise.all([
    hashText(usernameInput.value.trim().toLowerCase()),
    hashText(passwordInput.value)
  ]);
  if (userHash === USER_HASH && passHash === PASS_HASH) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({expiresAt: Date.now() + SESSION_MS}));
    loginMessage.textContent = "";
    showDashboard();
  } else {
    loginMessage.textContent = "Incorrect username or password.";
    passwordInput.select();
  }
});

document.getElementById("togglePassword").addEventListener("click", (event) => {
  const hidden = passwordInput.type === "password";
  passwordInput.type = hidden ? "text" : "password";
  event.currentTarget.textContent = hidden ? "Hide" : "Show";
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    const section = button.dataset.section;
    document.querySelectorAll(".nav-item").forEach(item => item.classList.toggle("active", item === button));
    document.querySelectorAll(".panel-section").forEach(panel => panel.classList.toggle("active", panel.dataset.panel === section));
    const labels = {overview:"Dashboard Overview",website:"Website Controls",content:"Content Management",enquiries:"Customer Enquiries",account:"Admin Account"};
    sectionTitle.textContent = labels[section] || "RR Tourism Admin";
    sidebar.classList.remove("open");
  });
});

document.getElementById("logoutBtn").addEventListener("click", logout);
document.getElementById("logoutBtnAccount").addEventListener("click", logout);
document.getElementById("mobileMenu").addEventListener("click", () => sidebar.classList.toggle("open"));

document.addEventListener("click", (event) => {
  if (window.innerWidth <= 760 && sidebar.classList.contains("open") && !sidebar.contains(event.target) && event.target.id !== "mobileMenu") {
    sidebar.classList.remove("open");
  }
});

if (readSession()) showDashboard(); else showLogin();
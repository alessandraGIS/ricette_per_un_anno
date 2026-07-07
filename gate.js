(function () {
  "use strict";
  var STORAGE_KEY = "ricette_gate_ok";
  var PASSWORD_HASH = "fff6bd7971d2d613a0ca4ce0b9857eecc5c60fb310a7b7c2cb5e73a87d7b20bb";

  if (localStorage.getItem(STORAGE_KEY) === "1") return;

  document.write(
    '<style id="gate-style">html{visibility:hidden !important}</style>'
  );

  function sha256Hex(text) {
    var data = new TextEncoder().encode(text);
    return crypto.subtle.digest("SHA-256", data).then(function (buf) {
      var bytes = Array.from(new Uint8Array(buf));
      return bytes.map(function (b) { return b.toString(16).padStart(2, "0"); }).join("");
    });
  }

  function showGate() {
    var style = document.getElementById("gate-style");
    if (style) style.remove();
    document.documentElement.style.visibility = "visible";

    var overlay = document.createElement("div");
    overlay.style.cssText =
      "position:fixed;inset:0;z-index:2147483647;background:#EFE3CB;" +
      "display:flex;align-items:center;justify-content:center;" +
      "font-family:Georgia,serif;color:#3A2C22;";
    overlay.innerHTML =
      '<form id="gate-form" style="background:#FBF4E6;padding:40px 36px;border-radius:8px;' +
      'box-shadow:0 20px 60px rgba(58,44,34,.25);text-align:center;min-width:280px;">' +
      '<div style="font-size:18px;margin-bottom:16px;">Inserisci la password</div>' +
      '<input id="gate-input" type="password" autocomplete="off" style="width:100%;padding:10px 12px;' +
      'font-size:16px;border:1px solid #C9B79A;border-radius:4px;box-sizing:border-box;margin-bottom:12px;" />' +
      '<div id="gate-error" style="color:#B00020;font-size:13px;min-height:18px;margin-bottom:8px;"></div>' +
      '<button type="submit" style="background:#BE5A34;color:#fff;border:none;padding:10px 22px;' +
      'border-radius:4px;font-size:15px;cursor:pointer;">Entra</button>' +
      "</form>";
    document.body.appendChild(overlay);

    var input = document.getElementById("gate-input");
    input.focus();

    document.getElementById("gate-form").addEventListener("submit", function (e) {
      e.preventDefault();
      sha256Hex(input.value).then(function (hash) {
        if (hash === PASSWORD_HASH) {
          localStorage.setItem(STORAGE_KEY, "1");
          overlay.remove();
        } else {
          document.getElementById("gate-error").textContent = "Password errata.";
          input.value = "";
          input.focus();
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", showGate);
})();

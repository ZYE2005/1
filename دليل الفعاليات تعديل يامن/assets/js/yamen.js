const sentInfo = document.querySelector(".sent");

sentInfo.addEventListener("click", function (event) {
  event.preventDefault();

  const senderInfo = {
    name: document.querySelector(".name").value.trim(),
    nickName: document.querySelector(".nickName").value.trim(),
    phoneNumber: document.querySelector(".phoneNumber").value.trim(),
    email: document.querySelector(".info-input-email").value.trim(),
    note: document.querySelector(".note").value,
  };

  const errors = checkInfo(senderInfo);

  if (errors.length > 0) {
    showAlert(errors, "danger");
    return;
  }

  showAlert(["تم إدخال المعلومات بشكل صحيح."], "success");
});

function checkInfo(senderInfo) {
  const errors = [];
  const namePattern =
    /^[A-Za-z\p{Script=Arabic}]+(?:\s+[A-Za-z\p{Script=Arabic}]+)*$/u;
  const phonePattern = /^\+963\d{9}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!namePattern.test(senderInfo.name)) {
    errors.push("الاسم الأول يجب أن يحتوي على أحرف عربية أو إنجليزية فقط.");
  }

  if (!namePattern.test(senderInfo.nickName)) {
    errors.push("الاسم الثاني يجب أن يحتوي على أحرف عربية أو إنجليزية فقط.");
  }

  if (!phonePattern.test(senderInfo.phoneNumber)) {
    errors.push("رقم الهاتف يجب أن يبدأ بـ +963 ويتبعه 9 أرقام فقط.");
  }

  if (!emailPattern.test(senderInfo.email)) {
    errors.push("البريد الإلكتروني غير صحيح.");
  }

  if (senderInfo.note.length > 600 || senderInfo.note.length == 0) {
    errors.push("الملاحظات حقل مطلوب ويجب ألا تتجاوز 600 حرف");
  }

  return errors;
}

function showAlert(messages, type) {
  const alert = document.createElement("div");
  alert.className = `form-alert alert alert-${type} alert-dismissible fade show position-fixed top-0 end-0 m-3 shadow`;
  alert.setAttribute("role", "alert");
  alert.style.zIndex = "2000";
  alert.style.minWidth = "min(320px, calc(100vw - 2rem))";
  alert.style.textAlign = "right";

  const title = document.createElement("p");
  title.textContent =
    type === "success" ? "تم بنجاح" : "يرجى تصحيح البيانات التالية:";
  alert.appendChild(title);

  const list = document.createElement("ul");
  list.className = "mb-0 mt-2";
  messages.forEach((message) => {
    const item = document.createElement("li");
    item.textContent = message;
    list.appendChild(item);
  });
  alert.appendChild(list);

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "btn-close";
  closeButton.addEventListener("click", () => alert.remove());
  alert.appendChild(closeButton);

  document.body.appendChild(alert);
  setTimeout(() => alert.remove(), 6000);
}

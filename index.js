function runCode() {
  console.log("hello World");
}

function setupTextArea() {
  const textArea = document.querySelector("textarea");
//   textArea.addEventListener("dragstart", function (e) {
//     console.log("started");
//   });

  textArea.addEventListener("drag", function (e) { 
    if (e.clientX !== 0) {
      textArea.style.left = `${e.clientX}px`;
      textArea.style.top = `${e.clientY}px`;
    }
  });
  textArea.addEventListener("blur",function (e) {
    console.log(e.target.value);
    e.target.value = '';
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const ogLog = console.log,
    main = document.querySelector("main");

  console.log = function (x) {
    const div = document.createElement("pre");
    div.innerHTML = x;
    main.appendChild(div);
    ogLog(x);
  };
  setupTextArea();
});
document.addEventListener("DOMContentLoaded", runCode);

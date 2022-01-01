const geiger = `  
 ____ _____ ___ ____ _____ ____
/ ___| ____|_  _/ ___| ____|  _ \\
| |  _|  _|  | | |  _|  _| | |_) |
| |_| | |___ | | |_| | |___|  _ <
 \\____|_____|___\\____|_____|_| \\_\\`;

mdc.textField.MDCTextField.attachTo(document.querySelector(".mdc-text-field"));
mdc.ripple.MDCRipple.attachTo(document.querySelector(".mdc-button"));

const ascii = document.getElementById("ascii");
ascii.innerText = geiger;
console.log(geiger);
console.log("-------ASCII ART FOR GEIGER-------");

const submitBtn = document.querySelector("#submit");
const input = document.querySelector(".mdc-text-field__input");
submitBtn.addEventListener("click", () => {
  const text = input.value;
  if (text === "") return;

  fetch(`/geiger/${text}`)
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      ascii.innerText = data;
    })
    .catch((error) => {
      console.log(error);
      alert("에러발생");
    });
});

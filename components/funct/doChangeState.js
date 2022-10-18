export function MyChangeState(input, target) {
  if (input && target) {
    const sle = document.querySelector(target);
    sle.addEventListener("change", (e) => {
      input(sle.value);
    });
  }
}

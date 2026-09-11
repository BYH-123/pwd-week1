const button = document.getElementById("changeButton");
const message = document.getElementById("message");

button.addEventListener("click", function() {
    message.textContent = "텍스트가 변경되었습니다!";
});
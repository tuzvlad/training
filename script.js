function sendRequest() {
    fetch("server-endpoint")
        .then(res => res.text())
        .then(data => {
            document.getElementById("response").innerHTML = "Відповідь сервера: " + data;
        })
        .catch(err => console.log("Помилка запиту:", err));
}

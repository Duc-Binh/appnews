function setToLocalStorage(value, data) {
    localStorage.setItem(value, JSON.stringify(data));
}

function getToLocalStorage(arrUser) {
    let arr = localStorage.getItem(arrUser);
    console.log(arr);
    if (arr) {
        return JSON.parse(arr);
    }
    return null;
}

var user = getToLocalStorage("user");

console.log(user);
if (user) {
    $(".home-content").empty();
    $(".home-content").append(`
    <p>Welcome ${user.firstname}</p>
    <div id="main-content">
      <p id="welcome-message"></p>
      <button type="button" class="btn btn-primary" id="btn-logout">Logout</button>
    </div>
  `);
}

$(".home-content").on("click", "#btn-logout", function() {
    localStorage.removeItem("user");
    location.reload();
});
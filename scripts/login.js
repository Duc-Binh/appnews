'use strict'
const username = $("#input-username");
const password = $("#input-password");
var listUsers = getToLocalStorage("listUsers");
console.log(listUsers);

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
};

function Alert(status, message) {
    Swal.fire({
        icon: status,
        title: message,
        showConfirmButton: false,
        timer: 1500,
    });
}

function setToLocalStorage(value, data) {
    localStorage.setItem(value, JSON.stringify(data));
}

function getToLocalStorage(arrUser) {
    let arr = localStorage.getItem(arrUser);
    console.log(arr);
    if (arr) {
        return JSON.parse(arr);
    }
    return [];
}

$("#form-login").validate({
    rules: {
        username: {
            required: true,
        },
        password: {
            required: true,
            minlength: 8,
        },
    },
    submitHandler: function() {
        handlerSubmitForm();
    },
});

function handlerSubmitForm() {
    // $(form).serialize(),
    let user = new User();
    user.username = username.val();
    user.password = password.val();
    console.log(user);
    const findUser = listUsers.find(function(data) {
        return user.username === data.username && user.password === data.password;
    });
    debugger
    if (!findUser) {
        Alert("error", "username or password is illegal");
    } else {
        setToLocalStorage("user", findUser);
        setTimeout(function() {
            window.location.href = "../index.html";
        }, 1000)
    }

};
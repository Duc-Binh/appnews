const firstname = $("#input-firstname");
const lastname = $("#input-lastname");
const username = $("#input-username");
const password = $("#input-password");
const passwordConfrm = $("#input-password-confirm");
var listUsers = getToLocalStorage("listUsers");

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


class User {
    constructor(firstname, lastname, username, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
    }
};

function handlerSubmitForm() {
    // $(form).serialize(),
    let user = new User();
    user.firstname = firstname.val();
    user.lastname = lastname.val();
    user.username = username.val();
    user.password = password.val();
    console.log(listUsers);
    let findUser = listUsers.find(function(item) {
        return item.username === user.username;
    });
    if (!findUser) {
        listUsers.push(user);
        setToLocalStorage("listUsers", listUsers);
        resetForm();
        Alert("success", "Register complete");
        setTimeout(function() {
            window.location.href = "./login.html";
        }, 2000);
    } else {
        Alert("error", "Username is exist");
    }
};

function resetForm() {
    firstname.val("");
    lastname.val("");
    username.val("");
    password.val("");
    passwordConfrm.val("");
};

$("#form-register").validate({
    rules: {
        firstname: {
            required: true,
        },
        lastname: {
            required: true,
        },
        username: {
            required: true,
        },
        password: {
            required: true,
            minlength: 8,
        },
        required: true,
        comfirmPassword: {
            required: true,
            equalTo: "#input-password",
        },
    },
    submitHandler: function() {
        handlerSubmitForm()
    },
});
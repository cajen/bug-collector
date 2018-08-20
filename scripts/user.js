window.onload = function () {
    var createUserBtn = document.getElementById('button-createUser-index');
    var signUpBtn = document.getElementById('label-index-create');

    // this.document.getElementById('div-create-index').onsubmit = function() {
    //     return false;
    // };

    createUserBtn.addEventListener('click', () => {
        let inputs = document.getElementById('div-create-index').getElementsByTagName('input');

        var firstName = inputs[0].value.toLowerCase();
        var lastName = inputs[1].value.toLocaleLowerCase();
        var userEmail = inputs[2].value.toLocaleLowerCase();
        var userPassword = inputs[3].value;

        if (firstName == '' || lastName == '') {
            this.alert('Please provide your full name.');
        }
        else if (userEmail == '' || validateEmail(userEmail) == false) {
            this.alert('Email address empty or invalid.');
        }
        else if (userPassword.length < 6) {
            this.alert('password must be 6 or more characters in length.');
        }
        else {
            let user = {
                "firstName": firstName,
                "lastName": lastName,
                "email": userEmail,
                "password": userPassword
            }

            let uURL = formatURLforItemByField('users', 'email', userEmail);

            readCRUD(uURL).then(data => {
                if (!Array.isArray(data) || !data.length) {
                    console.log(data);
                    createUser(user);
                }
                else {
                    alert("A user with that email address already exists")
                    console.log(data);
                }
            }).catch(function (e) {
                console.log(e);
            });
        }
    });

    signUpBtn.addEventListener('click', () => {
        document.getElementById('div-create-index').setAttribute('style', 'visibility : visible');
    });
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

function checkUserExist(email) {
    let uURL = formatURLforItemByField('users', 'email', email);
    
    readCRUD(uURL).then(data => {
        if (!Array.isArray(data) || !data.length) {
            console.log(data);
        }
        else {
            alert("A user with that email address already exists")
            console.log(data);
        }
    }).catch(function(e){
        console.log(e);
    });
};
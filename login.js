function login(){
    let username=document.getElementById('uname').value
    console.log(username);
    localStorage.setItem('USERNAME',username)

    window.location='./employee.html'
}

// to logout
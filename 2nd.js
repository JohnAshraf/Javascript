var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send("");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr);
        console.log(JSON.parse(xhr.responseText))
        var recievedata = JSON.parse(xhr.responseText)
        //document.querySelector(".data").innerHTML = "<div>" + xhr.responseText
        for (var i = 0; i < recievedata.length; i++) {
            var emaildata = document.createElement("div")
            emaildata.innerText = recievedata[i].email
            console.log(emaildata)
            document.querySelector(".data").appendChild(emaildata)
        }
    } else {
        console.log("error")
    }
}
xhr.close()
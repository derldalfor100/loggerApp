function connect() {
    let dataBody = JSON.stringify({ name: "david" });
    fetch('http://localhost:3000/', {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: dataBody,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(data => console.log('The data is:', data))
        .catch(err => console.error('The error:', err))
}

function sendMessage() {
    let name = document.getElementById('name').value;
    let selector = document.getElementById('selector');
    let selected = selector.options[selector.selectedIndex].value;
    let message = document.getElementById('message').value;
    if(selected === 'verbose' || selected === 'fatal') {

    }else {

    }
}

function addMessage(obj) {
    let item = localStorage.setItem('messages', JSON.stringify(obj));
}

function getMessages() {
    let item = localStorage.getItem('messages');
    if(item !== null){
        return JSON.parse(item);
    }
    return [];
}
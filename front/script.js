function connect(dataBody) {
    fetch('http://localhost:3000/', {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(dataBody),
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
    let theDate = document.getElementById('dateInput').value;
    let message = document.getElementById('message').value;
    let infoObj = {
        name: name,
        type: selected,
        message: message,
        date: theDate
    };
    console.log('before:', getMessages());
    if(selected === 'verbose' || selected === 'fatal') {
        addMessage(infoObj);
        console.log('after:', getMessages());
    }else {
        connect(infoObj);
    }
}

function addMessage(obj) {
    let item = getMessages();
    item.push(obj);
    localStorage.setItem('messages', JSON.stringify(item));
}

function getMessages() {
    let item = localStorage.getItem('messages');
    if(item !== null){
        return JSON.parse(item);
    }
    return [];
}
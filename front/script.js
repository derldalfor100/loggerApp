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
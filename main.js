async function checker() {
    document.getElementById("checker").disabled = true;
    var urls = ["https://www1.kayrips.cloud/0:/", "https://www2.kayrips.cloud/0:/", "https://www3.kayrips.cloud/0:/"]
    for (i = 0; i < urls.length; i++) {
        document.getElementById(`t${i+1}`).innerHTML = '<i class="fas fa-spinner fa-pulse"></i>'
        const response = await fetch(`https://kayrips-cors-proxy.herokuapp.com/${urls[i]}`);
        const text = await response.text();
        var title = text.match(/(?<=\<title>).*(?=\<\/title>)/);
        if (title == "KayRips") {
            document.getElementById(`t${i+1}`).innerHTML = '<i class="statusUp far fa-check-circle"></i>';
        } else {
            document.getElementById(`t${i+1}`).innerHTML = '<i class="statusDown far fa-times-circle"></i>';
        }
    }
    setTimeout(function() {
        document.getElementById("checker").disabled = false;
    }, 5000);
}
(async () => {
    const response1 = await fetch('https://kayrips-cors-proxy.herokuapp.com/');
    const text1 = await response1.text();

    const response2 = await fetch('https://kayrips-cors-proxy.herokuapp.com/');
    const text2 = await response2.text();

    const response3 = await fetch('https://kayrips-cors-proxy.herokuapp.com/');
    const text3 = await response3.text();

    var title1 = text1.match(/(?<=\<title>).*(?=\<\/title>)/);
    var title2 = text2.match(/(?<=\<title>).*(?=\<\/title>)/);
    var title3 = text3.match(/(?<=\<title>).*(?=\<\/title>)/);

    if (title1 == "KayRips") {
        document.getElementById("t1").innerHTML = '<i class="statusUp far fa-check-circle"></i>';
    } else {
        document.getElementById("t1").innerHTML = '<i class="statusDown far fa-times-circle"></i>';
    };

    if (title2 == "KayRips") {
        document.getElementById("t2").innerHTML = '<i class="statusUp far fa-check-circle"></i>';
    } else {
        document.getElementById("t2").innerHTML = '<i class="statusDown far fa-times-circle"></i>';
    };

    if (title3 == "KayRips") {
        document.getElementById("t3").innerHTML = '<i class="statusUp far fa-check-circle"></i>';
    } else {
        document.getElementById("t3").innerHTML = '<i class="statusDown far fa-times-circle"></i>';
    };

    function submitPoll(){
    document.getElementById("votebutton").disabled = true;
    setTimeout(function() {
        document.getElementById("votebutton").disabled = false;
    }, 5000);
    
    }

    document.getElementById("votebutton").addEventListener("click", submitPoll);
})()


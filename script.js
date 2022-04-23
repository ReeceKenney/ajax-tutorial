$("#submitButton").click(() => {

    const textValue = $("textarea").val();

    // $.get("https://catfact.ninja/fact", (result) => {
    //     const fact = result.fact;
    //     $("#contentContainer").append(`<span>${fact}</span>`);
    // });

    // const xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         // Success. Do something
    //     }
    // };
    // xhttp.open("GET", url, true);
    // xhttp.send();

    // const xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         const response = JSON.parse(this.response);
    //         const fact = response.fact;
    //         $("#contentContainer").append(`<span>${fact}</span>`);
    //     }
    // };
    // xhttp.open("GET", "https://catfact.ninja/fact", true);
    // xhttp.send();
    
    // $.post("https://api.funtranslations.com/translate/yoda.json", { text: textValue }, (result) => {
    //     const translated = result.contents.translated;
    //     $("#contentContainer").append(`<span>${translated}</span>`);

    //     // Clear textarea
    //     $("textarea").val('')
    // });

    // var xhttp = new XMLHttpRequest();
    // xhttp.open('POST', "https://api.funtranslations.com/translate/yoda.json", true);
    // xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xhttp.onreadystatechange = function() {
    //     if(this.readyState == 4 && this.status == 200) {
    //         const response = JSON.parse(this.response);
    //         console.log(response);
            
    //         const span = document.createElement("span");
    //         span.innerHTML = response.contents.translated;

    //         const container = document.getElementById("contentContainer");
    //         container.append(span);
    //     }
    // }
    // xhttp.send(`text=${textValue}`);
})
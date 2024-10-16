const toteForm = document.getElementById("add-tote-form");

function submit() {
    let name = document.getElementById("tote-name");
    let description = document.getElementById("tote-description");
    
    fetch(`https://rpl.usc.edu/packing/packingtotes`, {
        method: "POST",
        body: JSON.stringify({
            name: name.value,
            description: description.value
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
        alert("Tote has been added");
    location.href = "/packing/totes";

}

toteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submit();
    // handle submit
});
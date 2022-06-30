const jaredButton = document.getElementById('jb')

function jaredButtonClickHandler() {
    axios.get("http://localhost:4004/get-jareds-name")
    .then((response) => {
        alert(response.data)
    })
}

jaredButton.addEventListener("click", jaredButtonClickHandler)



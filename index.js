const jaredButton = document.getElementById('jb')

function jaredButtonClickHandler() {
    axios.get("/get-jareds-name")
    .then((response) => {
        alert(response.data)
    })
}

jaredButton.addEventListener("click", jaredButtonClickHandler)



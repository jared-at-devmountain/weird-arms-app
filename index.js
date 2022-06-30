const jaredButton = document.getElementById('jb')
const hunterInput = document.getElementById('must-put-hunter')
const hunterButton = document.getElementById('mphb')

function jaredButtonClickHandler() {
    axios.get("/get-jareds-name")
    .then((response) => {
        alert(response.data)
    })
}

function hunterButtonClickHandler() {
    body = {}
    body.input = hunterInput.value

    axios.post("/must-put-hunter", body)
    .then((response) => {
        alert(response.data)
    })
}

jaredButton.addEventListener("click", jaredButtonClickHandler)
hunterButton.addEventListener("click", hunterButtonClickHandler)



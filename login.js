const remember = document.getElementById("remember");
let counter = 0;
remember.addEventListener("click", accept);

function accept() {
    if (counter % 2 === 0) {
        this.style.background = "green";
        this.style.color = "white";
        counter++;
    } else {
        this.style.background = "#f5f5f5";
        this.style.color = "#5d5454";
        counter++;
    }
}

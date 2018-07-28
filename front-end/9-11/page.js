const crewsCont = document.getElementById('crews');
const crews = crewsCont.getElementsByClassName("crew");

for (let i = 0; i < crews.length; i++) {
    crews[i].addEventListener("mouseover", function () {
        this.setAttribute("active", "");
    });
    crews[i].addEventListener("mouseout", function () {
        this.removeAttribute("active")
    });
}
const containers = document.querySelectorAll(".container span")
console.log(containers);

containers.forEach(item =>{
    item.addEventListener("click", () => {
        item.classList.toggle("active")
    })

});


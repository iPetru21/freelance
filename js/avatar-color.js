document.onreadystatechange = () =>{
    if(document.readyState === "complete"){
        let colorObjects = document.querySelectorAll(".user-avatar__color");
        
        colorObjects.forEach(element => {
            let color = element.innerHTML;
            element.parentElement.firstElementChild.style = "background-color: " + color;
        });
    }
}

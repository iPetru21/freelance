// define targets html code
let targets = document.getElementsByClassName("html-move-target");
// define destination html element
let destinations = document.getElementsByClassName("html-move-dest");
// GO THROUGH EACH ELEMENT AND GET DATA ATRIBUTE

htmlMove();
window.addEventListener("resize", htmlMove);

function htmlMove(){

    [].forEach.call(targets, function(target){
        // GET MINIMAL RESOLUTION WHERE IS APPLIED MOVEMENT
        let maxWidth = target.getAttribute("data-html-move");
        // GET MOVEMENT'S ID
        let idTarget = target.getAttribute("data-html-id");

        [].forEach.call(destinations, function(destination){
            let idDest = destination.getAttribute("data-html-id");
            let windowWidth = window.innerWidth;
            let status = destination.hasChildNodes();
            if(idDest == idTarget && windowWidth <= maxWidth && status == false){
                while(target.firstChild){
                    let cloneChild = target.firstChild.cloneNode(true);
                    if(target.firstChild.nodeName != "#text"){
                        destination.append(cloneChild);
                    }                        
                    target.removeChild(target.firstChild);
                }
    
            }else if(idDest == idTarget && windowWidth > maxWidth && status == true){

                while(destination.firstChild){
                    let cloneChild = destination.firstChild.cloneNode(true);
                    if(destination.firstChild.nodeName != "#text"){
                        target.append(cloneChild);
                    }                        
                    destination.removeChild(destination.firstChild);
                }
            }
        });
    });
}
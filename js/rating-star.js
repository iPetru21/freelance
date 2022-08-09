document.onreadystatechange = () =>{
    if(document.readyState === "complete"){
        let rating = document.querySelectorAll(".rating-star");
        rating.forEach(element => {
            let value = element.getAttribute("data-rating");
            let childs = element.childNodes;

            childs.forEach(child => {
                if(child.nodeName == "SPAN" ){
                    if(value >= 1){
                        child.classList.add("rating-user__item_star");
                        value--;
                    }
                    else if(value == 0.5){
                        child.classList.add("rating-user__item_star-half");
                        value--;
                    }else{
                        child.classList.add("rating-user__item_star-empty");
                    }
                }
            })
        });
    }
}
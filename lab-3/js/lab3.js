const tablist = document.querySelectorAll("ul li a");

const panels = document.querySelectorAll('div[role="tabpanel"]')


tablist.forEach(tab => {
    tab.addEventListener("click", (event) => {
        // Grab the href attribute, which will be an id selector
        let href = event.target.getAttribute("href");
        let selected = document.querySelector(href);

        // Add selected class to the parents
        selected.hidden = false;
        event.target.parentElement.classList.add("selected");
        
        panels.forEach((panel) => {
            if (panel !== selected){
                panel.hidden = true;
            }
        })
        
        tablist.forEach((tab) => {
            if (tab.parentElement !== event.target.parentElement){
                tab.parentElement.classList.remove("selected");
                console.log("remove");
                console.log(event.target);
            }
        }
    
    );

        event.preventDefault();
    })
});

// Select the first tab by default
tablist[0].click();

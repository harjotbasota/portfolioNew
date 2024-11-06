const loadPages = async (pagename)=>{
    try{
        const fetchPage = await fetch(`./pages/${pagename}.html`);
        const data = await fetchPage.text();
        document.getElementById('page').innerHTML = data;
        const links = document.querySelectorAll('.navBarContainer a');
        console.log("links :",links);
        links.forEach(link => {
            link.classList.remove('activePage');
        });
        switch(pagename){
            case 'home': links[0].classList.add('activePage');break;
            case 'about': links[1].classList.add('activePage');break;
            case 'projects': links[2].classList.add('activePage');break;
            case 'certifications': links[3].classList.add('activePage');break;
            case 'skills': links[4].classList.add('activePage');break;
            case 'contact': links[5].classList.add('activePage');break;
        }
    }catch(err){
        console.log(err)
    }
}
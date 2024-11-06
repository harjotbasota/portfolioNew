const loadNavBar = async ()=>{
    try{
        const fetchNavBar = await fetch('./pages/navBar.html');
        const NavBar = await fetchNavBar.text();
        document.getElementById('navBar').innerHTML = NavBar;
    }catch(err){
        console.log('Error fetching the navbar :',err);
        console.log('')
    }
}

loadNavBar();
loadPages('home');
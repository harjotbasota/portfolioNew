const loadPages = async (pagename)=>{
    try{
        const fetchPage = await fetch(`./pages/${pagename}.html`);
        const page = await fetchPage.text();
        document.getElementById('page').innerHTML = page;
        console.log('load pages invoked')
    }catch(err){
        console.log(err)
    }
}
let viewsData = `Total Visits: Loading...`
const getViews = async ()=>{
       
    const fetchViews = await fetch('https://ie5dg187sf.execute-api.us-east-1.amazonaws.com/views',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await fetchViews.json();
    viewsData = `Total Visits: ${data.body}`
}

const displayViews = async ()=>{
    const viewcountelement = document.getElementById('viewCount');
    viewcountelement.innerText = viewsData;
}
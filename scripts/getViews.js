let viewsData = `Visitor Counter: Loading...`
const getViews = async () => {
    try {
        const fetchViews = await fetch('https://ie5dg187sf.execute-api.us-east-1.amazonaws.com/views', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await fetchViews.json();
        viewsData = `Visitor Counter: ${data.body}`
    } catch (err) {
        console.log(err);
        viewsData = ''
    }
}

const displayViews = async () => {
    const viewcountelement = document.getElementById('viewCount');
    viewcountelement.innerText = viewsData;
}
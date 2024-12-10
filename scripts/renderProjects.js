const renderProjects = async ()=>{
    try{
        const fetchProjectContainer = await fetch('./pages/projectContainer.html');
        const projectContainer = await fetchProjectContainer.text();
        const fetchProjectData = await fetch('./data/projectData.json');
        const projectData = await fetchProjectData.json();
        console.log(projectData);
        Object.values(projectData).map((project)=>{
            const projectContainerHTML = projectContainer
                    .replace('${name}', project.name)
                    .replace('${homePageImagePath}',project.homePageImagePath)
                    .replace('${archImagePath}',project.archImagePath)
                    .replace('${description}',project.description)
                    .replace('${liveLink}',project.liveLink)
                    .replace('${detailsLink}',project.detailsLink)
                    .replace('${gitRepo}',project.gitRepo)
            document.getElementById('projects').innerHTML += projectContainerHTML;
        })
        
        const disabledLinks = document.querySelectorAll('.projectContainer a[href="#"]');
        disabledLinks.forEach(link=>{
            link.style.pointerEvents = 'none'; 
            link.style.color = 'gray'; 
        })

        const currentActiveLink = document.querySelector('.projectContainer a[href="live"]');
        currentActiveLink.style.color = 'green';
        currentActiveLink.style.pointerEvents = 'none';
    }catch(err){
        console.log('error:',err);
    }
}
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
            document.getElementById('projects').innerHTML += projectContainerHTML;
        })
        
    }catch(err){
        console.log('error:',err);
    }
}
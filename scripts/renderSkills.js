const renderSkills = async ()=>{
    const fetchSkills = await fetch('./data/skillsData.json');
    const skillsData = await fetchSkills.json();
    const fetchSkillsContainer = await fetch('./pages/skillsContainer.html');
    const skillsContainer = await fetchSkillsContainer.text();
    Object.entries(skillsData).map((skillObject)=>{
        const sectionHeader = skillObject[0];
        let skillListHTML ="";
        Object.entries(skillObject[1]).map((skill)=>{
            skillListHTML += `<div class="skill">
                                <img src=${skill[1]} />   
                                ${skill[0]}             
                                </div>
                                `
        })
        let skillsHTML = skillsContainer
                                .replace('${skillsHeader}',sectionHeader)
                                .replace('${skillDiv}',skillListHTML);
        document.getElementById('skills').innerHTML += skillsHTML;
    })
}

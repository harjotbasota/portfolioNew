const renderSkills = async ()=>{
    const fetchSkills = await fetch('./data/skillsData.json');
    const skillsData = await fetchSkills.json();
    const fetchSkillsContainer = await fetch('./pages/skillsContainer.html');
    const skillsContainer = await fetchSkillsContainer.text();
    Object.entries(skillsData).map((skillObject)=>{
        const sectionHeader = skillObject[0];
        console.log("section header:",sectionHeader);
        Object.entries(skillObject[1]).map((skill)=>{
            console.log("skill Name:",skill[0]);
            console.log("skill image src: ", skill[1]);
        })
    })
}
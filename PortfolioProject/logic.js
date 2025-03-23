let homeHeight = 0;
let aboutHeight = 600;
let projectsHeight = 1200;
let contactHeight = 1800;

function MoveToHomeSection()
{
    window.scrollTo(0, homeHeight);
}

function MoveToAboutSection()
{
    window.scrollTo(0, aboutHeight);
}

function MoveToProjectsSection()
{
    window.scrollTo(0, projectsHeight);
}

function MoveToContactSection()
{
    window.scrollTo(0, contactHeight);
}
























const projects = 
[
    {
        name: "Teste 1",
        summary: "esse é o sumario do teste 1",
        images:
        [
            "Assets/IamanduImages/IamanduLogo423x423.png",
            "Assets/IamanduImages/EclipseBossFightGameplay753x423.png",
            "Assets/IamanduImages/EclipsePuzzleGameplay753x423.png",
            "Assets/IamanduImages/IamanduTeam423x423.png"
        ]
    },
    {
        name: "Teste 2",
        summary: "esse é o sumario do teste 2",
        images:
        [
            "Assets/Temp/TempAPortrait.png",
            "Assets/Temp/TempALandscape.png",
            "Assets/Temp/TempBLandscape.png",
            "Assets/Temp/TempBPortrait.png"
        ]
    }
]








var currentProjectsImageIndex = 0;
var projectCount = projects.length;

function SetImageIndex(newIndex)
{
    currentProjectsImageIndex = newIndex;
    UpdateProjectValues();
    console.log('New index: ',currentProjectsImageIndex);
}

function UpdateProjectValues(){
    const project = projects[currentProjectsImageIndex];
    document.querySelector('.Project-Name').textContent = project.name; 
    document.querySelector('.Project-Summary').textContent = project.summary;
    
    const images = document.querySelectorAll('.Project-Image');
    images.forEach((img, i) =>
    {
        img.src = project.images[i];
        img.alt = "Imagem ${i+1} do projeto ${project.name}"
    }
    )

    document.querySelectorAll('.Projects-Images-Selection-Button').forEach(indicator => {
        indicator.classList.toggle('Image-Selected', 
            parseInt(indicator.dataset.index) === currentProjectsImageIndex
        );
    });
}

function IncreaseImageIndex(){
    let newIndex = currentProjectsImageIndex + 1;
    if (newIndex >= projectCount){
        newIndex = 0;
    }
    SetImageIndex(newIndex);
}

function DecreaseImageIndex(){
    let newIndex = currentProjectsImageIndex - 1;
    if (newIndex < 0){
        newIndex = projectCount - 1;
    }
    SetImageIndex(newIndex);
}

document.querySelectorAll('.Projects-Images-Selection-Button').forEach(indicator => {
    indicator.addEventListener('click', () => {
        SetImageIndex(parseInt(indicator.dataset.index));
    });
});



window.onload = function() {
    SetImageIndex(0);
    setInterval(IncreaseImageIndex, 5000);
};
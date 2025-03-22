let homeHeight = 0;
let aboutHeight = 600;
let projectsHeight = 1200;
let contactHeight = 1800;

//Projects Images
var currentProjectsImageIndex = 0;
const projectsImagesCount = 2;

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

function SetImageIndex(newIndex)
{
    currentProjectsImageIndex = newIndex;
    //RenderImage();
    console.log('New index: ',currentProjectsImageIndex);
}

function RenderImage(){
    if (currentProjectsImageIndex == 0)
    {
        document.getElementById('First-Quad-Image').src = "Assets/Temp/TempAPortrait.png";
    }else{
        document.getElementById('First-Quad-Image').src = "Assets/IamanduImages/IamanduLogo423x423.png";
    }
}

function IncreaseImageIndex(){
    let newIndex = currentProjectsImageIndex + 1;
    if (newIndex >= projectsImagesCount){
        newIndex = 0;
    }
    SetImageIndex(newIndex);
}

function DecreaseImageIndex(){
    let newIndex = currentProjectsImageIndex - 1;
    if (newIndex < 0){
        newIndex = projectsImagesCount - 1;
    }
    SetImageIndex(newIndex);
}

window.onload = function() {
    setInterval(IncreaseImageIndex, 1000);
};
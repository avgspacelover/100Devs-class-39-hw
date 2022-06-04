const imageDiv = document.querySelector('#image-div');
const btn = document.getElementById('btn');

const image = document.createElement('img');
image.alt= "skateboard scenenries";


async function getLink(){
    const index= Math.floor(Math.random()*(10-0) + 0)
    const imageLink = await fetch(`dummyCode/${index}`);
    image.src = imageLink;
}

btn.addEventListener('click', ()=> {
    getLink();
})


imageDiv.appendChild(image);
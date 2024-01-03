
let images = ['./img01.jpeg', './img02.jpeg', './img03.jpeg', './img04.jpeg', './img05.jpeg', './img06.jpeg', './img07.jpeg', './img08.jpeg', './img09.jpeg'];

function loadGallery() {

    for (let i = 0; i < images.length; i++) {

        document.getElementById('gallery').innerHTML += `
        
        <div class="image" > 
            <img src="/img/${images[i]}" onclick="magnify('/img/${images[i]}')">
        </div>
        `
    }
}

function magnify(imgSrc) {

    document.getElementById('magnifiedImageContainer').classList.remove("d-none");
    document.getElementById('magnifiedImageContainer').classList.add("magnifiedImageContainer");
    document.getElementById('magnifiedImage').src = imgSrc;
    scroll(0,0);

}

function hideImage() {
    document.getElementById('magnifiedImageContainer').classList.remove("magnifiedImageContainer");
    document.getElementById('magnifiedImageContainer').classList.add("d-none");
}
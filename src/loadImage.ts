export async function loadImage(weather : string) {
    let key = "25864633-21e9a6f01f5026c4f1b7cac48"
    let imageLoader = await fetch(`https://pixabay.com/api/?key=${key}&q=${weather}+weather&image_type=photo`)
    let imageData = await imageLoader.json()
    
    return imageData.hits[0].largeImageURL
}
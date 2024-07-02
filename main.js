function shuffle(arr){
    let currentIndex = arr.length,randomIndex
    
    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex --
        [arr[currentIndex],arr[randomIndex]] = [
            arr[currentIndex],
            arr[currentIndex],
        ]
    }
    return arr
}

function spin(){
    wheel.play()
    const box = document.getElementById('box')
    const element = document.getElementById('mainbox')
    let selectItem = ''

    let ac = shuffle([1890,2250,2610])
    let camera = shuffle([1850,2210,2570])
    let zonk = shuffle([1770,2130,2490])
    let ps = shuffle([1810,2170,2530])
    let headset = shuffle([1750,2110,2470])
    let drone = shuffle([1630,1990,2350])
    let rog = shuffle([1570,1930,2290])

    let result = shuffle([
        ac[0],
        camera[0],
        zonk[0],
        ps[0],
        headset[0],
        drone[0],
        rog[0],
    ])


    if(ac.includes(result[0])) selectItem = "Air Conditioner"
    if(camera.includes(result[0])) selectItem = "Camera"
    if(zonk.includes(result[0])) selectItem = "💣"
    if(ps.includes(result[0])) selectItem = "Playstation5"
    if(headset.includes(result[0])) selectItem = "Headset"
    if(drone.includes(result[0])) selectItem = "Drone"
    if(rog.includes(result[0])) selectItem = "ASUS Rog"

    box.style.setProperty("transition","all ease 5s")
    box.style.transform = "rotate("+ result[0]+"deg)"
    element.classList.remove("animate")

    setInterval(() => {
        element.classList.add("animate")
    },5000);

    setTimeout(() => {
        const dragonFiles = [
            "./assets/dragon1.gif",
            "./assets/dragon2.gif",
            "./assets/dragon3.gif",
            "./assets/dragon4.gif",
            "./assets/dragon5.gif"
        ]
        const randomIndex = Math.floor(Math.random() * dragonFiles.length);
        const randomImageUrl = dragonFiles[randomIndex];
        
        // SweetAlert
        applause.play()
        Swal.fire({
            title: "Sweet!",
            html:'You Won ' + selectItem +" | "+"<a href='#'>Claim Now !</a>",
            imageUrl: randomImageUrl,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
    },5500);

    setTimeout(() => {
        box.style.setProperty("transition","initial")
        box.style.transform = "rotate(90deg)"
    }, 6000);
}
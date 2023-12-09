

async function getCapsule(capsule_id){
    const url = new URL("https://time.noahkaboa.workers.dev/")
    url.searchParams.set("capsule", capsule_id)

    const capsules = ["qdpeoh", "ptolrj", "ktaaio"]
    if (!capsules.includes(capsule_id)){
        alert("Error! Not a valid time capsule")
    }

    const capsule = await fetch(url).then(r => r.text())
    return JSON.parse(capsule)
}



const capsule_param = new URLSearchParams(window.location.search);

const capsuleObj = (capsule_param.has('capsule')) ? getCapsule(capsule_param.get('capsule')) : "Error: Wrong params"


const capsuleDate = capsuleObj.date
const capsuleCreation = capsuleObj.creation_date
const capsuleTitle = capsuleObj.title
const capsuleText = capsuleObj.text
const capsuleImg = capsuleObj.img_link

let capsuleUnlocked = false

var countdown = setInterval(function() {
    let now = new Date().getTime();
    let distance = capsuleDate - now;

    capsuleUnlocked = (distance > 0 ) ? false : true

    if (!capsuleUnlocked){
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    } else {
        clearInterval(countdown)
        //edit and unlock

        

    }

}, 1000)

console.log(getCapsule("ktaaio"))
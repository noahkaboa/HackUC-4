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
async function main(){

    
    
    
    const capsule_param = new URLSearchParams(window.location.search);
    
    const capsuleObj = (capsule_param.has('capsule')) ? await getCapsule(capsule_param.get('capsule')) : "Error: Wrong params"

    console.log(capsuleObj)
    const capsuleDate = new Date(capsuleObj.date).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: 'EST',
    })
    const capsuleCreation = new Date(capsuleObj.creation_date).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: 'EST',
    }
    )
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

            console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s")
        } else {
            clearInterval(countdown)
            console.log("All done")
            //edit and unlock   
            const htmlTitle = document.getElementById("capsuleTitle")
            const creationText = document.getElementById("capsuleCreationDate")
            const htmlText = document.getElementsByClassName("capsuleText")[0]

            let elem = document.createElement("img")
            document.getElementsByClassName("capsuleImage")[0].appendChild(elem)
            
            
            htmlTitle.innerHTML = capsuleTitle
            creationText.innerHTML = capsuleCreation
            htmlText.innerHTML = capsuleText
            elem.src = capsuleImg
        }
    
    }, 1000)


}

main()
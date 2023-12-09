// "qdpeoh" : {
//     "title": "A letter to senior me",
//     "text": "Hello future me. I'm currently writing this letter as a freshman. I'm so nervous for high school! I'm leaving all my middle school friends behind, and I don't know anyone here at AIT! I hope you are doing well as a sophomore. ",
//     "img_link": "https://clipart.info/images/ccovers/1516250282red-heart-emoji.png",
//     "date": new Date(2021, 9, 8, 19, 15)
//   },
//   "ptolrj" : {
//     "title": "Hello to the judges",
//     "text": "Hello judges. If this has worked correctly, you will be reading this at 7:15 tonight. ",
//     "img_link": "https://th.bing.com/th/id/OIP.gY0EtARlSLAtWAZ63k82dAHaFj?rs=1&pid=ImgDetMain",
//     "date": new Date(2023, 12, 9, 19, 15)
//   },
//   "ktaaio" : {
//     "title": "Ten Year Reunion",
//     "text": "It's been ten years since we've graduated. Noone will see this anyway",
//     "img_link": "https://www.pinclipart.com/picdir/big/116-1169222_crying-emoji-png-clipart-face-with-tears-of.png",
//     "date": new Date(2033, 12, 7)
//   }

async function getCapsule(capsule_id){
    const url = new URL("https://time.noahkaboa.workers.dev/")
    url.searchParams.set("capsule", capsule_id)
    
    const capsule = await fetch(url).then(r => r.text())
    return JSON.parse(capsule)
}

getCapsule("qdpeoh")
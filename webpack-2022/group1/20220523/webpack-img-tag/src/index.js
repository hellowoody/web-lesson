// import "@/css/common.css"
import img01 from "@/img/1.jpeg"
import img02 from "@/img/2.png"
import img03 from "@/img/3.gif"

const arr = [img01,img02,img03]
for(let i = 0 ; i<3 ; i++){
    const img = document.createElement("img")
    img.src = arr[i]
    document.body.appendChild(img)
}
// for(let i = 1 ; i<=3 ; i++){
//     const img = document.createElement("img")
//     switch (i) {
//         case 1:
//             img.src = img01
//             break;
//         case 2:
//             img.src = img02
//             break;
//         default:
//             img.src = img03
//             break;
//     }
    
//     document.body.appendChild(img)
// }
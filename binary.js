const data = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] 
const NIM = prompt("Masukkan nama yang ingin dicari :")

const binarySearchNim = (target,data)=>{
    
    let start = 0
    let end = data.length - 1
    while(start<=end){
        //Kita cari dulu nilai mid dalam array 
        let mid = Math.floor((start+end)/2)
        console.log(mid)
        if(target ==  data[mid]) return alert(`NIM : ${target} kamu sudah terdaftar`)
        //jika target lebih kecil kita potong jangkauan dari akhir seacrh / end yang niai end = mid - 1
        if(target < data[mid]){
            end = mid - 1
        }
         //jika target lebih besar kita perluas jangkauan  seacrh / start yang niai startnya itu dimulai dari = mid - 1
        if(target > data[mid]){
            start = mid + 1
        }
    }
    return alert(`NIM : ${target} kamu belum terdaftar`)

}

binarySearchNim(NIM,data)

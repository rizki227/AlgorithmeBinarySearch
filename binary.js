const data = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] // search value 2
const name = prompt("Masukkan nama yang ingin dicari :")

const binarySearchName = (target,data)=>{
    
    let start = 0
    let end = data.length - 1
    while(start<=end){
        //Kita cari dulu nilai mid dalam array 
        let mid = Math.floor((start+end)/2)
        console.log(mid)
        if(target ==  data[mid]) return console.log(`Hi ${target}, ID kamu tersedia `)
        //jika target lebih kecil kita potong jangkauan dari akhir seacrh / end 
        if(target < data[mid]){
            end = mid - 1
        }
        if(target > data[mid]){
            start = mid + 1
        }
    }
    return console.log(`Maaf Id  ${target} tidak tersedia`)

}

binarySearchName(name,data)

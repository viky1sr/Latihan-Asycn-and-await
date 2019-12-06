const hitung = (angka1,angka2) => {
    let hasil = angka1 * angka2
    let result = `${ angka1} * ${angka2} = ${hasil}`
    return result;
}
const cb = () => {
    return "This callback"
}
console.log(hitung(2,3,cb));

let nilai = 5;
function kuardat(nilai, cknilai) {
    let hasil = nilai * nilai
    let error = null

    if (hasil === 0 ? 0 : hasil)
        error = 'Error'


}
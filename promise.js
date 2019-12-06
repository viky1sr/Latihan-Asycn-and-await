let kuardat = function(nilai,cknilai) {
    let hasil = nilai * nilai;
    let error = null;

    if (hasil === 0 ? 0 : hasil )
        error = 'error';
    cknilai(error, hasil)
};

const util = require('util');
const kPromise =util.promisify(kuardat);

let nilai = '2';

kPromise(nilai)
.then(hasil => console.log(hasil))
.catch(error => console.log(error));
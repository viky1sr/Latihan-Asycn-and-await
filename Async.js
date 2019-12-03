function doTimeOut() {
    console.log('Lelek Goreng');
    return new Promise((resolve) => {
        setTimeout(() =>{
            console.log('Ayam Goreng');
            resolve();
        },3000);
    })
}

async function run() {
    await doTimeOut();
    console.log("Bebek Goremg")
}

run();
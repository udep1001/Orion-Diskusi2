//Contoh buruk (duplikasi kode):
console.log("Halo, Orion!");
console.log("Halo, Orion!");
console.log("Halo, Orion!");

//Contoh baik (pakai fungsi):
function sapa(nama) {
    console.log(`Halo, ${nama}!`);
}

sapa("Orion");
sapa("Orion");
sapa("Orion");

function DestrucureObject() {
  const orang = {
    nama: "Dadang",
    umur: 20,
    alamat: "Jl. Kebon Jeruk",
    hobi: ["Membaca", "Menulis", "Menyanyi"],
  };

  const { nama, umur, hobi: [, hobikedua], } = orang; // Destructuring Object

  console.log(nama);
  console.log(umur);
  console.log(hobikedua);
}

export default DestrucureObject;

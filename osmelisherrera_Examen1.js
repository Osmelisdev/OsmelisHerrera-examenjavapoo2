var horasordinarias = 40;
var totalpagarhoranormal = 0;
var totalpagarhorasextra = 0;
var horasextras = 0;

function calcularsueldo(horastrabajadas) {

if (horastrabajadas > horasordinarias){
    horasextras = horastrabajadas - horasordinarias;
totalpagarhoranormal = horasordinarias * 265;
totalpagarhorasextra = horasextras * 350;
}
else{
    totalpagarhoranormal = horastrabajadas * 265;
}

    console.log("El total a pagar por horas laborables normal (40hrs) es de : " + totalpagarhoranormal);
    console.log("El total a pagar por horas Extra " + horasextras + " hrs es de : " + totalpagarhorasextra);

  }

  ///Calcular horas trabajadas

calcularsueldo(53);
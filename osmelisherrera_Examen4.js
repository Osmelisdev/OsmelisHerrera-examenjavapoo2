class  Persona {
    constructor(nombre, apellido, edad) {
       this.nombre = nombre;
       this.apellido = apellido;
       this.edad = edad;
     }
   }
   
   class Empleado extends Persona {
       constructor(tipo) {
           this.tipo = tipo;
       }
   }
   
   class  Nomina {
    
   }
   
   var trabajador1 = new Persona('Franklin', 'Montenegro', 31);
   var trabajador2 = new Persona('Osmelis', 'Herrera', 31);
   var trabajador3 = new Persona('Francelys', 'Montenegro', 19);
   var trabajadores = [trabajador1, trabajador2, trabajador3];
   
   function getDetalles()
   {
       console.log(trabajadores);
   }

class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName() {
        console.log(this.nombre)
    }

    showStats(){
        console.log(this.nombre, this.velocidad, this.salud)
    }

    drinkSake(){
        this.salud += 10
    }
}

    class Sensei extends Ninja{
        constructor(nombre, salud, sabiduria = 10){
            super(nombre, salud, 10, 10, sabiduria )
        }
    
        speakWisdom(){
            super.drinkSake()
            console.log("Mensaje de sabiduría")
            console.log(this.salud)
        }
} 


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();

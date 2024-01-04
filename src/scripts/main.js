class Heroes {
    constructor(name, age, carrer) {
        this.name = name;
        this.age = age;
        this.carrer = carrer
    }
    attack(){
        let attackName = ""
        if (this.carrer === "mago" ) {
            attackName + = "magia"
        } else if (this.carrer === "guerreiro"){
            attackName + = "espada"
        } else if (this.carrer === "monge"){
            attackName + = "artes marciais"
        } else if (this.carrer ==="ninja"){
            attackName + = "shuriken"
        } else {
            attackName + = "'ataque indisponivel'"
        }

        console.log(`O ${this.carrer} atacou usando ${attackName}!`)
    }
}

let heroi1 = new Heroes("Carlinhos", 45, "mago")
heroi1.attack()

let heroi2 = new Heroes("Kratos", 23, "guerreiro")
heroi2.attack()

let heroi3 = new Heroes("bunda", 989, "monge")
heroi3.attack()

let heroi4 = new Heroes("SamuraiX", 12, "ninja")
heroi4.attack()

let heroi5 = new Heroes("Pietro", 45, "stormtrooper")
heroi5.attack()
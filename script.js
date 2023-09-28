///////////////////////////////////////////////////////////////////////////////////////

class Person {
    constructor (fN, lN,iA) {
        this.firstName = fN;
        this.lastName = lN;
        this.isAlive = iA;
    }

    greet () {
        console.log("Hello this is Forrest Gump")
    }
}

///////////////////////////////////////////////////////////////////////////////////////

class Writer extends Person {
    constructor (fN, lN, iA, pseudonym) {
        super(fN, lN, iA);
        this.pseudonym = pseudonym;
    }

    signBook () {
        console.log(`${this.pseudonym} is my pseudonym, I hate the word pseudonym now`)
    }
}

///////////////////////////////////////////////////////////////////////////////////////

class Developer extends Person {
    constructor (fN, lN, iA, codename) {
        super(fN, lN, iA);
        this.codename = codename;
    }

    impress () {
        for (let i = 0; i <= 5; i++) {
            console.log((Math.round(Math.random(0,2))))
        }
        console.log(this.codename)
    }
}

///////////////////////////////////////////////////////////////////////////////////////

class Singer extends Person {
    constructor (fN, lN, iA, aN) {
        super(fN, lN, iA);
        this.artisticName = `Fancy ${aN}`;
    }

    melody () {
        console.log("Brescha Breascha, NumaNumaNejj, NumaNumaNumaNejj")
    }

    sing () {
        for (let i = 0; i < 3; i++) {
            this.melody()
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////

class JuniorDeveloper extends Developer {
    constructor (fN, lN, iA, codename, iS) {
        super(fN, lN, iA, codename);
        this.isStrugling = iS;
    }

    complain () {
        console.log(this.codename.toUpperCase())
    }

    workHard () {
        for (let i = 0; i < 10; i++) {
            console.log(`${codename} is working hard`)
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////

const Peter = new Person("Peter", "Jochen", true)

const Sara = new Person("Sara", "Hindenburg", false)

const Honk = new Writer("Honk", "Stiletto", true, "Stilone")

const MrRobot = new Developer("Samy", "Sarturi", false, "Mr.Robot")

const Rihanna = new Singer("Rihanna", "Montana", true, "Rihanna")

const Luca = new JuniorDeveloper("Luca", "Oliverio", true, "Khilaar", false,)

///////////////////////////////////////////////////////////////////////////////////////

console.log(Peter)
console.log(Sara)
Honk.signBook()
console.log(MrRobot)
MrRobot.impress()
console.log(Rihanna)
Rihanna.sing()
console.log(Luca)
Luca.complain()

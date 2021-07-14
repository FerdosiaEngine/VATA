# Limbajul de programare VATA

VATA este un mic limbaj de programare creat după modelul limbajului smallang, fiind
derivat din JavaScript. Dezvoltator: Klaus Bluseng.

## Caracteristici

* numere
* șiruri de caractere
* variabile
* funcții
* funcții lambda
* alte tipuri de date

## Exemplu de cod

Următorul exemplu de cod conține câteva caracteristici ale limbajului VATA:

```
print("Hello world")
print("15 + 6 =" add(15 6))

test = (subject) => {
    print(concat("Hello, " subject " !"))
}

doIt = () => {
    print("Hy!")
}

doIt()

test("John")

//Acesta este un comentariu.

fib = (n) =>
    if(eq(n 1)
        () => 1
        () =>
            if(eq(n 2)
                () => 1
                () =>
                    add(
                        fib(subtract(n 1))
                        fib(subtract(n 2))
                    )
            )
        )

print(fib(9))
```

## Precizări legate de structură

Acest limbaj nu utilizează următoarele două caractere ",", ";", deci nu le recunoaște.
Instrucțiunile repetitive nu pot fi utilizate în modul cunoscut anterior. Nu există
operatori matematici. Aceștia sunt înlocuiți de funcții cu diferite roluri prestabilite.
Limbajul VATA îți lasă posibilitatea de a crea propriile tale funcții și de a le atribui
diferite scopuri. Lista funcțiilor prestabilite:

```
//funcții matematice
add(), concat(), multiply(), subtract(), divide(), modulus(), sqrt(), pow(),

//alte funcții
print(), eq(), if(), or(), at(), repeat(), etc.
```

## Versiune și conținut folder VATA

Actuala versiune a limbajului de programare este trecută în denumirea folderului ce
conține filele necesare rulării. Pentru o funcționare corectă a limbajului, fișierele
ce se află în folderul VATA_modules nu pot fi modificate. În timpul utilizării comenzilor,
mai multe file necesare interpretării limbajului și afișării rezultatelor vor fi create.
Acestea sunt stocate automat în folderul VATA_ast_js, fapt pentru care eliminarea lui nu
este permisă. Totuși, toate filele din acesta pot fi șterse. 

## Mod de utilizare

Este necesară instalarea Node.js. Acesta este un mediu de execuție JavaScript, ce rulează
cod în afara unui browser web. nodejs.org/en/

După instalarea Node.js și descărcarea folderului VATA ce conține filele necesare rulării
este recomandată deschiderea panoului de comandă. În acest panou de comandă se introduce
calea spre folderul în care se află fișierele de execuție VATA. Exemplu:

```
cd C:\\...\\VATA\\VATA_modules
```

În acest loc vor fi executate toate comenzile introduse. Pentru a putea continua, parserul
trebuie generat/regenerat. Acest lucru va fi repetat de fiecare dată când sunt aduse
modificări în structura lexerului. Comanda este următoarea:

```
npm run X
```

Pentru a executa o filă de cod în acest limbaj, aceasta trebuie să aibă extensia ".vata".
Următoarea comandă se ocupă de rularea unei file numite EXP.vata, aflată în locația din
exteriorul folderului VATA_modules:

```
node run.js ../EXP.vata
```

Pentru a afișa rezultatul codului, este necesar ca fila să existe în locația specificată
și să fie scrisă conform regulilor limbajului VATA.

## Ferdosia Engine

VATA: https://github.com/FerdosiaEngine/VATA

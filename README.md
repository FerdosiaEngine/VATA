# Limbajul de programare VATA

VATA este un mic limbaj de programare creat după modelul limbajului smallang, fiind derivat
din JavaScript. Dezvoltator: Klaus Bluseng.

<div style="text-align:center">
![VATA 1.4](https://github.com/FerdosiaEngine/VATA/blob/main/VATA_1.4.3.png?raw=true)
</div>

## Caracteristici

* numere
* șiruri de caractere
* variabile
* funcții
* funcții lambda
* introducere valori
* alte tipuri de date

## Exemplu de cod

Următorul exemplu de cod conține câteva caracteristici ale limbajului VATA:

```
//Modalitate de afișare rezultate
print("Hello world")

//Metodă lambda de concatenare
test = (subject) => {
    print(concat("Hello, " subject ))
}

//Metodă lambda de afișare
doIt = () => {
    print("Hy!")
}

doIt()

test("John")

//Acesta este un comentariu.

//Șirul lui Fibonacci
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


//Introducerea unui număr sau a unui text
prompt = require("prompt-sync")()
a = prompt("Valoare introdusă (n): ")

//Funcția parseInt asigură intrarea ca fiind număr
n = parseInt(a 10)

//Operațiuni matematice cu numărul introdus
print("10 + n =" add(10 n))
print("10 - n =" subtract(10 n))
print("10 * n =" multiply(10 n))
print("10 / n =" divide(10 n))
print("10 % n =" modulus(10 n))
print("10 ^ n =" pow(10 n))

print("sqrt n =" sqrt(n))
print("10 = n" eq(10 n))


//Număr aleatoriu 1-9
print("Random = " rand())

//Comparare 2 numere predefinite
a = 2
b = 7

compare = () =>
    if(eq(a b)
        () => print("a = 2, b = 7 => a = b")
        () =>
            if(greater(a b)
                () => print("a = 2, b = 7 => a > b")
                () => print("a = 2, b = 7 => a < b")
            )
        )

compare()
```

## Precizări legate de structură

Acest limbaj nu utilizează următoarele două caractere ",", ";", deci nu le recunoaște.
Nu toate instrucțiunile repetitive pot fi utilizate în modul cunoscut anterior. Nu există
operatori matematici. Aceștia sunt înlocuiți de funcții cu diferite roluri prestabilite.
Limbajul VATA îți lasă posibilitatea de a crea propriile tale funcții și de a le atribui
diferite scopuri. Lista funcțiilor prestabilite:

```
//funcții matematice
add(), concat(), multiply(), subtract(), divide(), modulus(), sqrt(), pow(), eq(),
greater(), less(), rand(),

//alte funcții
print(), if(), or(), at(), repeat(), etc.
```

## Versiune și conținut folder VATA

Actuala versiune a limbajului de programare: VATA 1.4

Mărimea actualului folder VATA (incluzând toate filele necesare rulării) este de aproximativ
406 kb, iar varianta comprimată a acestuia are aproximativ 171 kb.

Pentru o funcționare corectă a limbajului, fișierele "package.json", "package-lock.json" și
cele ce se află în folderele VATA_modules nu pot fi modificate. În timpul utilizării comenzilor,
mai multe file necesare interpretării limbajului și afișării rezultatelor vor fi create și
stocate automat în folderul VATA_ast_js, fapt pentru care eliminarea acestuia nu este permisă.
Totuși, toate filele din acesta pot fi șterse. Filele README.txt conțin diferite atenționări
referitoare la fișiere și comenzi din diferite subfoldere.

## Mod de utilizare

Este necesară instalarea Node.js. Acesta este un mediu de execuție JavaScript, ce rulează
cod în afara unui browser web. https://nodejs.org/en/

După instalarea Node.js și descărcarea folderului VATA ce conține toate filele necesare
rulării este recomandată deschiderea panoului de comandă. În acest panou de comandă se
introduce calea spre folderul în care se află fișierele de execuție VATA. Exemplu:

```
cd C:\...\VATA_dependencies\VATA_modules
```

În acest loc vor fi executate toate comenzile introduse. Pentru a putea continua, parserul
trebuie generat/regenerat. Acest lucru va fi repetat de fiecare dată când sunt aduse
modificări în structura lexerului. (Modificările nu sunt necesare.) Comanda este următoarea:

```
npm run X
```

Pentru a executa o filă de cod în acest limbaj, aceasta trebuie să aibă extensia ".vata".
Următoarea comandă se ocupă de rularea unei file numite EXP.vata:

```
node run.js ../EXP.vata
```

Toate filele cu această extensie trebuie să se afle obligatoriu în folderul VATA_dependencies.
Pentru a afișa rezultatul codului, este necesar ca fila să existe și să fie scrisă conform
regulilor gramaticale ale limbajului VATA.

## ATENȚIONARE!

În cazul în care codul ce trebuie rulat conține solicitări de introducere a unor valori, după
executarea filei conform modului prezentat mai sus, consola nu va afișa informațiile așteptate.
Pentru afișare este necesară redeschiderea panoului de comandă și rularea următoarei comenzi
în acesta, după reintroducerea căii spre folderul în care se află fișierele de execuție:

```
node ../VATA_ast_js/EXP.js
```

Această problemă încă se află în proces de investigare. Klaus Bluseng.

## Ferdosia Engine

VATA 1.4: https://github.com/FerdosiaEngine/VATA

const nearley = require("nearley");
const grammar = require("./vata.js");
const fs = require("mz/fs");

async function main() {

    const filename = process.argv[2];
    if (!filename) {
        console.log("Fila .vata lipsește.");
        return;
    }

    const code = (await fs.readFile(filename)).toString();
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

    parser.feed(code);
    if (parser.results.length > 1) {
        console.log("Eroare: gramatică ambiguă detectată.");
        for (let i = 0; i < parser.results.length; i++) {
            const ast = parser.results[i];
//AICI AM REFĂCUT STEP 1
            const outputFilename1 = filename.replace("../", ".././VATA_ast_js/");
            const outputFilename = outputFilename1.replace(".vata", "-" + i + ".ast");
            await fs.writeFile(outputFilename, JSON.stringify(ast, null, "  "));
            console.log(`Fila ${outputFilename} creată.`);
        }
    } else if (parser.results.length == 1) {
        const ast = parser.results[0];
//AICI AM REFĂCUT STEP 1
        const outputFilename1 = filename.replace("../", ".././VATA_ast_js/");
        const outputFilename = outputFilename1.replace(".vata", ".ast");
        await fs.writeFile(outputFilename, JSON.stringify(ast, null, "  "));
        console.log(`Fila ${outputFilename} creată.`);

    } else {
        console.log("Eroare: nu a fost găsit parserul.");
    }

}

main().catch(err => console.log(err.stack));

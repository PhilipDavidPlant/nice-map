#!/usr/bin/env node

import { program } from "commander";
import ncp from "copy-paste";

const spaces = 2;

function longestString(strings) {
    return strings.reduce((a, b) => a.length > b.length ? a : b).length;
}

function tabs(n){
    return "".padEnd( (spaces * n), " ")
}

function pad(n){
    return "".padEnd(n, " ")
}

function marginFrt(i,xs){
    return pad((Math.ceil(xs[i].length/2)-1))
}

function marginBak(i,xs){
    return pad((Math.floor(xs[i].length/2)-1))
}


function nl(){
    return "\r\n"
}

program
    .version('0.0.1')
    .description('A CLI tool to generate a nice map function')
    .option('-xks, --xkeys <key>', 'The key to use in the map function')
    .option('-yks, --ykeys <key>', 'The key to use in the map function')
    .action((options) => {
        const ys = options.ykeys.split(',');
        const xs = options.xkeys.split(',');

        const longestStrX = longestString(xs);

        const niceMap =
        "function niceMap (key, role){" + nl() +
        tabs(1) + "const headers = { " + ys.map((y,index) => y + ":" + index).join(', ') + " }" + nl() +
        tabs(1) + "return {" + nl() +
        tabs(2) + "//" + pad(longestStrX) + " " + ys.map(x => x).join(' | ') + nl() +
        xs.map(x => tabs(2) + x + ": " + pad(longestStrX - x.length) + "[" + ys.map((_,i) => {return marginFrt(i,ys) + 1 +','+ marginBak(i,ys)}).join('   ') + "]," + nl()).join("") + nl() +
        tabs(1) + "}[key][headers[role]];" + nl() +
        "}";

        ncp.copy(niceMap, function () {
            console.log('copied to clipboard...');
        })

    });


program.parse(process.argv);
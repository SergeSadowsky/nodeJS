import readline from 'node:readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const write = str => process.stdout.write(str);
const writeln = str => write((str || '') + '\n');

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const botNumber = getRandomNumber(0,100);
writeln(botNumber)
writeln("Загадано число в диапазоне от 0 до 100")
let input;

while(true){
    input = await rl.question('Введите число: ');
    input = Number.parseInt(input.trim());
    if(Number.isNaN(input)){
        writeln("Неверное значение.")
        continue;
    }
    if(input > botNumber) writeln('Меньше!');
    if(input < botNumber) writeln('Больше!');
    if(input === botNumber){
        writeln(`Правильно! Отгадано число ${botNumber}.`);
        break;
    } 
}
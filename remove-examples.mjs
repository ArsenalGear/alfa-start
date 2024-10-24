import fs from 'node:fs';

fs.rmSync('./public', { recursive: true });
fs.rmSync('./src', { recursive: true });
fs.rmSync('./cypress', { recursive: true });
fs.cpSync('./template', '.', { recursive: true });
fs.rmSync('./template', { recursive: true });
fs.rmSync('./remove-examples.mjs', { recursive: true });

console.log('Успешно удалены примеры кода');
console.log('Дальше необходимо заменить в package.json название проекта и exposes');

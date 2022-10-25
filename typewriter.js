

const sentence = 'Hello my name is Corbin \n';
let time = 0;

for (const char of sentence){
  setTimeout(() => {
    process.stdout.write(char)
  }, time);
  time += 75
}

//time = 1750

setTimeout(() => {
  process.stdout.write('\n')
}, time + 100)





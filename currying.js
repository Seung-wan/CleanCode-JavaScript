const greeting = (message) => (name) => console.log(`${name}아 ${message}`);

const helloToName = greeting('nice to meet you');
helloToName('seungwan');

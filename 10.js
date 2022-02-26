//Currying

const greetingMessage = (name) => (greeting) =>
  `Hello ${name}! how are you? ${greeting}`;

console.log(greetingMessage('Pritam')('Welcome to neogcamp'));

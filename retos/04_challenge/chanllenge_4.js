/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
   const blocks = code.match(/\[.*?\]/g);
   let pinDigits = ''

   for (const block of blocks) {
      if (block === '[<]') {
         // Tomamos el último dígito del array donde estamos guardando los dígitos
         const lastDigit = pinDigits[pinDigits.length - 1];
         pinDigits += (lastDigit);
      } else {
         // Quitar los corchetes
         const content = block.slice(1, -1); // ejemplo: "1++"

         // Número inicial
         let digit = Number(content[0]); // primer carácter es el número

         // Las operaciones son el resto del string
         const operations = content.slice(1); // ejemplo: "++"

         // Aplicar operaciones en orden
         for (const op of operations) {
            if (op === '+') {
               digit = (digit + 1) % 10; // módulo 10 para que sea dígito
            } else if (op === '-') {
               digit = (digit + 9) % 10; // equivalente a restar 1 módulo 10
            }
         }

         pinDigits += (digit);
      }
   }
   if (pinDigits.length < 4) return null
   return pinDigits
}
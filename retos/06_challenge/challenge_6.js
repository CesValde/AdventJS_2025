/** 
 *  @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
   let decoratedTree = [];
   let counter = 0; // cuenta cuántos caracteres van para saber cuando poner el ornamento

   for (let i = 1; i <= height; i++) {
      let line = "";

      // espacios
      line += " ".repeat(height - i);

      // asteriscos / adornos
      for (let j = 0; j < 2 * i - 1; j++) {
         counter++;

         if (counter % frequency === 0) {
            line += ornament;
         } else {
            line += "*";
         }
      }

      decoratedTree.push(line);
   }

   // tronco (1 línea)
   decoratedTree.push(" ".repeat(height - 1) + "#");

   return decoratedTree.join("\n");
}

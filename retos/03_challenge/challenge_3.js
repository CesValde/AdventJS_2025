/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
   if (size < 2) return ""

   const top = symbol.repeat(size)
   const bottom = top

   const middle = symbol + " ".repeat(size - 2) + symbol
   const middleLines = Array(size - 2).fill(middle)

   return [top, ...middleLines, bottom].join("\n")
}

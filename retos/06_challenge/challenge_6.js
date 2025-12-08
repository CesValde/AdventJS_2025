/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
   const pairs = []

   for (let i = 0; i < gloves.length; i++) {
      const glove = gloves[i]
      const { color, hand } = glove

      // buscar el par opuesto
      const oppositeHand = hand === "L" ? "R" : "L"

      const matchIndex = gloves.findIndex(
         (g, idx) => idx !== i && g.color === color && g.hand === oppositeHand
      )

      if (matchIndex !== -1) {
         pairs.push(color)

         // eliminar ambos para no contarlos dos veces
         gloves.splice(matchIndex, 1)
         gloves.splice(i, 1)
         i-- // porque acabo de remover el actual
      }
   }

   return pairs
}
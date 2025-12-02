/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
   const giftsToFabric = []

   for (const gift of giftsToProduce) {
      if (gift.quantity > 0) {
         // push quantity, gift toy 'value'
         giftsToFabric.push(...Array(gift.quantity).fill(gift.toy))
      }
   }
   return giftsToFabric
}
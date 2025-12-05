/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
   function parseElfoDate(dateStr) {
      // Limpiamos el sufijo NP y cualquier espacio
      dateStr = dateStr.replace(' NP', '').trim();

      let [datePart, timePart] = dateStr.split('@');
      let [year, month, day] = datePart.split('*').map(Number);
      let [hour, minute, second] = timePart.split('|').map(Number);

      return new Date(Date.UTC(year, month - 1, day, hour, minute, second));
   }

   const fromDate = parseElfoDate(fromTime);
   const takeOffDate = parseElfoDate(takeOffTime);

   // Diferencia en segundos(redondeada hacia abajo)
   const diffSeconds = Math.floor((takeOffDate - fromDate) / 1000);
   return diffSeconds;
}
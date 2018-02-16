// Bikes are NOT allowed on:
// OUTbound Monday-Friday trains departing between 15:00 and 19:00 from their station of origin
// INbound Monday-Friday trains arriving between 6:30 and 9:30 at their final destination

// JavaScript code:
function cycleTrans(direction="", depart=0, arrive=0) {
   if( (direction == "out" && depart >= 15 && depart <= 19)
       ||
       (direction == "in" && arrive >= 6.5 && arrive <= 9.5)
     ) {
            return "No"  // Or should it be: cycleTransField = "No" }
   else {
	    return "Yes" // Or should it be: cycleTransField = "Yes" }
}
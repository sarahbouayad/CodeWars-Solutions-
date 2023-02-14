function mango(quantity, price){
    const offerQuantity = Math.floor(quantity / 3); // calculate how many 3-for-2 offers can be applied
    const normalQuantity = quantity % 3; // calculate the remaining quantity that is not part of any 3-for-2 offer
    const offerPrice = price * 2; // calculate the price for 3 mangoes based on the price per mango
  
    const totalCost = (offerQuantity * offerPrice) + (normalQuantity * price); // calculate the total cost
  
    return totalCost;
  }
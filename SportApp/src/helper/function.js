

const isIncluded = (state,id)=> {
   const result = !!state.selectedItems.find(item => item.id === id)
   return result;
}

const quantityCount = (state,id)=> {
   const index = state.selectedItems.findIndex(item => item.id === id)
   if (index === -1) {
      return false
   }
   else {
      return state.selectedItems[index].quantity;
   }
}

const sumItems = items => {
   const itemCounter = items.reduce((total,product) => total+product.quantity, 0);
   const total = items.reduce((total,product) => total + product.quantity * product.price, 0).toFixed(2);
   return {itemCounter, total}
}

export {isIncluded,quantityCount, sumItems};
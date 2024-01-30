
export const catalog = (plantsForHarvest) => {
    let forSaleHTML = ""
    for (const forSale of plantsForHarvest) {
        forSaleHTML += `<div class="for_Sale">${forSale.type}</div>`

        
    }

    return forSaleHTML

}
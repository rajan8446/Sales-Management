
export const calculateTotalSale = saleData => {
    let total = 0;
    saleData.forEach(element => {
        total += element.saleTotal;
    });
    return total;
};

export const calculateTotalCashSale = saleData => {
    let total = 0;
    saleData.forEach(element => {
        if (!element.creditCard)
            total += element.saleTotal;
    });
    return total;
};

export const calculateCreditCardSale = saleData => {
    let total = 0;
    saleData.forEach(element => {
        if (element.creditCard)
            total += element.saleTotal;
    });
    return total;
};

export const calculateBuyerWithMostSale = saleData => {
    let arr = [];
    saleData.sort((a, b) => b.saleTotal - a.saleTotal);
    for (let i in saleData[0]) {
        if (i !== "creditCard") {
            arr.push(i + ": " + saleData[0][i] +" ");
        }
    }
    return arr;
};

function checkCashRegister(price, cash, cid) {
    const cidObj = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
  
    let change = cash - price;
    let totalCid = cid.reduce((total, [, amount]) => total + amount, 0);
    totalCid = Math.round(totalCid * 100) / 100;
  
    if (change === totalCid) {
      return { status: "CLOSED", change: cid };
    } else if (totalCid < change) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      const changeArr = [];
      for (let i = cid.length - 1; i >= 0; i--) {
        const [denomination, amount] = cid[i];
        const denominationValue = cidObj[denomination];
  
        if (change >= denominationValue && amount > 0) {
          let amountToReturn = 0;
          while (change >= denominationValue && amountToReturn < amount) {
            amountToReturn += denominationValue;
            change -= denominationValue;
            change = Math.round(change * 100) / 100;
          }
          changeArr.push([denomination, amountToReturn]);
        }
      }
  
      if (change > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      } else {
        return { status: "OPEN", change: changeArr };
      }
    }
  }
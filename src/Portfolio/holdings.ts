export const GETHoldings = (request: any, response: any) => {
    response.status(200).jsonp({
        "status": "success",
        "data": [{
          "tradingsymbol": "ABHICAP",
          "exchange": "BSE",
          "isin": "INE516F01016",
          "quantity": 1,
          "t1_quantity": 1,
      
          "average_price": 94.75,
          "last_price": 93.75,
          "pnl": -100.0,
      
          "product": "CNC",
          "collateral_quantity": 0,
          "collateral_type": null
        }, {
          "tradingsymbol": "AXISBANK",
          "exchange": "NSE",
          "isin": "INE238A01034",
          "quantity": 1,
          "t1_quantity": 0,
      
          "average_price": 475.0,
          "last_price": 432.55,
          "pnl": -42.50,
      
          "product": "CNC",
          "collateral_quantity": 0,
          "collateral_type": null
        }]
      });
}
import React, { useState } from "react";
import "./index.css";

export default function StockData() {
  const [date, setDate] = useState("");
  const [data, setData] = useState();

  const fetchData = () => {
    fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`)
      .then(res => res.json())
      .then(res =>
        setData(res.data)
      );
  }


  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="5-January-2000" id="app-input" data-testid="app-input" value={date} onChange={(e) => setDate(e.target.value)} />
        <button className="" id="submit-button" data-testid="submit-button" onClick={fetchData}>Search</button>
      </section>
      {data && data.length !== 0 && <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
        <li className="py-10">Open: {data[0].open}</li>
        <li className="py-10">Close: {data[0].close}</li>
        <li className="py-10">High: {data[0].high}</li>
        <li className="py-10">Low: {data[0].low}</li>
      </ul>}
      {data && data.length === 0 && <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result">No Results Found</div>}




    </div>
  );
}

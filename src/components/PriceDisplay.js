import React from 'react';

const PriceDisplay = ({ data }) => {
    return (
        <div>
            <h2>{data.name}</h2>
            <p>Current Price: ${data.current_price}</p>
            <p>24-hour Change: {data.price_change_percentage_24h}%</p>
            <p>Market Cap: ${data.market_cap}</p>
            <p>Trading Volume: ${data.total_volume}</p>
        </div>
    );
};

export default PriceDisplay;

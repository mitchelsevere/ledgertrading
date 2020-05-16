import React from 'react';

function OptionsHeader() {
  return (
    <div className="options-header">
      <div className="section-heading">
        <h3>Trade Bitcoin</h3>
      </div>
      <div className="ask-bid-pricing">
        <span>9500</span>
        <span className="divider">/</span>
        <span>9700</span>
      </div>
      <div className="section-heading">
        <h3>Call Options</h3>
        <h3>Put Options</h3>
      </div>
    </div>
  );
}

export default OptionsHeader;

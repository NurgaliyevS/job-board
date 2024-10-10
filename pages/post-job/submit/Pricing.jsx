import React from "react";

function Pricing(props) {
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold text-center my-8">
        Select your Performance
      </h1>
      <div className="flex gap-4 justify-between">
        <div className="card bg-base-100 shadow-xl w-2/3">
          <div className="card-body"></div>
        </div>
        <div className="card bg-base-100 shadow-xl w-1/3">
          <div className="card-body"></div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

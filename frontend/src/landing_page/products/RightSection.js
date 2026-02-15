import React from 'react';

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore
}) {
  return (
    <div className="container mt-5 ">
      <div className="row align-items-center">

        {/* LEFT: TEXT */}
        <div className="col-6">
          <h2>{productName}</h2>
          <p>
            {productDescription}
          </p>

          <a href={learnMore} className="text-primary" style={{textDecoration:"none"}}>
            Learn more  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="col-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;

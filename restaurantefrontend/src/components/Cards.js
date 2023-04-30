import Card from "./Card";

function Cards({ data, type }) {
  
  return (
    <div className="container p-4">
      <div className="row align-items-center">
        {data.map(({ productId, productDescription, productImage, productName, productPrice, quantity }) => (
          <div className="col-md-4" key={productId}>
            <Card productId={productId} productName={productName} productImage={productImage} productDescription={productDescription} productPrice={productPrice} type={type} quantity={quantity} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
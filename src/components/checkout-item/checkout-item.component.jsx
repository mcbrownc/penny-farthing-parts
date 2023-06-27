

const CheckoutItem = ({ item }) => {
  return (
    <div>
      <img src={item.imageUrl} />
      <span>{item.name}</span>
      <span>{item.quantity}</span>
      <span>{item.price}</span>
    </div>
  )
};

export default CheckoutItem;
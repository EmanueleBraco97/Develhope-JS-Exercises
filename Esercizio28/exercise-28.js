const order = {};

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required'); //METODO POCO LEGGIBILE//
}

order?.customer?.address?.city //METODO CON OPTIONAL CHAINING//
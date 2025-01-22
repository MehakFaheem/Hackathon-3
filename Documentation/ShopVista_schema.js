// Product Schema
{
    name: 'product',
    fields: [
      {name: 'productId', type: 'string'}, 
      {name: 'name', type: 'string'},
      {name: 'price', type: 'decimal'},     
      {name: 'stock', type: 'integer'},     
      {name: 'categoryId', type: 'string'}, 
      {name: 'Tags', type: 'array'}, 
      {name: 'orderId', type: 'reference'}    
    ]
  }
  // Order Schema
  {
    name: 'order',
    fields: [
      {name: 'orderId', type: 'string'},
      {name: 'customerId', type: 'reference'}, 
      {name: 'shipmentId', type: 'reference'}, 
      {name: 'status', type: 'string'},
      {name: 'timestamp', type: 'date'}   
    ]
  }
  // Shipment Schema
  {
    name: 'shipment',
    fields: [
      {name: 'shipmentId', type: 'string'},
      {name: 'orderId', type: 'reference'},    
      {name: 'zoneId', type: 'string'},    
      {name: 'status', type: 'string'},
      {name: 'deliveryDate', type: 'date'}
    ]
  }
  
  // Customer Schema
  {
    name: 'customer',
    fields: [
      {name: 'customerId', type: 'string'},
      {name: 'fullName', type: 'string'},
      {name: 'ContactInfo', type: 'object'},      
      {name: 'address', type: 'object'},   
      {name: 'orderHistory', type: 'array'}
    ]
  }
  // Inventory Schema
  {
    name: 'inventory',
    fields: [
      {name: 'inventoryId', type: 'string'},
      {name: 'productId', type: 'reference'},  
      {name: 'quantity', type: 'integer'},  
      {name: 'warehouseLocation', type: 'string'}
    ]
  }
  // Categories Schema
  {
    name: 'categories',
    fields: [
      {name: 'categoryId', type: 'string'},
      {name: 'name', type: 'string'},
      {name: 'description', type: 'string'}
    ]
  }
  // Seller Schema
  {
    name: 'sellers',
    fields: [
      {name: 'sellerId', type: 'string'},
      {name: 'zoneId', type: 'reference'},     
      {name: 'companyName', type: 'string'},
      {name: 'phone', type: 'string'},
      {name: 'returnPolicy', type: 'object'}
    ]
  }
  // DeliveryZones Schema
  {
    name: 'deliveryZones',
    fields: [
      {name: 'zoneId', type: 'string'},
      {name: 'coverageArea', type: 'array'}, 
      {name: 'assignedDrivers', type: 'array'}
    ]
  }
  
  
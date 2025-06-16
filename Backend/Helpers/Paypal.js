const Paypal = require('paypal-rest-sdk');

Paypal.configure({
  mode : 'sandbox',
  client_id:'ASrUZ3vuPMRk9PTEN1kow2O2sjpqwkGMoz-K8whZ6dfz2mX5MJXij8QyLfm5_aTPN_Geo7tdwF3flKED',
  client_secret:'EKhvrz8tEWm4F4LghW-piNLjtxZY70LY8oR6l68SrovSUq3mpXgzHZgYjOcq9VS1e8jdjZ5FDLlDp_Gr'
});

module.exports = Paypal;
const Paypal = require('paypal-rest-sdk');

Paypal.configure({
  mode : 'sandbox',
  client_id:'Ad5htUtgyp2cb4DeIoULBt6wXRQ5ezzKFBO_XJpEm4mGPq4NSaC4FnRrUfiUjhfz0V_GjQagJJ7ItiKJ',
  client_secret:'EAAEVgciCC8en5Foym6xaTwxE_kqjYWDNkM0nnr6UqvDPwEePWSJMbB8_ddeUN2AnsdZaDx-5_t1ot59'
});

module.exports = Paypal;
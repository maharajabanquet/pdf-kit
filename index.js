const { createInvoice } = require("./createInvoice.js");

const invoice = {
  shipping: {
    name: "Naresh Kumar",
    address: "Kaagaz Manidr, Bank Road",
    city: "Raxaul",
    state: "Bihar",
    country: "INDIA",
    postal_code: 845305
  },
  items: [
    {
      item: "Marriage & Reception",
      description: "1 day Booking Of Complete Marriage haqll3",
      quantity: 1,
      amount: 6000
    },
    {
      item: "Dummy Item 2",
      description: "Dummy Descritption 2",
      quantity: 1,
      amount: 6000
    }
  ],
  subtotal: 8000,
  paid: 0,
  invoice_nr: 1234
};

createInvoice(invoice, "invoice.pdf");

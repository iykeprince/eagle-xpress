import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCm4VvjCImpuqBYS-uNcxRMB9URw25Zdwk",
  authDomain: "eaglexpress-a1c59.firebaseapp.com",
  databaseURL: "https://eaglexpress-a1c59.firebaseio.com",
  projectId: "eaglexpress-a1c59",
  storageBucket: "eaglexpress-a1c59.appspot.com",
  messagingSenderId: "652793474348",
  appId: "1:652793474348:web:99d3ea97c834cf8bcb1089",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  getShipment(shippingCode) {
    return this.db
      .collection(`/couriers`)
      .where("shipping_code", "==", shippingCode)
      .get();
  }

  getShipmentHistory(id) {
    return this.db.collection(`/couriers/${id}/histories`).get();
  }
}

export default new Firebase();

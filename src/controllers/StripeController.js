module.exports = {

  checkout: async (req, res) => {
    console.log('Start payment intent');
    // Set your secret key. Remember to switch to your live secret key in production!
    // See your keys here: https://dashboard.stripe.com/account/apikeys
    const amount = 50; //req.body.amount;
    const stripe = require('stripe')('sk_test_51GtsdCDZOgvDhP78Cs1cDfJaPLCGvBUU3653lXllsfpdtTfSdXcQtMaczl79l5wBPwd6gEca0nB6gDCHvcLhD670006q6E3yCd', { apiVersion: '' });
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // this is dangerous so we need to use an ID of each product and calculate the amount https://stripe.com/docs/payments/accept-a-payment
      currency: 'usd',
      metadata: { integration_check: 'accept_a_payment' },
    });
    console.log('paymentIntent: ', paymentIntent.client_secret);
    res.json({ 'client_secret': paymentIntent.client_secret });
  }


}
require('dotenv').config();
const stripe = require('stripe')(
  `pk_test_51M1YDOH8J7vimQRgyJynkr0ATu4gCW0mgmMNLUyGlxEu9hiGFdedFtiMQyV696RX7keATViGDaQpBLnMJ48FCPp100it58vTzO`
);

exports.handler = async function (event) {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card']
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent })
    };
  } catch (err) {
    console.log(err, 'erro do trycatch ');
    return {
      statusCode: 400,
      body: JSON.stringify({ err })
    };
  }
};

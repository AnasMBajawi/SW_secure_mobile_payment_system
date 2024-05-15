const productModel = require("../models/product");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


const postNewProduct = (req, res) => {
  const user = req.token.id;
  console.log(req.token);
  const { name, catagory, description, images, price } = req.body;

  const newProduct = new productModel({
    name,
    catagory,
    description,
    images,
    price,
    user,
  });

  newProduct
    .save()
    .then((product) => {
      res.status(201).json({
        success: true,
        massage: "the product for is posted",
        product: product,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        error: err,
      });
    });
};

const addItemIntoCart = (req, res) => {
  const user = req.token.id;
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({
      success: false,
      massage: "Name and/or price not provided",
      product: product,
    });
  }
  const newItem = { name, price };
  if (!req.session.cart) {
    req.session.cart = [];
  }
  req.session.cart.push(newItem);

  console.log(req.session);
  req.session.save((err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "server error",
        error: err,
      });
    } else {
      return res.status(200).json({
        success: true,
        massage: "the cart for is added",
      });
    }
  });
};

const cartCheckout = async (req, res) => {
  const { name, price } = req.body;
  try {
      if (!name || !price) {
          throw new Error("Name and/or price not provided in request body");
      }

      const session = await stripe.checkout.sessions.create({
          line_items: [
              {
                  price_data: {
                      currency: "usd",
                      product_data: {
                          name: name,
                      },
                      unit_amount: price * 100,
                  },
                  quantity: 1,
              },
          ],
          mode: "payment",
          success_url : "https://www.youtube.com/"
      });

      res.status(200).json({
          success: true,
          message: "Checkout payment session created",
          session: session,
      });
  } catch (error) {
      console.error("Error creating checkout session:", error);
      res.status(500).json({
          success: false,
          message: "Failed to create a session for the payment",
          error: error.message,
      });
  }
};


module.exports = {
  postNewProduct,
  addItemIntoCart,
  cartCheckout,
};

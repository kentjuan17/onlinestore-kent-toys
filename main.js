/*
 PRODUCT DATABASE
*/

// Constructor Function for Product
function Product(
  id,
  name,
  brand,
  category,
  price,
  qtyOnHand,
  maxOrderQuantity,
  shippingCost,
  ageMin,
  ageMax,
  image,
  reviews,
  description
) {
  this.id = id;
  this.name = name;
  this.brand = brand;
  this.category = category;
  this.price = price;
  this.qtyOnHand = qtyOnHand;
  this.maxOrderQuantity = maxOrderQuantity;
  this.shippingCost = shippingCost;
  this.ageMin = ageMin;
  this.ageMax = ageMax;
  this.image = image;
  this.reviews = reviews;
  this.description = description;

  // to return toy's suitable age;
  this.age = function () {
    return `Recommended for ${this.ageMin} - ${this.ageMax} years old.`;
  };
}

// Constructor function for shopping cart
function Cart(
  id,
  name,
  price,
  quantity,
  shippingCost,
  qtyOnHand,
  maxOrderQuantity
) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.shippingCost = shippingCost;
  this.qtyOnHand = qtyOnHand;
  this.maxOrderQuantity = maxOrderQuantity;

  this.maxQuantity = function () {
    if (this.qtyOnHand >= this.maxOrderQuantity) {
      return this.maxOrderQuantity;
    } else {
      return this.qtyOnHand;
    }
  };

  this.itemSubTotal = function () {
    let itemSubTotal = (this.quantity * this.price).toFixed(2);
    return (itemSubTotal = parseFloat(itemSubTotal));
  };

  this.subTotal = function () {
    return this.itemSubTotal() + this.shippingCost;
  };

  this.tax = function () {
    const HST = 0.13;
    let tax = (this.subTotal() * HST).toFixed(2);
    return (tax = parseFloat(tax));
  };

  this.total = function () {
    let total = (this.subTotal() + this.tax()).toFixed(2);
    return (total = parseFloat(total));
  };
}

/* GLOBAL VARIABLES */
const shoppingCart = []; // cart item object
const products = []; // store item object
let currencyRate = 1; // CAD rate

products.push(
  new Product(
    "ID-WB",
    "Wooden Blocks",
    "Imaginarium",
    "Educational Toys",
    19.97,
    15,
    5,
    3,
    4,
    7,
    "./img/products/educational/imaginariumDiscoveryBlocks.jpg",
    ["This is a good purchase!"],
    `This set of wooden building blocks includes 150 durable wooden blocks in 7 different colours and 7 shapes. This classic educational toy provides hours of hands on, screen free play time, introduces early math concepts, helps develop strong motor skills and even resilience as kids experiment with building, knocking blocks over, and building again. Our colourful building blocks are made of solid wood, light enough for little hands to handle, have rounded edges and a smooth painted finish that won't splinter with play.\n\nIncludes: 150 Wooden blocks\nReal wood`
  )
);
products.push(
  new Product(
    "IE-MTW",
    "Mega Train World",
    "Imaginarium",
    "Educational Toys",
    29.97,
    10,
    5,
    3,
    3,
    5,
    "./img/products/educational/imaginariumMegaTrainWorld.jpg",
    ["This is good for kids because it is for kids :)"],
    `Imaginarium Express Mega Train World - 80+ Pieces\n\nIncludes: 3 trains, crane, 5 cargo pieces, bridge, 4 buildings (3 pieces each), 7 figures, 7 signs, 13 trees and bushes, 3 animals and 30 track pieces.\nFeatures a working crane and cargo, over and under bridge.`
  )
);
products.push(
  new Product(
    "ID-CCDH",
    "Classic Country Doll House",
    "Imaginarium",
    "Educational Toys",
    119.95,
    20,
    5,
    4,
    3,
    8,
    "./img/products/educational/imaginariumClassicCountryDollHouse.jpg",
    ["My kids love this doll house."],
    `Massive wooden dolls house with beautifully illustrated panels and a fully detailed architectural design. Set over 3 storeys with a bedroom, bathroom, kitchen, living room and diner, this elegant doll house comes complete with 13 pieces of furniture and accessories. This wonderful house also includes a working elevator, a spiral staircase and a beautiful balcony terrace! Scaled for 12 inch (29cm) dolls this house is built to last from high quality materials with a safe and sturdy design. Inspires imagination, sharing and active play. Simple home assembly. Assembled dimensions 47 inches high x 33.1 inches wide x 14.8 inches deep (119.5cm high x 84cm wide x 37.5cm deep). Suitable for ages 3 - 8 years.`
  )
);
products.push(
  new Product(
    "V-MRUS",
    "Marble Rush Ultimate Set",
    "VTech",
    "Educational Toys",
    79.99,
    25,
    5,
    3.5,
    5,
    10,
    "./img/products/educational/vtechMarbleRushSet.jpg",
    ["A Good toy with BEST QUALITY. Nothing to ask for!"],
    `"Roll through thrilling stunts and exciting challenges with the Marble Rush™ Ultimate Set™. This 145-piece color-coded building set includes a spinning Ferris wheel, a swirling cone that plays a musical light show, thrilling ramps, fast tracks, extreme launchers and bases that all easily connect together. The easy-to-follow leveled guide includes three different builds from beginner to advanced, or create your own courses. When construction is complete, drop the 10 marbles into action and watch them race down ramps and swirl through funnels to the basket or ramp challenges. Compete with family and friends using the exciting launchers and non-stop Ferris wheel to keep the marbles in motion and bring them back to the beginning. Combine with other Marble Rush™ sets (sold separately) to create an extreme playset. Find more builds at vtechkids.com/marblerush. Recipient of the STEAM (Science, Technology, Engineering, Art and Math) Accreditation Stamp of Approval by the Toy Association™. Intended for ages 4+ years. Requires 2 AA and 3 AAA batteries. Batteries included for demo purposes only. New batteries recommended for regular use.\n\nThis building set includes 135 building pieces and features a spinning Ferris wheel, a musical light-show cone, fast tracks, extreme launchers and more that easily connect together\nColor-coded blocks and easy-to-follow guide help you construct three different builds from beginner to advanced or create your own; includes 10 marbles\nCreate an extreme playset by combining with other Marble Rush™ sets (sold separately); find more builds at vtechkids.com/marblerush\nAccredited STEAM (Science, Technology, Engineering, Art and Math) Toy by the Toy Association\nIntended for ages 4+ years; requires 2 AA and 3 AAA batteries; batteries included for demo purposes only; new batteries recommended for regular use"`
  )
);
products.push(
  new Product(
    "W-SS",
    "Shape Sorter",
    "Woodlets",
    "Educational Toys",
    11.87,
    10,
    5,
    3,
    1,
    3,
    "./img/products/educational/Woodlets - Shape Sorter - R Exclusive.jpg",
    ["Product is at best quality and would last a lifetime!"],
    `Help the Woodlets sort the chunky colourful shapes to keep the woodland clean and tidy! Post the shapes through the correct window, open the lid, take them out and start all over again!\nHelps little ones develop fine motor skills, problem solving, colour and shape recognition`
  )
);
products.push(
  new Product(
    "CB-CHEER",
    "Care Bears - Cheer Bear Plush",
    "Basic Fun",
    "Plush & Stuff Toys",
    19.99,
    8,
    5,
    2.5,
    4,
    7,
    "./img/products/plush/carebears-CheerBear.jpg",
    [
      `Who doesn't love blasts from the past? Who doesn't love being able to share your childhood with your children's? This Friendship CareBear is the perfect blast from the past. Nostalgic, well made, adorable, fluffy and soft! My 7 year old is beyond obsessed with his new friend! A great size and an adorable stuffed flashback!`,
    ],
    `The Care Bears are back! Launching this summer, the iconic 80's brand and original toy collectibles expression is ready to meet a whole new generation of kids! Featuring the most-beloved Care Bears in all new stylizations, vibrant colors, and with cool features, it will be hard to choose which one to bring home!\n\nThe Care Bears are a group of lovable, huggable BFFs and what better way to hug your favorite Care Bears friend then with the new Care Bears Medium Plush. Each Care Bears Medium Plush is 14" inches in size, comes in a soft huggable material (ready for unlimited bear hugs), and comes with a collectible Care Coin.\n\nCollect all 6 of the Care Bears Medium Plush today!`
  )
);
products.push(
  new Product(
    "SW-TCLP",
    "Star Wars Mandalorian Plush",
    "Imports Dragon",
    "Plush & Stuff Toys",
    49.99,
    10,
    5,
    3,
    4,
    7,
    "./img/products/plush/baby-yoda.jpg",
    ["Very cute, soft, and plushy! It’s a pretty decent size too."],
    "Star Wars The Child Large Plush are here to save the day. From Classic show, these plush are here and cuddlier than ever. This plush is super soft and is fully designed with their signature style. Recreate your favourite scenes from the movies with your friends and family. This is the perfect gift for every Star Wars fan on your list."
  )
);
products.push(
  new Product(
    "MI-SULLEY",
    "Monster Inc - Sulley Plush",
    "Disney",
    "Plush & Stuff Toys",
    19.99,
    15,
    5,
    3,
    3,
    6,
    "./img/products/plush/sulley.jpg",
    [
      "I was very impressed by the quality and size of these stuffies. I bought three for my grandsons who lost their orange tabby. They love them!",
    ],
    `This super soft plush features Sulley in their unique outfit. Sulley has embroidered and sculpted details. So cuddly, you can hug em all night long!`
  )
);
products.push(
  new Product(
    "CB-TENDER",
    "Care Bears - Tenderheart Bear Plush",
    "Basic Fun",
    "Plush & Stuff Toys",
    19.99,
    10,
    5,
    2.5,
    4,
    7,
    "./img/products/plush/carebears-TenderheartBear.jpg",
    [
      "So cute Grandson enjoyed the Care Bear and learning about and seeing the Care Bears have a revival is sweet. We appreciate that they reinforce admirable qualities that we need more of in the world. The bear was soft, cuddly, bright and cheerful!",
    ],
    `The Care Bears are back! Launching this summer, the iconic 80's brand and original toy collectibles expression is ready to meet a whole new generation of kids! Featuring the most-beloved Care Bears in all new stylizations, vibrant colors, and with cool features, it will be hard to choose which one to bring home!\n\nThe Care Bears are a group of lovable, huggable BFFs and what better way to hug your favorite Care Bears friend then with the new Care Bears Medium Plush. Each Care Bears Medium Plush is 14" inches in size, comes in a soft huggable material (ready for unlimited bear hugs), and comes with a collectible Care Coin.\n\nCollect all 6 of the Care Bears Medium Plush today!`
  )
);
products.push(
  new Product(
    "AA-SHEEP",
    "Sheep Plush",
    "Animal Alley",
    "Plush & Stuff Toys",
    22.99,
    10,
    5,
    2.5,
    4,
    7,
    "./img/products/plush/animalAlley-Sheep.jpg",
    [
      "Quality is really good. I bought it for my daughters pre school farm animal learning.",
      "Amazing Product!",
      "Sooo cuute",
    ],
    `Super soft plush toys designed to be very cosy and cuddly. All made with love and always there for snuggles, it's hard to resist giving these adorable animals a hug. Soft Toys help with early Learning Development: Nurturing and Sensory touch. Suitable from birth`
  )
);
products.push(
  new Product(
    "L-SMBA",
    `LEGO Super Mario Bowser's Airship Expansion Set`,
    "LEGO",
    "Building Sets & Blocks",
    118.95,
    10,
    2,
    7,
    8,
    12,
    "./img/products/blocks/Airship.jpg",
    [
      `I was impressed with this toy set. It was easy for my son to use and he has enjoyed many hours playing with it. The characters have very detailed features and the quality of the product is amazing. It also has several sets you can add and make a really big scene. Definitely recommend this product for any child with a big imagination.`,
      `I would recommend this particular set to any child the only thing I did not like was that you did not get a book with the instructions you have to look at them online.`,
    ],
    `Kids can build Bowser's iconic Airship to display and enhance their LEGO Super Mario universe with this Expansion Set (71391). The ship can be arranged in 'flying mode' or folded out in 'course mode', and players must overcome challenges such as Bowser's Mecha Hand and a POW Block to pop a Rocky Wrench from its hiding place. (Note: the 71360 or 71387 Starter Course is required for play.) Iconic enemies The set includes Kamek, Rocky Wrench and Goomba figures, plus a Cannon Start Pipe - use it to begin a 90-second level. Children can play solo, team up or compete against a friend with their LEGO Mario or LEGO Luigi figure. And look out for the free LEGO Super Mario app, which has building instructions, creative inspiration and more. Unlimited fun Collectible LEGO Super Mario toy playsets bring family-favorite Super Mario characters into the real world and make ace gifts for trend-setting kids.`
  )
);
products.push(
  new Product(
    "L-NHB",
    "LEGO Ninjago Hydro Bounty",
    "LEGO",
    "Building Sets & Blocks",
    135.95,
    5,
    2,
    7,
    8,
    12,
    "./img/products/blocks/Ninjago.jpg",
    [
      "Great build. Tons of fun and awesome characters. Highly recommended",
      "This is a fantastic lego kit to build. It has hours of building involved, that the whole family can enjoy, whether big or small. Once built it has so many features to play with, prompting endless role play. Arrows to shoot, figures to play battle with and the hydro bounty come to life as a robot! An underwater adventure like no other.",
    ],
    `Kids can enjoy all-action battles at the bottom of the sea with this brilliantly detailed LEGO NINJAGO Hydro Bounty (71756) playset. The underwater vehicle comes with 10 minifigures and is crammed with cool features - 2 spring-loaded shooters, an opening cockpit, folding wings, a detachable mech and 2 mini submarines, all to fuel the imaginations of young ninja fans! Premium NINJAGO playset This underwater playset features an impressive 10 minifigures: Scuba Kai, Scuba Nya, Scuba Zane, Scuba Jay, Scuba Cole and Scuba Lloyd, all with flippers, diving gear and weapons to fight the villainous quartet of Prince Kalmaar, a Maaray Guard and 2 Wu Bots. Imaginative and fun-filled building sets for kids NINJAGO toys transport kids to a world of immersive fantasy action. Young builders can enjoy assembling these unique toys before diving into awesome adventures with their ninja heroes as they battle a cast of their enemies while playing with an amazing collection of jets, dragons and mechs.`
  )
);
products.push(
  new Product(
    "L-SWBFS",
    `LEGO Star Wars Boba Fett's Starship`,
    "LEGO",
    "Building Sets & Blocks",
    69.99,
    7,
    8,
    5,
    8,
    12,
    "./img/products/blocks/boba-fett.jpg",
    [
      "I really liked how the transporter doubles as a stand, but I would like it to be more secure. and the gap in the cockpit is slightly annoying",
      `I was really excited to get him this set. It was a Christmas gift but I couldn't wait so he got it early. He loved it and it took him about 3 hours. Thet looks good with the rest of his builds`,
    ],
    `Star Wars: The Mandalorian fans can play out bounty-hunting missions and battles with this brilliant LEGO brick version of Boba Fett's Starship (75312). It features a handle for easy flying, an opening LEGO minifigure cockpit, rotating wings, 2 stud shooters and 2 rotating dual blaster cannons (non-shooting). This premium-quality set also includes Boba Fett and The Mandalorian LEGO minifigures with weapons, plus a Carbonite brick that fits in a compartment of the starship. Play and display There is also a transporter vehicle to move the starship and use as a stand so kids can display this awesome building toy in a vertical flying position. The set comes with clear instructions so even LEGO newcomers can build confidently. Galaxy of joy The LEGO Group has been creating brick-built versions of Star Wars starfighters, vehicles, locations and characters since 1999. The LEGO Star Wars theme has become hugely successful with construction sets that make super gifts for fans of all ages.`
  )
);
products.push(
  new Product(
    "L-SWDVH",
    `LEGO Star Wars - Darth Vader Helmet`,
    "LEGO",
    "Building Sets & Blocks",
    99.99,
    10,
    8,
    7,
    18,
    25,
    "./img/products/blocks/darth-vader.jpg",
    [
      `My child was very excited when I purchased this for his birthday. He told me that this was a fair price for the number of pieces.`,
      `My boyfriend grew up with LEGOs and was looking to get back into building. So, I surprised him with this set! He couldn’t keep his hands off of it and finished it in 3 sit-downs. It looks great and can’t wait to display it in our living room!`,
    ],
    `Pay homage to the Dark Lord of the Sith with this collectible LEGO® Star Wars™ Darth Vader Helmet (75304). Immerse yourself in the complex building process and relive classic Star Wars saga scenes as you recreate the iconic shape and sinister details of the helmet in LEGO style. Designed for display The Darth Vader Helmet is a compact size and has a display stand with a nameplate to complete a striking centerpiece that will enhance the decor of your home or workplace. And check out the other new LEGO Star Wars build-to-display helmet: Scout Trooper Helmet (75305). Special gift idea Part of a collection of LEGO Star Wars building kits for adults, this premium-quality set makes a wonderful memorabilia gift for yourself, any Star Wars fan, experienced LEGO builders or someone who enjoys a fun, creative challenge.`
  )
);
products.push(
  new Product(
    "L-FBC",
    "LEGO Friends Baking Competition",
    "LEGO",
    "Building Sets & Blocks",
    49.99,
    10,
    9,
    4,
    6,
    8,
    "./img/products/blocks/friends.jpg",
    [
      `Exactly as shown. Good price, fast shipping. It is a gift so we didn't open the product yet.`,
      "Awesome product for lego loving kids! My daughter loved building the set.",
    ],
    `It's showtime! Bring the drama of TV baking contests into kids' bedrooms with this LEGO Friends Baking Competition set (41393). Let them express their creativity as they decorate the toy cakes in crazy ways to impress the judges. Or role-play the judge deciding who will win the trophy. Feed imaginations This pretend play cooking set is packed with realistic kitchen equipment, play food, and cute utensils and accessories to realistically recreate the baking shows kids watch on TV. Cool functions such as the rotating cake stands and the spinning ingredients wheel help to inspire imaginative play. And the whole set is modular so kids can set it up and play with it the way they choose. Life's sweeter with Friends Introduce children to LEGO Friends, where kids can play out the adventures of the TV series, meeting LEGO Friends characters that are just like them. In Heartlake City they'll always have a buddy they can explore their interests with, because there's always room for one more friend.`
  )
);
/* ////////////////////////////
  MAIN FUNCTIONS 
*/ ///////////////////////////

function displayStoreItems() {
  // clears the previous output
  document.querySelector(".product-list").innerHTML = "";

  const select = document.getElementById("product-category");

  for (i in products) {
    if (select.value === "All") {
      displayProducts(products[i]);
    }

    let filteredProduct = products[i];
    if (select.value === filteredProduct.category) {
      displayProducts(filteredProduct);
    }
  }
} // End of displayStoreItems()

function displayProducts(product) {
  const myProductList = document.querySelector(".product-list");
  const myProduct = document.createElement("div");
  const name = document.createElement("h2");
  const image = document.createElement("img");
  const id = document.createElement("p");
  const quantityOnHand = document.createElement("p");
  const maxOrder = document.createElement("p");
  const price = document.createElement("p");
  const quantity = document.createElement("input");
  const spanCart = document.createElement("span");
  const btnCart = document.createElement("button");
  const currency = document.getElementById("currency");

  // setting attributes
  image.setAttribute("src", product.image);
  image.setAttribute("alt", product.name);
  // setting attributes for the quantity product card
  spanCart.setAttribute("id", `span-${product.id}`);
  quantity.setAttribute("id", `qty-${product.id}`);
  quantity.setAttribute("type", "number");
  quantity.setAttribute("value", "1");
  quantity.setAttribute("min", "1");
  quantity.setAttribute("max", product.maxOrderQuantity);
  quantity.setAttribute("step", "1");
  quantity.setAttribute("placeholder", "QTY");

  // adding class names
  myProduct.classList.add("product-item");
  name.classList.add("p-name-style", "colored-heading", product.id);
  image.classList.add("p-image-style");
  spanCart.classList.add("qty-span");
  quantity.classList.add("qty-input");
  btnCart.classList.add("btn-cart", product.id);
  price.classList.add("p-price-style");

  // input values to the the created element
  name.innerHTML = product.name;
  id.innerHTML = "ID: " + product.id;
  quantityOnHand.innerHTML = "Quantity On Hand: " + product.qtyOnHand;
  maxOrder.innerHTML = "Max Order Quantity: " + product.maxOrderQuantity;
  price.innerHTML =
    "<strong>Price: " +
    formatCurrency(product.price * currencyRate, "en-US", currency.value) +
    "</strong>";
  btnCart.textContent = "Add To Cart";

  //Appends the product card to the output div
  myProductList.appendChild(myProduct);
  myProduct.appendChild(image);
  myProduct.appendChild(name);
  myProduct.appendChild(id);
  myProduct.appendChild(quantityOnHand);
  myProduct.appendChild(maxOrder);
  myProduct.appendChild(price);
  spanCart.appendChild(quantity);
  spanCart.appendChild(btnCart);
  myProduct.appendChild(spanCart);

  // Input quantity
  quantity.onchange = function () {
    // prompts when user inputs quantity bigger than max order quantity
    if (quantity.value > product.maxOrderQuantity) {
      alert(
        "Unable to add more items for this product. You can only order up to " +
          product.maxOrderQuantity +
          " pieces. Thank you"
      );
      quantity.value = 1;
    }
    // prompts when user inputs negative and 0 value
    if (quantity.value == 0 || quantity.value < 0) {
      alert("Please input quantity");
      quantity.value = 1;
    }

    if (isNaN(quantity.value)) {
      alert("Please input quantity");
      quantity.value = 1;
    }
  };

  quantity.onclick = function () {
    quantity.value = "";
  };

  // Item Details -- EVENTS FOR MOBILE PHONES
  image.onclick = function () {
    modalProduct(product);
    const modal = document.getElementById("product-modal");
    modal.style.display = "block";
  };

  name.addEventListener("touchstart", function (e) {
    e.target.style.color = "var(--color-secondary-darker)";
  });

  name.addEventListener("touchend", function (e) {
    e.target.style.color = "var(--color-primary-darker)";
  });

  // ITEM DETAILS --- MOUSE CLICK and HOVER events
  name.addEventListener("mouseenter", function (e) {
    e.target.style.cursor = "pointer";
    e.target.style.color = "var(--color-secondary-darker)";
  });

  name.addEventListener("mouseout", function (e) {
    e.target.style.color = "var(--color-primary-darker)";
  });

  // Item Details Window
  name.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains(product.id)) {
      modalProduct(product);
    }
    const modal = document.getElementById("product-modal");
    modal.style.display = "block";
  });

  btnCart.onclick = function () {
    // gets the value of the quantity from the product item card
    let inputQuantity = document.getElementById(`qty-${product.id}`).value;
    inputQuantity = parseInt(inputQuantity);

    // gets the cart window element
    const cartWindow = document.getElementById("cart-modal");

    // Validates product in the cart array
    const indexCart = shoppingCart.findIndex((cart) => cart.id === product.id);
    let cartItem = shoppingCart[indexCart];

    if (isNaN(inputQuantity)) {
      alert("Please input quantity");
      return;
    }

    // if product does not exists on shopping cart, add new item to cart array
    if (indexCart === -1) {
      alert("The product has been added to the cart");
      shoppingCart.push(
        new Cart(
          product.id,
          product.name,
          product.price,
          inputQuantity,
          product.shippingCost,
          product.qtyOnHand,
          product.maxOrderQuantity
        )
      );
      // reduce the quantity on hand and add the item to the cart
      product.qtyOnHand -= inputQuantity;
      // pops up the cart window after add to cart
      showModal(cartWindow);
    } else {
      let overallQty = inputQuantity + cartItem.quantity;

      // if product exists, modify the quantity
      if (inputQuantity <= cartItem.maxQuantity()) {
        if (overallQty <= cartItem.maxQuantity()) {
          alert("The product has been added to the cart");
          cartItem.quantity =
            parseInt(cartItem.quantity) + parseInt(inputQuantity);

          // reduce the quantity on hand and add the item to the cart
          product.qtyOnHand -= inputQuantity;

          // pops up the cart window after add to cart
          showModal(cartWindow);
        }

        // prompts the user when the sum of input qty and cart qty is bigger than max order qty
        if (overallQty > cartItem.maxQuantity())
          alert(
            "Unable to add more items for this product. You can only order up to " +
              product.maxOrderQuantity +
              " pieces. You already added " +
              cartItem.quantity +
              ` ${
                cartItem.quantity > 1 ? "items" : "item"
              } in your cart. Thank you`
          );
      } else {
        alert(
          "Unable to add more items for this product. You can only order up to " +
            product.maxOrderQuantity +
            " pieces. You already added " +
            cartItem.quantity +
            ` ${
              cartItem.quantity > 1 ? "items" : "item"
            } in your cart. Thank you`
        );
      }
    }
    // refreshes the quantity on hand on the product list
    displayStoreItems();

    // displays the added cart items
    displayCartItems();
  };
} // End of displayProducts(product)

function displayCartItems() {
  // Get the modal
  const modal = document.getElementById("cart-modal");
  const cart = document.getElementById("cart-window");

  // closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // closes the modal window when user clicks outside
  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };

  // refreshes the cart display
  document.getElementById("cart-window").innerHTML = "";

  const currency = document.getElementById("currency");

  // Displays the TITLE and HEADER once product has been added to cart
  const table = document.createElement("table");
  const body = document.createElement("tbody");
  const rowHeader = document.createElement("tr");
  const idHeader = document.createElement("th");
  const quantityHeader = document.createElement("th");
  const priceHeader = document.createElement("th");
  const subtotalHeader = document.createElement("th");

  idHeader.classList.add("p-style");
  priceHeader.classList.add("p-style");
  quantityHeader.classList.add("p-style");
  subtotalHeader.classList.add("p-style");

  idHeader.innerHTML = "ID";
  priceHeader.innerHTML = "Price";
  quantityHeader.innerHTML = "Quantity";
  subtotalHeader.innerHTML = "Subtotal";

  // Appends the table row and header to the table body
  rowHeader.appendChild(idHeader);
  rowHeader.appendChild(priceHeader);
  rowHeader.appendChild(quantityHeader);
  rowHeader.appendChild(subtotalHeader);
  body.appendChild(rowHeader);

  let itemSubTotal = 0;
  let subtotal = 0;
  let shipping = 0;
  let tax = 0;
  let total = 0;

  if (shoppingCart.length !== 0) {
    // Display Cart List in CART PAGE
    for (i in shoppingCart) {
      let item = shoppingCart[i];

      // create row for patient data
      const rowData = document.createElement("tr");

      // creates column for every patient data
      const idData = document.createElement("td");
      const priceData = document.createElement("td");
      const quantityData = document.createElement("td");
      const subtotalData = document.createElement("td");
      const quantity = document.createElement("span");
      const closeIcon = document.createElement("span");

      idData.setAttribute("id", item.id);
      closeIcon.setAttribute("id", `close-item-${i}`);

      idData.innerHTML = item.id;
      priceData.innerHTML = formatCurrency(
        item.price * currencyRate,
        "en-US",
        currency.value
      );
      quantity.innerHTML = item.quantity;
      closeIcon.innerHTML = `<i class="far fa-window-close"></i>`;
      subtotalData.innerHTML =
        "<strong>" +
        formatCurrency(
          item.itemSubTotal() * currencyRate,
          "en-US",
          currency.value
        ) +
        "</strong>";

      // appends the product data to the table row
      rowData.appendChild(idData);
      rowData.appendChild(priceData);
      quantityData.appendChild(quantity);
      quantityData.appendChild(closeIcon);
      rowData.appendChild(quantityData);
      rowData.appendChild(subtotalData);
      body.appendChild(rowData);

      itemSubTotal += item.itemSubTotal();
      subtotal += item.subTotal();
      tax += item.tax();
      total += item.total();
      shipping += item.shippingCost;
    }
  } else {
    // if Cart Array is empty, display NO ITEMS IN CART
    const noItem = document.createElement("p");
    noItem.innerHTML = "No Items in Cart";
    body.appendChild(noItem);
  }
  // append the table to the cart output
  table.appendChild(body);
  cart.appendChild(table);

  const calcDiv = document.createElement("div");
  const pitemSubtotal = document.createElement("p");
  const pShipping = document.createElement("p");
  const pSubtotal = document.createElement("p");
  const pTax = document.createElement("p");
  const pTotal = document.createElement("p");

  calcDiv.classList.add("calculate-cart");
  pSubtotal.classList.add("cart-item");
  pTax.classList.add("cart-item");
  pTotal.classList.add("cart-item");

  pitemSubtotal.innerHTML =
    "Items Subtotal: " +
    formatCurrency(itemSubTotal * currencyRate, "en-US", currency.value);
  pShipping.innerHTML =
    "Shipping: " +
    formatCurrency(shipping * currencyRate, "en-US", currency.value) +
    "<br><br>";
  pSubtotal.innerHTML =
    "<strong> Subtotal: " +
    formatCurrency(subtotal * currencyRate, "en-US", currency.value) +
    "</strong>";
  pTax.innerHTML =
    "Taxes: " + formatCurrency(tax * currencyRate, "en-US", currency.value);
  pTotal.innerHTML =
    "<strong> Total: " +
    formatCurrency(total * currencyRate, "en-US", currency.value) +
    "</strong>";

  calcDiv.appendChild(pitemSubtotal);
  calcDiv.appendChild(pShipping);
  calcDiv.appendChild(pSubtotal);
  calcDiv.appendChild(pTax);
  calcDiv.appendChild(pTotal);
  cart.appendChild(calcDiv);

  // display product items
  displayStoreItems();
  removeFromCart();
} // End of diplayCartItems()

/* ////////////////////////////
  SMALL FUNCTIONS 
*/ ///////////////////////////

// FIRST LOAD FUNCTION
function firstPageLoad() {
  // display all products
  displayStoreItems();

  // display current date and time
  setInterval(function () {
    displayDateTime();
  }, 1000);

  // display cart section
  displayCartItems();
}

function displayDateTime() {
  var today = new Date();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var date =
    months[today.getMonth()] +
    " " +
    today.getDate() +
    ", " +
    today.getFullYear();
  var time =
    (today.getHours() < 10 ? "0" : "") +
    today.getHours() +
    ":" +
    (today.getMinutes() < 10 ? "0" : "") +
    today.getMinutes() +
    ":" +
    (today.getSeconds() < 10 ? "0" : "") +
    today.getSeconds();
  var dateTime = date + " " + time;
  document.getElementById("date-time").innerHTML = dateTime;
} // End of displayDateTime()

function removeFromCart() {
  for (i in shoppingCart) {
    let item = document.getElementById(`close-item-${i}`);

    item.onclick = function () {
      if (confirm("This will delete the item in your cart. Proceed?")) {
        // finding index of product in the products array
        const index = products.findIndex(
          (product) => product.id === shoppingCart[i].id
        );
        // return quantity deducted from adding to cart
        products[index].qtyOnHand += shoppingCart[i].quantity;

        // removes item from cart
        shoppingCart.splice(i, 1);

        // updates the cart
        displayCartItems();
      } else {
        // updates the cart if user cancelled
        displayCartItems();
      }
    };
  }
}

function changeCurrency() {
  let currency = document.getElementById("currency").value;

  if (currency === "CAD") currencyRate = 1;
  if (currency === "USD") currencyRate = 0.79;
  if (currency === "GBP") currencyRate = 0.59;
  if (currency === "PHP") currencyRate = 39.58;

  displayStoreItems();
  displayCartItems();
}

// for currency formatting - CAD X,XXX.XX
function formatCurrency(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    currencyDisplay: "code",
  }).format(value);
}

// to display ITEM DETAILS
function modalProduct(product) {
  // Get the modal
  const modal = document.getElementById("product-modal");

  // closes the modal
  var span = document.getElementsByClassName("close")[0];
  const currency = document.getElementById("currency");

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // closes the modal window when user clicks outside
  window.onclick = function (e) {
    if (e.target == modal) modal.style.display = "none";
  };

  // get HTML elements for product data population
  const brand = document.getElementById("product-page-brand");
  const image = document.getElementById("product-page-image");
  const name = document.getElementById("product-page-name");
  const id = document.getElementById("product-page-id");
  const price = document.getElementById("product-page-price");
  const category = document.getElementById("product-page-category");
  const order = document.getElementById("product-page-order-quantity");
  const shipping = document.getElementById("product-page-shipping");
  const age = document.getElementById("product-page-age");
  const description = document.getElementById("product-page-description");
  const reviews = document.getElementById("product-page-reviews");

  const reviewWindow = document.getElementById("review-window");
  const reviewDiv = document.getElementById("review");
  const btnReview = document.createElement("button");

  // clears the previous review values
  document.getElementById("review").innerHTML = "";
  document.getElementById("review-textarea").value = "";
  hide(reviewWindow);

  // adding product id in the review button
  btnReview.setAttribute("id", `review-add-${product.id}`);
  btnReview.classList.add("review-btn");

  btnReview.innerHTML = "Write A Review";
  btnReview.addEventListener("click", function (e) {
    reviewItem(product);
    hide(e.target);
  });

  brand.innerHTML = product.brand;
  image.src = product.image;
  name.innerHTML = product.name;
  id.innerHTML = "<strong>ID: </strong>" + product.id;
  price.innerHTML =
    "<strong>Price: </strong>" +
    formatCurrency(product.price * currencyRate, "en-US", currency.value);
  category.innerHTML = "<strong>Category: </strong>" + product.category;
  order.innerHTML =
    "<strong>Max Order Quantity: </strong>" + product.maxOrderQuantity;
  shipping.innerHTML =
    "<strong>Shipping Cost: </strong>" + product.shippingCost;
  age.innerHTML = "<strong>Age: </strong>" + product.age();
  description.innerHTML = product.description;
  reviews.innerHTML = `<p>"${product.reviews.join(`"</p><br><p>"`)}"</p>`;

  reviewDiv.appendChild(btnReview);
} // End of modalProduct(product)

function reviewItem(product) {
  const window = document.getElementById("review-window");
  const textarea = document.getElementById("review-textarea");
  const button = document.getElementById("review-submit");

  const addReviewBtn = document.getElementById(`review-add-${product.id}`);

  // displays the review text area and submit review button
  show(window);

  // gets the value of the user input and adds it to the product review array.
  button.onclick = function () {
    const MAX_CHARS = 150;

    if (textarea.value !== "") {
      // user can only input below MAX CHARACTER
      if (textarea.value.length <= MAX_CHARS) {
        // adds the input to the product review array
        product.reviews.push(textarea.value);
        // clears the textarea
        textarea.value = "";

        // hides the review window
        hide(window);
        alert("Your review has been submitted. Thank you");

        // the add review button will reappear once submitted and refreshes the product modal
        show(addReviewBtn);
        modalProduct(product);
      } else {
        alert("Sorry you can only input " + MAX_CHARS + " max characters.");
        textarea.value = "";
      }
    } else {
      // prompts the user to enter a review
      alert("Your review is blank. Please write your review");
    }
  };
} // End of reviewItem(product)

/* ////////////////////////////
  TINY FUNCTIONS TO PERFORM ONE THING
*/ ///////////////////////////

function show(event) {
  event.classList.remove("hidden");
}

function hide(event) {
  event.classList.add("hidden");
}

function closeModal(modal) {
  modal.style.display = "none";
}

function showModal(modal) {
  modal.style.display = "block";
}

function viewCart() {
  const cart = document.getElementById("cart-modal");
  showModal(cart);

  // closes the window if user click outside modal
  window.onclick = function (e) {
    if (e.target == cart) cart.style.display = "none";
  };
}

function closeCart() {
  const cart = document.getElementById("cart-modal");
  closeModal(cart);
}

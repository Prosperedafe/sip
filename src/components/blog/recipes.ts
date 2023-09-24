import mixedFruit from "../../assets/images/pear/pear.png";
import mixedBottle from "../../assets/images/pear/pear bottle.png";

import appleFruit from "../../assets/images/apple chunks.png";
import appleBottle from "../../assets/images/apple bottle.png";
import appleFruitStep1 from "../../assets/images/apple/step1.png";
import appleFruitStep2 from "../../assets/images/apple/step2.png";
import appleFruitStep3 from "../../assets/images/apple/step3.png";
import appleFruitStep4 from "../../assets/images/apple/step4.png";
import appleFruitStep5 from "../../assets/images/apple/step5.png";
import appleFruitStep6 from "../../assets/images/apple/step6.png";

import orangeFruit from "../../assets/images/orange.png";
import orangeBottle from "../../assets/images/orange bottle.png";
import coconutFruit from "../../assets/images/coconut pieces.png";
import coconutBottle from "../../assets/images/coconut.png";

import pineappleFruit from "../../assets/images/pineapple/pineapple chunks.png";
import pineappleBottle from "../../assets/images/pineapple/can pineapple 1.png";
import pineappleStep1 from "../../assets/images/pineapple/step1.png";
import pineappleStep2 from "../../assets/images/pineapple/step2.png";
import pineappleStep3 from "../../assets/images/pineapple/step3.png";
import pineappleStep4 from "../../assets/images/pineapple/step4.png";
import pineappleStep5 from "../../assets/images/pineapple/step5.png";
import pineappleStep6 from "../../assets/images/pineapple/step6.png";

import melonFruit from "../../assets/images/melon/Melon chunks.png";
import melonBottle from "../../assets/images/melon/watermelon 1.png";
import melonStep1 from "../../assets/images/melon/step1 melon.png";
import melonStep2 from "../../assets/images/melon/step2 melon.png";
import melonStep3 from "../../assets/images/melon/step3 melon.png";
import melonStep4 from "../../assets/images/melon/step4 melon.png";
import melonStep5 from "../../assets/images/melon/step5 melon.png";
import { recipeID } from "../../schema/interface";

export const recipes:recipeID[] = [
  {
    id: 1,
    title: "Mixed Fruits",
    route: "mixed-fruits",
    paragraph:
      "Indulge in the crisp, sweet, and invigorating flavors of apple with our delightful apple drink selection. Made from the finest hand-picked apples, our beverages offer a refreshing twist on this beloved fruit. With each sip, experience the natural goodness and vibrant taste that only apples can provide. Our apple drinks are carefully crafted to capture the essence of ripe, juicy apples, delivering a burst of flavor that will tantalize your taste buds. Whether you prefer a chilled apple juice.",
    background: "hsla(61, 58%, 52%, 1)",
    bottle: mixedBottle,
    fruit: mixedFruit,
  },
  {
    id: 2,
    title: "Orange Drink",
    route: "orange-drink",
    paragraph:
      "Quench your thirst with the vibrant and invigorating flavors of orange drink. Made from the juiciest and most succulent oranges, our beverages offer a delightful burst of citrusy goodness that will awaken your senses and leave you feeling refreshed. Experience the zesty tang and natural sweetness of oranges as they take center stage in our flavorful concoctions. From classic orange juice that captures the pure essence of this beloved fruit to sparkling orange soda that adds a fizzy twist, our range of orange-based drinks.",
    background: "hsla(52, 100%, 50%, 1)",
    bottle: orangeBottle,
    fruit: orangeFruit,
  },
  {
    id: 3,
    title: "Coconut Drink",
    route: "coconut-drink",
    paragraph:
      "Escape to a tropical oasis with the creamy and refreshing delight of coconut drink. Immerse yourself in the irresistible flavors of this exotic fruit and experience a taste sensation that transports you to sandy beaches and swaying palm trees. Indulge in the velvety smoothness and tropical sweetness of coconut as it takes center stage in our delightful beverages. From creamy coconut milk to refreshing coconut water, our coconut drink selection offers a variety of options to suit your preferences. Each sip is like a tropical breeze caressing.",
    background: "hsla(25, 59%, 59%, 1)",
    bottle: coconutBottle,
    fruit: coconutFruit,
  },
  // 
  {
    id: 4,
    title: "Apple Drink",
    route: "apple-drink",
    paragraph: "Embark on a tropical adventure with our tantalizing pineapple drink collection. Bursting with the vibrant flavors of the exotic pineapple fruit, our beverages offer a refreshing and invigorating experience that will transport you to sun-kissed shores and swaying palm trees. Indulge in the juicy sweetness and tangy zest of pineapple as it takes center stage in our delightful concoctions. From chilled pineapple juice that captures the essence of tropical paradise to sparkling pineapple soda that adds a fizzy twist, our",
    background: "hsla(103, 43%, 49%, 1)",
    bottle: appleBottle,
    fruit: appleFruit,
    steps1: [
      {
        heading: "Step 1: Gather the Ingredients",
        step: [
            "Fresh apples: Choose your favorite variety of apples, such as Granny Smith, Gala, or Honeycrisp.",
            "Water or apple juice: Select your preferred liquid base for the drink.",
            "Sweetener (optional): If desired, add a natural sweetener like honey, maple syrup, or sugar to enhance the sweetness.",
            "Ice cubes: These will help chill the drink and add a refreshing touch."
        ],
        img: appleFruitStep1,
      },
    ],
    steps2: [
      {
        heading: "Step 2: Prepare the Apples",
        step: [
            "Wash the apples thoroughly to remove any dirt or wax.",
            "Core the apples and cut them into small chunks or slices. Leave the skin on for added nutrients and flavor.",
        ],
        img: appleFruitStep2,
      },
    ],
    steps3: [
      {
        heading: "Step 3: Blend the Ingredients",
        step: [
            "Place the apple chunks into a blender or food processor.",
            "Add water or apple juice to the blender, using enough liquid to achieve the desired consistency. Start with a small amount and add more as needed.",
            "If you prefer a sweeter drink, add your chosen sweetener to the blender.",
            "Blend the mixture on high speed until smooth and well blended. Ensure there are no apple chunks left."
        ],
        img: appleFruitStep3,
      },
    ],
    steps4: [
      {
        heading: "Step 4: Strain (Optional)",
        step: [
            "If you prefer a smoother texture, strain the blended mixture through a fine-mesh sieve or cheesecloth to remove any pulp or fibers. This step is optional and depends on your personal preference.",
        ],
        img: appleFruitStep4,
      },
    ],
    steps5: [
      {
        heading: "Step 5: Chill and Serve",
        step: [
            "Pour the apple drink into a pitcher or individual glasses.",
            "Add ice cubes to each glass to keep the drink chilled.",
            "Optionally, garnish with a slice of apple or a sprinkle of cinnamon for an extra touch of flavor."
        ],
        img: appleFruitStep5,
      },
    ],
    steps6: [
      {
        heading: "Step 6: Enjoy!",
        step: [
            "Serve the apple drink to yourself, your family, or your guests.",
            "Savor the crisp and refreshing flavors of fresh apples, combined with the natural sweetness of the drink.",
            "Feel free to experiment with variations by adding a squeeze of lemon juice, a pinch of ginger, or a dash of cinnamon to enhance the taste."
        ],
        img: appleFruitStep6,
      },
    ],
  },
  // 
  {
    id: 5,
    title: "Pineapple Drink",
    route: "pineapple-drink",
    paragraph:
      "Discover the tropical treasure that is pineapple - a fruit synonymous with sunny beaches, swaying palm trees, and exotic getaways. With its vibrant golden color, succulent juiciness, and sweet-tangy flavor, pineapple is a true delight for your taste buds. Savor the taste of paradise as you bite into the refreshing flesh of a perfectly ripe pineapple. Each mouthwatering bite releases a burst of tropical sweetness, leaving you craving for more. Whether enjoyed on its own, in a fresh fruit salad, or incorporated into a variety",
    background: "hsla(52, 99%, 69%, 1)",
    bottle: pineappleBottle,
    fruit: pineappleFruit,
    steps1: [
      {
        heading: "Step 1: Gather the Ingredients",
        step: [
            "Fresh pineapple: Choose a ripe and fragrant pineapple, as it will provide the best flavor..",
            "Coconut water or pineapple juice: Depending on your preference, you can use coconut water to add a tropical twist or pineapple juice for a more intense pineapple flavor.",
            "Ice cubes: These will help chill and enhance the refreshing qualities of the drink.",
            "Sweetener (optional): If desired, you can add a natural sweetener like honey or agave syrup to balance the tartness of the pineapple."
        ],
        img: pineappleStep1,
      },
    ],
    steps2: [
      {
        heading: "Step 2: Prepare the Pineapple",
        step: [
            "Begin by washing the pineapple under running water to remove any dirt or residue.",
            "Slice off the top and bottom ends of the pineapple.",
            "Stand the pineapple upright and carefully cut off the outer skin, moving from top to bottom, removing any remaining \"brown eyes\".",
            "Slice the pineapple into chunks or wedges, discarding the tough core if desired.",
        ],
        img: pineappleStep2,
      },
    ],
    steps3: [
      {
        heading: "Step 3: Blend the Ingredients",
        step: [
            "Place the pineapple chunks into a blender or food processor.",
            "Add coconut water or pineapple juice to the blender, using enough liquid to achieve your desired consistency. Start with a small amount and add more as needed.",
            "If using a sweetener, add it to the blender as well.",
            "Blend the mixture on high speed until smooth and well combined. Ensure there are no lumps or chunks of pineapple remaining."
        ],
        img: pineappleStep3,
      },
    ],
    steps4: [
      {
        heading: "Step 4: Strain (Optional)",
        step: [
            "If you prefer a smoother texture, strain the blended mixture through a fine-mesh sieve or cheesecloth to remove any pulp or fibers. This step is optional and depends on your personal preference.",
        ],
        img: pineappleStep4,
      },
    ],
    steps5: [
      {
        heading: "Step 5: Chill and Serve",
        step: [
            "Pour the pineapple drink into a pitcher or individual serving glasses.",
            "Add a few ice cubes to each glass to chill the drink further.",
            "Garnish with a pineapple wedge, a slice of lime, or a sprig of mint for an extra touch of presentation."
        ],
        img: pineappleStep5,
      },
    ],
    steps6: [
      {
        heading: "Step 6: Enjoy!",
        step: [
            " Serve the chilled pineapple drink to your guests or enjoy it yourself.",
            "Savor the tropical flavors of pineapple, the natural sweetness, and the refreshing qualities of this delightful beverage.",
            "Feel free to get creative by adding a splash of sparkling water, blending in other fruits like mango or passion fruit, or even incorporating rum for a delicious pineapple cocktail variation."
        ],
        img: pineappleStep6,
      },
    ],
  },
// 
  {
    id: 6,
    title: "Watermelon",
    route: "watermelon-drink",
    paragraph: "Quench your thirst and delight your taste buds with the luscious goodness of watermelon drinks. Dive into a world of refreshing flavors and invigorating sensations as you indulge in the succulent sweetness of this summer fruit. From tantalizing smoothies to cooling mocktails, our watermelon drink recipes are sure to keep you hydrated and satisfied all season long. Experience the juiciness and vibrant hues of watermelon as it takes center stage in our delectable drink creations.",
    background: "hsla(345, 99%, 70%, 1)",
    bottle: melonBottle,
    fruit: melonFruit,
    steps1: [
      {
        heading: "Step 1: Gather the Ingredients",
        step: [
            "Fresh watermelon: Choose a ripe and juicy watermelon, preferably seedless, for the best flavor.",
            "Lime juice: Freshly squeezed lime juice adds a tangy twist to the drink.",
            "Sweetener (optional): If desired, you can add a touch of sweetness with honey, agave syrup, or sugar."
        ],
        img: melonStep1,
      },
    ],
    steps2: [
      {
        heading: "Step 2: Prepare the Watermelon",
        step: [
            "Wash the watermelon thoroughly under running water to remove any dirt or debris.",
            " Slice off the top and bottom ends of the watermelon to create stable flat surfaces.",
            "Stand the watermelon upright and carefully cut off the rind, working your way around the fruit.",
            "Cut the watermelon into small chunks or cubes, removing any seeds if necessary.",
        ],
        img: melonStep2,
      },
    ],
    steps3: [
      {
        heading: "Step 3: Blend the Ingredients",
        step: [
            "Place the watermelon chunks in a blender or food processor.",
            "Squeeze in the juice of one or two fresh limes, depending on your preference for tanginess.",
            "Add a sweetener of your choice if desired, starting with a small amount and adjusting to taste.",
            "Blend the mixture until smooth and well combined, ensuring there are no lumps or chunks remaining.",
        ],
        img: melonStep3,
      },
    ],
    steps4: [
      {
        heading: "Step 4: Chill and Serve",
        step: [
            "Pour the watermelon drink into a pitcher or individual serving glasses.",
            "Place the pitcher or glasses in the refrigerator to chill for at least 30 minutes or until the desired temperature is reached.",
            "Before serving, you can garnish the drink with fresh mint leaves, a slice of lime, or a watermelon wedge for an extra touch of presentation.",
        ],
        img: melonStep4,
      },
    ],
    steps5: [
      {
        heading: "Step 5: Enjoy!",
        step: [
            "Serve the chilled watermelon drink to your family, friends, or simply enjoy it yourself.",
            "Savor the refreshing and sweet flavors of watermelon, the tangy twist of lime, and the natural hydrating properties of this delightful beverage.",
            "Feel free to get creative by adding ice cubes, blending in other fruits, or even mixing in a splash of sparkling water for a fizzy variation.",
        ],
        img: melonStep5,
      },
    ],
  },
];
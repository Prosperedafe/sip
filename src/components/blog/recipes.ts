import mixedFruit from "../../assets/images/pear.png"
import mixedBottle from "../../assets/images/pear bottle.png"
import appleFruit from "../../assets/images/apple chunks.png"
import appleBottle from "../../assets/images/apple bottle.png"
import orangeFruit from "../../assets/images/orange.png"
import orangeBottle from "../../assets/images/orange bottle.png"
import coconutFruit from "../../assets/images/coconut pieces.png"
import coconutBottle from "../../assets/images/coconut.png"
import pineappleFruit from "../../assets/images/pineapple chunks.png"
import pineappleBottle from "../../assets/images/can pineapple 1.png"
import melonFruit from "../../assets/images/Melon chunks.png"
import melonBottle from "../../assets/images/watermelon 1.png"

export const recipes: Array<object | Array<object>> = [
    {
        id: 1,
        title: "Mixed Fruits",
        paragraph: "Indulge in the crisp, sweet, and invigorating flavors of apple with our delightful apple drink selection. Made from the finest hand-picked apples, our beverages offer a refreshing twist on this beloved fruit. With each sip, experience the natural goodness and vibrant taste that only apples can provide. Our apple drinks are carefully crafted to capture the essence of ripe, juicy apples, delivering a burst of flavor that will tantalize your taste buds. Whether you prefer a chilled apple juice.",
        background: "hsla(61, 58%, 52%, 1)",
        bottle: mixedBottle,
        fruit: mixedFruit,
        step1: [
            {
                step: "",
            }
        ]
    },
    {
        id: 2,
        title: "Orange Drink",
        paragraph: "Quench your thirst with the vibrant and invigorating flavors of orange drink. Made from the juiciest and most succulent oranges, our beverages offer a delightful burst of citrusy goodness that will awaken your senses and leave you feeling refreshed. Experience the zesty tang and natural sweetness of oranges as they take center stage in our flavorful concoctions. From classic orange juice that captures the pure essence of this beloved fruit to sparkling orange soda that adds a fizzy twist, our range of orange-based drinks.",
        background: "hsla(52, 100%, 50%, 1)",
        bottle: orangeBottle,
        fruit: orangeFruit,
    },
    {
        id: 3,
        title: "Coconut Drink",
        paragraph: "Escape to a tropical oasis with the creamy and refreshing delight of coconut drink. Immerse yourself in the irresistible flavors of this exotic fruit and experience a taste sensation that transports you to sandy beaches and swaying palm trees. Indulge in the velvety smoothness and tropical sweetness of coconut as it takes center stage in our delightful beverages. From creamy coconut milk to refreshing coconut water, our coconut drink selection offers a variety of options to suit your preferences. Each sip is like a tropical breeze caressing.",
        background: "hsla(25, 59%, 59%, 1)",
        bottle: coconutBottle,
        fruit: coconutFruit,
    },
    {
        id: 4,
        title: "Apple Drink",
        paragraph: "Embark on a tropical adventure with our tantalizing pineapple drink collection. Bursting with the vibrant flavors of the exotic pineapple fruit, our beverages offer a refreshing and invigorating experience that will transport you to sun-kissed shores and swaying palm trees. Indulge in the juicy sweetness and tangy zest of pineapple as it takes center stage in our delightful concoctions. From chilled pineapple juice that captures the essence of tropical paradise to sparkling pineapple soda that adds a fizzy twist, our",
        background: "hsla(103, 43%, 49%, 1)",
        bottle: appleBottle,
        fruit: appleFruit,
    },
    {
        id: 5,
        title: "Pineapple Drink",
        paragraph: "Discover the tropical treasure that is pineapple - a fruit synonymous with sunny beaches, swaying palm trees, and exotic getaways. With its vibrant golden color, succulent juiciness, and sweet-tangy flavor, pineapple is a true delight for your taste buds. Savor the taste of paradise as you bite into the refreshing flesh of a perfectly ripe pineapple. Each mouthwatering bite releases a burst of tropical sweetness, leaving you craving for more. Whether enjoyed on its own, in a fresh fruit salad, or incorporated into a variety",
        background: "hsla(52, 99%, 69%, 1)",
        bottle: pineappleBottle,
        fruit: pineappleFruit,
    },
    {
        id: 6,
        title: "Watermelon",
        paragraph: "Quench your thirst and delight your taste buds with the luscious goodness of watermelon drinks. Dive into a world of refreshing flavors and invigorating sensations as you indulge in the succulent sweetness of this summer fruit. From tantalizing smoothies to cooling mocktails, our watermelon drink recipes are sure to keep you hydrated and satisfied all season long. Experience the juiciness and vibrant hues of watermelon as it takes center stage in our delectable drink creations.",
        background: "hsla(345, 99%, 70%, 1)",
        bottle: melonBottle,
        fruit: melonFruit,
    }
]
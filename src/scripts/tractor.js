import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

export const plantSeeds = (yearlyPlan) => {
    // to go into the array of arrays
    for (const plan of yearlyPlan) {
        for (const food of plan) {
            if(food === "Asparagus"){
                
                addPlant(createAsparagus())
            }
            if(food === "Corn"){
                
                addPlant(createCorn())
            }
            if(food === "Soybean"){
                addPlant(createSoybean())
            }
            if(food === "Potato"){
                addPlant(createPotato())
            }
            if(food === "Sunflower"){
                addPlant(createSunflower())
            }
            if(food === "Wheat") {
                addPlant(createWheat())
            }

            
        }
    }


}
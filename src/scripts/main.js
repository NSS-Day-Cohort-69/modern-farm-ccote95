import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { plantSeeds } from "./tractor.js";
import { catalog } from "./catalog.js";


const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
const plantsForUse = usePlants()
const plantsForHarvest = harvestPlants(plantsForUse)



	
	
console.log("Welcome to the main module")
	
	



const inventory = catalog(plantsForHarvest)
const existingContainer = document.querySelector(".container")
existingContainer.innerHTML = inventory

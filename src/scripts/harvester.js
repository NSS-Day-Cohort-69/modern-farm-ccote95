
// const readyForHarvest = usePlants()
export const harvestPlants = (readyForHarvest) => {
    let harvestedPlants = []
    for (const plant of readyForHarvest) {
        if(plant.type === "Corn") {
            for(let i = 0; i < plant.output/2; i++)
            harvestedPlants.push(plant)
        
            
            
        }
        else {
            for(let i = 0; i < plant.output; i++)
            harvestedPlants.push(plant)

        }
    }
    return harvestedPlants

}
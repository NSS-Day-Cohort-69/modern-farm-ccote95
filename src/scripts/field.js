let growingInField = []

export const addPlant = (seed) => {
    if(Array.isArray(seed) === true) {
         for (const corn of seed) {
            growingInField.push(corn)

            }
        }
        else {
            growingInField.push(seed)

        }
       
    }


export const usePlants = () => {    
    return growingInField
}
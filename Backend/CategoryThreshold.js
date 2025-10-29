// Category Threshold class to category the blood sugar reading
class CategoryThreshold{
    constructor (categoryId, name,
        minValue,
        maxValue,
        description,
        createdBy,
        lastUpdate ){
            this.categoryId=categoryId;
           this.name = name;
        this.minValue= minValue;
        this.maxValue=maxValue;
        this.description = description;
        this.createdBy= createdBy;
        this.lastUpdate= lastUpdate;
        }
    
        //Check whether the value does fall in the range or not
        withInRange(value){
            if(value >=this.minValue&& value<=this.maxValue){
                return true;
            }
            else{
                return false;
            }
        }

        //Update the threshold value
        updateThreshold(minValue, maxValue, description){
            this.minValue =minValue;
            this.maxValue=maxValue;
            this.description=description;
            this.lastUpdate=new Date();
        }

        getThresholdInfo(){
            return `Category:  ${this.name} |
            Range: ${this.minValue} - ${this.maxValue}|
            Description: ${this.description}`;
        }

}module.exports = CategoryThreshold;

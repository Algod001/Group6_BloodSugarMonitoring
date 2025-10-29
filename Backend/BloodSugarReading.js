//BloodSugarReading class

const CategoryThreshold =require("./CategoryThreshold");

class BloodSugarReading{
    constructor (readingId,
        patientId,
        value,
        timestamp,
        foodIntake,
        activity,
        notes ){
            this.readingId=readingId;
            this.patientId=patientId;
            this.value=value;
            this.timestamp=timestamp;
            this.foodIntake=foodIntake;
            this.activity=activity;
            this.notes=notes;
            this.category="";
        }

        //retriving the specific blood sugar reading
        getReading(readingId){
            if(this.readingId ==readingId){
                return this;
            } else{
                return null;
            }
        }

        //Update the blood sugar reading
        updateReading(value, foodIntake, activity, notes){
            this.value=value;
            this.foodIntake=foodIntake;
            this.activity=activity;
            this.notes=notes;
        }

        //Assigning the correct category
        categorizeReading(threshold){
           for(let i= 0; i< threshold.length; i++){
            if(threshold[i].withInRange(this.value)){
                this.category=threshold[i].name;
                return this.category;
            }
           }
           this.category ="unknown";
           return this.category;
        }

        //Displaying a fomatted reading
        displayreading(){
            return`
            Reading ID: ${this.readingId}
            Patient ID: ${this.patientId}
            value: ${this.value}
            Category: ${this.category}
            Food Intake: ${this.foodIntake}
            Activity: ${this.activity}
            Notes: ${this.notes}
            Timestamp:${this.timestamp.toLocaleString()}`;
        }
        }
module.exports = BloodSugarReading;

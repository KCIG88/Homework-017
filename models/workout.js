const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercise: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter type of excercise(resistance,cardio).",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter name of excercise.",
      },
      duration: {
        type: Number,
        required: "Enter duration of excercise in number of minutes.",
      },
      weight: {
        type: Number,
        required: "Enter weight used in excercise.",
      },
      rep: {
        type: Number,
        required: "Enter number of reps.",
      },
      set: {
        type: Number,
        required: "Enter number of sets.",
      }
    }
  ]
},
{
toJSON: {
  virtuals: true
}
}
);
workoutSchema.virtual("totalDuration").get(function () {
return this.exercises.reduce((total, exercise) => {
return total + exercise.duration;
}, 0);
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
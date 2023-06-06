import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"

const WorkoutForm = () => {
    const [name, setName] = useState('')
    const [weight,setWeight] = useState('')
    const [reps, setReps] = useState('')
    const [muscleGroup,setMuscleGroup] = useState('')
    const [difficulty,setDifficulty] = useState('')
    const [error,setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async(e) => {

        const workout = {name, weight, reps, muscleGroup, difficulty}

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setName('')
            setWeight('')
            setReps('')
            setMuscleGroup('')
            setDifficulty('')
            setError(null)
            console.log('new workout added', json)

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group container">
                <div className="row">
                    <div className="col-4">
                        <label for="workoutName">Workout Name</label>
                        <input 
                            type="text" 
                            className={emptyFields.includes('title') ? 'error form-control' : 'form-control'} 
                            id="workoutName" 
                            aria-describedby="name" 
                            placeholder="Enter workout"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="col-4">
                        <label for="weight">Weight (in lbs)</label>
                        <input 
                            type="number" 
                            className={emptyFields.includes('weight') ? 'error form-control' : 'form-control'} 
                            id="number" 
                            aria-describedby="weight" 
                            placeholder="Enter weight"
                            onChange={(e) => setWeight(e.target.value)}
                            value={weight}
                        />
                    </div>
                    <div className="col-4">
                    <label for="reps">Reps</label>
                        <input 
                            type="number" 
                            className={emptyFields.includes('weight') ? 'error form-control' : 'form-control'} 
                            id="reps" 
                            aria-describedby="reps" 
                            placeholder="Enter reps"
                            onChange={(e) => setReps(e.target.value)}
                            value={reps}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label for="group">Muscle Group</label>
                            <select className={emptyFields.includes('muscleGroup') ? 'error form-control' : 'form-control'}  id="group" onChange={(e) => setMuscleGroup(e.target.value)}>
                            <option>Chest</option>
                            <option>Back</option>
                            <option>Arms</option>
                            <option>Legs</option>
                            <option>Shoulders</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <label for="diff">Difficulty</label>
                        <select className={emptyFields.includes('difficulty') ? 'error form-control' : 'form-control'}  id="diff" onChange={(e) => setDifficulty(e.target.value)}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </div>
                </div>

                <button className="btn btn-primary my-3 submitFormButton">Add Workout</button>
                {error && <div className = "lead">{error}</div>}
            
            </div>
        </form>
    )
}

export default WorkoutForm
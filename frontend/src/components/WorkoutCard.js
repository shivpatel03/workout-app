import 'bootstrap/dist/css/bootstrap.min.css'


const WorkoutCard = ({ workout }) => {
    const id = workout._id
    const href = "api/workouts/" + id
    const handleClick = async () => {
        const response = await fetch('api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok){ 
            window.location.reload(false) // refresh the page
        }
    }
    return (
        <a className="btn workout-details container card bg-secondary rounded pt-3 text-light mb-3">
            <h4>{workout.name} ({workout.muscleGroup})</h4>
            <div className="row">
                <div className="col-4">
                    <p className="lead"><strong>Weight: </strong>{workout.weight}</p>
                </div>
                <div className="col-4">
                    <p className="lead"><strong>Reps: </strong>{workout.reps}</p>
                </div>
                <div className="col-4">
                    <p className="lead"><strong>Difficulty (1-10): </strong>{workout.difficulty}</p>
                </div>
                <p className="lead">{workout.createdAt}</p>
                <span className="btn" onClick={handleClick}>Delete</span>
            </div>
        </a>
    )
} 

export default WorkoutCard
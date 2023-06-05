import 'bootstrap/dist/css/bootstrap.min.css'


const WorkoutCard = ({ workout }) => {
    return (
        <div className="workout-details container bg-secondary rounded pt-3 text-light">
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

            </div>
            <p className="lead">{workout.createdAt}</p>
        </div>
    )
} 

export default WorkoutCard
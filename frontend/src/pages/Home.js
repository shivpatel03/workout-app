import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState }  from 'react'

import WorkoutCard from '../components/WorkoutCard'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts') // sends a get request to backend server
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    }, [])

    return (
        <div className="">
            <div className="row">
                <div className="m-4 col-7 ">
                    <h4>Your Workouts</h4>  
                    {workouts && workouts.map((workout) => (
                        <WorkoutCard className="" key={workout._id} workout={workout} />
                    ))}                    
                </div>
                <div className="col-4">
                    <h4>Add a New Workout</h4>
                    <WorkoutForm />
                </div>
            </div>
        </div>
    )
}

export default Home
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreatePage = () => {

    const [name, setName]       = useState('');
    const [reps, setReps]       = useState('');
    const [weight, setWeight]   = useState('');
    const [unit, setUnit]       = useState('');
    const [date, setDate]       = useState('');
    
    
    const history = useHistory();

    const addExercises = async () => {
        const newExercise = { name, reps, weight,unit, date };
        const response = await fetch('/exercises', {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the Exercise!");
        } else {
            alert(`Failed to add Exercise, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Add an Exercise to your list!</h2>
            <p>Input the values and press ADD to add an excersise to your list!</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Exercise Being Added</legend>
                    <label for="name">Exercise name</label>
                    <input
                        type="text"
                        placeholder="Name of the Exercise"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label for="reps">Reps</label>
                    <input
                        type="number"
                        value={reps}
                        placeholder='0'
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <label for="weight">Weight</label>
                    <input
                        type="number"
                        placeholder="0"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                    <label for="unit">Unit</label>
                    <select id="unit" name="units"  onChange={e => setUnit(e.target.value)}>
                    <option value="kg">kg</option>
                    <option value="lbs" selected>lbs</option>
                    <option value="km">km</option>
                    <option value="miles">miles</option>
                    </select>
                    
                    <label for="date">Date</label>
                    <input
                        type="Date"
                        placeholder="00/00/00"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addExercises}
                        id="submit"
                    >Add</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreatePage;

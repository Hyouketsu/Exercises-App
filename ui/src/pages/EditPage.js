import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditExercisePage = ({ exercise }) => {
 
    const [name, setName]       = useState(exercise.name);
    const [reps, setReps]       = useState(exercise.reps);
    const [weight, setWeight]   = useState(exercise.weight);
    const [unit, setUnit]       = useState(exercise.unit);
    const [date, setDate]       = useState(exercise.date);
    
    
    const history = useHistory();

    const editexercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name,
                reps: reps,
                weight: weight,
                unit: unit,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert("Successfully edited document!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update document. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    }

    return (
        <div class="editor">
        <article>
            <h2>Edit Exercise on the list</h2>
            <p>Edit Exercise on the list by changing the values and clicking Save!</p>
            <form class="editform" onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Exercise you are editing</legend>
                    <label for="name">Exercise name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label for="reps">Reps</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <label for="weight">Weight</label>
                    <input
                        type="number"
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
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={editexercise}
                        id="submit"
                    >Save</button></label>
                </fieldset>
                </form>
            </article>
        </div>
    );
}
export default EditExercisePage;
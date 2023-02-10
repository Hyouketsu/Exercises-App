import React from 'react';
import Exercise from './Exercise.js';



function ExerciseTable({ exercises, onDelete, onEdit }) {
    return (
        <table id="exercisetable">
            <caption>Add and Edit Exercises</caption>
            <thead>
                <tr>
                    <th scope="top">Name</th>
                    <th scope="top">Reps</th>
                    <th scope="top">Weight</th>
                    <th scope="top">Unit</th>
                    <th scope="top">Date</th>
                    <th scope="top">Delete</th>
                    <th scope="top">Edit</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => 
                    <Exercise 
                    exercise={exercise} 
                    key={i}
                    onDelete={onDelete}
                    onEdit={onEdit} 
                />)}
            </tbody>
        </table>
    );
}

export default ExerciseTable;


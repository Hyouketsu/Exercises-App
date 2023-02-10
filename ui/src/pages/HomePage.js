import React from 'react';
import ExerciseTable from '../components/exercisetable';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setex }) {
    // Use the history for updating
    const history = useHistory();

    // Use state to bring in the data
    const [exers, setExers] = useState([]);

    // RETRIEVE the list of exers
    const loadExers = async () => {
        const response = await fetch('/exercises');
        const exers = await response.json();
        setExers(exers);
    } 
    

    // UPDATE a exers
    const onEditExers = async exer => {
        setex(exer);
        history.push("/edit");
    }


    // DELETE a exers  
    const onDeleteMovie = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/exercises');
            const movies = await getResponse.json();
            setExers(movies);
        } else {
            console.error(`Failed to delete exer with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD the exers
    useEffect(() => {
        loadExers();
    }, []);
    // LOAD the exers

    return (
        <>
            <article>
                <h2>Your excercises</h2>
                <ExerciseTable
                    exercises={exers} 
                    onEdit={onEditExers} 
                    onDelete={onDeleteMovie} 
                />
            </article>
        </>
    );
}

export default HomePage;
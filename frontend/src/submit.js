import React, { useState } from 'react';
import { useStore } from './store'; // Import the Zustand store
import PipelineResult from './piplineResult';
import "./submit.css";

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);  // Get nodes from the store
    const edges = useStore((state) => state.edges);  // Get edges from the store

    const [result, setResult] = useState(null); // State to store the result

    const handleSubmit = async (nodes, edges) => {
        try {
            // Send nodes and edges to the backend
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nodes: nodes, 
                    edges: edges,
                }),
            });

            // Parse the JSON response from the backend
            const result = await response.json();
            setResult(result); // Store the result in state

        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the pipeline.');
        }
    };

    return (
        <div>
            <button className="submit-button" onClick={() => handleSubmit(nodes, edges)}>
                Submit Pipeline
            </button>
            {result && <PipelineResult result={result} />}
        </div>
    );
};

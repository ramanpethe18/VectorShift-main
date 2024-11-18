import React from 'react';

const PipelineResult = ({ result }) => {
    if (!result) return null; // Don't render anything if there's no result yet

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Pipeline Analysis Result</h2>
            <div style={styles.content}>
                <p style={styles.text}><strong>Number of nodes:</strong> {result.num_nodes}</p>
                <p style={styles.text}><strong>Number of edges:</strong> {result.num_edges}</p>
                <p style={styles.text}><strong>Is DAG:</strong> {result.is_dag ? 'Yes' : 'No'}</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '24px',
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        backgroundColor: '#ffffff',
        maxWidth: '500px',
        margin: '20px auto',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
    },
    title: {
        fontSize: '1.5em',
        marginBottom: '16px',
        fontWeight: '600',
        color: '#1C2536',
        borderBottom: '2px solid #1C2536',
        paddingBottom: '8px',
    },
    content: {
        lineHeight: '1.6',
    },
    text: {
        fontSize: '1em',
        margin: '8px 0',
        color: '#1C2536',
    },
};

export default PipelineResult;

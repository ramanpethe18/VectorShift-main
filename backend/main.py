from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import networkx as nx

app = FastAPI()

# Allow CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

class Pipeline(BaseModel):
    nodes: List[dict]
    edges: List[dict]

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    # Create a directed graph
    G = nx.DiGraph()

    # Add nodes and edges to the graph
    G.add_nodes_from([node['id'] for node in nodes])
    G.add_edges_from([(edge['source'], edge['target']) for edge in edges])

    num_nodes = len(G.nodes)
    num_edges = len(G.edges)
    is_dag = nx.is_directed_acyclic_graph(G)

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}

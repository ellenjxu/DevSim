# DevSim

A playground for automated RL env and physics simulations for Devin. Uses MuJoCo Wasm for live rendering.

## Usage

Render: `node server.js`

API:

- `/api/pendulum` POST for changing mass, length of rods, and initial parameters in pendulum.xml

- `api/state` GET request for getting the current state of the Mujoco environment in a parsable JSON format (eg. current position x,y,z of the mass and timestep)

## demo

https://github.com/ellenjxu/DevSim/assets/56745453/700f1913-0f52-447d-bdbe-a6ee04e2a9b3


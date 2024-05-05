# DevSim

A playground for automated RL env and physics simulations for Devin. Uses MuJoCo Wasm for live rendering.

## Usage

### Run with Devin

Playbooks in `playbook/` to automatically set up Devin with MuJoCo and create new environments.

1. Run playbook `mujoco_wasm.devin.md`, take a snapshot to save sim environment
2. Modify and run `mujoco_create_env.devin.md` for Devin to create and render simulation env

### Test locally

Render: `node server.js`

API:

- `/api/pendulum` POST for changing mass, length of rods, and initial parameters in pendulum.xml

- `api/state` GET request for getting the current state of the Mujoco environment in a parsable JSON format (eg. current position x,y,z of the mass and timestep)

## demo

Devin is instructed to create an RL environment with 2 red balls and 1 blue ball, and automatically spins up a MuJoCo instance with live rendering/web access and makes a PR. (demo below, 4x speed)

https://github.com/ellenjxu/DevSim/assets/56745453/3be93afc-0c58-44ba-abbb-3f3b3180ca39

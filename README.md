# DevSim

A playground for automated RL env and physics simulations for Devin.

## Usage

### Run with Devin

We've created playbooks (`playbook/`) for enabling Devin to create new physics environments with MuJoCo.

1. Run playbook `mujoco_wasm.devin.md`, take a snapshot to save sim environment
2. Modify and run `mujoco_create_env.devin.md` from snapshot for Devin to create a new simulation env (uses MuJoCo WebAssembly for live rendering.)

### Test locally

Render: `node server.js`

API:

- `/api/pendulum` POST for changing mass, length of rods, and initial parameters in pendulum.xml

- `api/state` GET request for getting the current state of the Mujoco environment in a parsable JSON format (eg. current position x,y,z of the mass and timestep)

## demo

Devin is instructed to create an RL environment with 2 red balls and 1 blue ball, and automatically spins up a MuJoCo instance with live rendering/web access and makes a PR. (demo below, 4x speed)

https://github.com/ellenjxu/DevSim/assets/56745453/3be93afc-0c58-44ba-abbb-3f3b3180ca39

---

Built in a weekend with Devin technical preview (2nd place at Cognition hackathon)

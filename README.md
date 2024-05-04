# Mujoco WASM

Live rendering: `node server.js`

API:

- `/api/pendulum` POST for changing mass, length of rods, and initial parameters in pendulum.xml

- `api/state` GET request for getting the current state of the Mujoco environment in a parsable JSON format (eg. current position x,y,z of the mass and timestep)

---

Modified from https://github.com/zalo/mujoco_wasm/

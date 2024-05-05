# Mujoco WASM

Live rendering: `node server.js`

API:

- `/api/pendulum` POST for changing mass, length of rods, and initial parameters in pendulum.xml

- `api/state` GET request for getting the current state of the Mujoco environment in a parsable JSON format (eg. current position x,y,z of the mass and timestep)

![image](https://github.com/ellenjxu/mujoco_wasm/assets/56745453/4f93ff5f-9d01-4255-9afa-4d83574db265)


---

Modified from https://github.com/zalo/mujoco_wasm/

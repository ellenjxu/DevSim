Playbook: Create shared Mujoco physics simulation

## Overview

Setup Mujoco physics environment, simulate and render in browser, host and expose it on a port, and let the user view it.

## Procedure

1. Install Mujoco `pip install mujoco`

2. Install the mujoco_wasm library to render in browser

- Clone the repository
  `git clone https://github.com/ellenjxu/mujoco_wasm.git
cd mujoco_wasm`

- Install Node dependencies
  `npm install`

3. Start the web server and ensure the port is open.
   `node server.py`

4. Deploy to a live public server and send the user the url to watch the rendered simulation

## Specification

- Server with rendered Mujoco is hosted successfully
- Port is exposed
- URL is sent to user
- Simulation is fully runnable and viewable from browser
- Rendering has been verified visually

## Advice and Pointers

- Follow install instructions to make sure all dependencies are met
- Test the WebGL rendering separately to ensure WebAssembly is working correctly
- Verify the files are hosted locally first
- To update the simulation: Add .xml file to mujoco_wasm/examples/scenes/ and update main.js initial_scene to point to this new file

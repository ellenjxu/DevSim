Playbook: Create new shared Mujoco physics simulation

## Overview

Demo of creating a physics environment in Mujoco.

## Procedure

1. cd to mujoco_wasm/examples/scene and create `ball_scene.xml`

2. Use Mujoco meshes to create 2 red balls and 1 blue ball on a plane. You can view other examples in the folder as reference.

3. Edit mujoco_wasm/main.js to replace initial_scene from "humanoid.xml" with "ball_scene.xml"

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

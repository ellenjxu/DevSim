Playbook: Create shared Mujoco physics simulation

## Overview

Setup Mujoco physics environment, simulate and render in browser, host and expose it on a port, and let the user view it.

## Procedure

1. Create a temporary directory in your workspace called simulations
2. Install Mujoco `pip install mujoco`
3. Create a `simple_scene.xml` in the simulations directory with the starter scene:

<!-- simple scene -->
<mujoco>
    <worldbody>
        <body name="floor" pos="0 0 0">
            <geom type="plane" size="1 1 0.1" />
        </body>
        <body name="object" pos="0 0 1">
            <geom type="box" size="0.1 0.1 0.1" density="1000"/>
        </body>
    </worldbody>
    <actuator/>
    <sensor/>
</mujoco>

4. Create a `simulation.py` python file which loads the environment from xml

`import mujoco
model = mujoco.MjModel.from_xml_path('simple_scene.xml')`

5. Install the mujoco_wasm library to run MuJoCo simulation in the browser

- Install emscripten. Make sure python3 and cmake are installed first.

  `git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh`

- Build the mujoco_wasm Binary

`mkdir build
cd build
emcmake cmake ..
make`

6. Render the MuJoCo scene using WebGL

7. Encode the rendered frames as a video stream (e.g. Motion JPEG)

8. Create a basic Python web server that streams the simulation, using `flask`. Create the video stream in the browser using an HTML5 video element

9. Start the web server and ensure the port is open. Send the user the url to watch the rendered simulation

## Specification

- Server with rendered Mujoco is hosted successfully
- Port is exposed
- URL is sent to user
- Simulation is fully runnable and viewable from browser
- Rendering has been verified visually

## Advice and Pointers

- Follow install instructions to make sure all dependencies are met
- Test the WebGL rendering separately to ensure WebAssembly is working correctly

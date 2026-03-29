---
title: Rubiks Robot
description: Passion project to mechanically solve the Rubik's cube
hero: /assets/projects/rubiks-robot/hero.png
skills: [3D Printing, CAD, Python]
order: 4
heroMode: scale-to-width
---

### Background

The Rubik's Cube is a deceptively simple object. Six faces, three layers, one rule — and yet the number of possible states exceeds 43 quintillion. The branching factor is enormous, which makes it a genuinely interesting algorithmic problem. I've been fascinated by it for years, and building an automated solver felt like the natural intersection of that interest with hands-on engineering.

The project requires integrating four distinct domains: mechanical design and fabrication, electrical hardware, software, and search theory. None of them are trivial in isolation. Getting them to work together reliably is the real challenge.

### Structural Design

The mechanical interface between the robot and the cube is the hardest part of the physical design. The cube needs to be held firmly enough for consistent motor coupling, but not so rigidly that it can't flex slightly during turns — real Rubik's Cubes have tolerance built into their geometry and rely on it.

I designed a custom interface component in Onshape through several iterations and 3D printed each version to test fit and torque transmission. The frame itself is a simple cross-braced structure for motor mounting — straightforward to build, but the tolerance requirements for the motor shaft connections were tight and required careful calibration.

![CAD model of the interface component designed for hardware joinery](/assets/projects/rubiks-robot/assembly.png)

The cube is assembled around the robot after construction rather than inserted, which sidesteps the tolerance problem almost entirely. An inelegant solution, but a practical one.

![3D printed parts interfacing with the physical cube faces](/assets/projects/rubiks-robot/interface.png)

### Electrical Hardware

After experimenting with servo motors and multiplexing approaches, I settled on a dedicated NEMA-17 stepper motor per face, driven by DRV8824 circuits on a breadboard. Six motors, six drivers, biphasic wiring with full 1.8° step resolution.

At a minimum step delay of 600 microseconds, theoretical rotation time per quarter-turn is approximately 0.12 seconds — fast enough for the solver to work in reasonable time. The current open issue is position drift over many consecutive cycles: steppers are open-loop, so accumulated error eventually desynchronizes the motor from the actual face position. The fix is an optical encoder on each axis, which is the next hardware milestone.

### Software

The control stack runs Python on a Raspberry Pi, with GPIO connections to the breadboard. Data structures and cube state logic are handled in Python; the solving algorithm is an A* search implementation currently in development. Solving time is expected to decrease significantly as the heuristic function is tuned.

The final deliverable will log and display solving time improvements across algorithm iterations — tracking both the search efficiency and the physical execution time as hardware improvements are made.

### Wrapping Up

This project has been one of the most satisfying things I've worked on. It demands patience — integration bugs across mechanical, electrical, and software systems are slow to isolate — but the payoff of watching the physical machine actually turn a face is immediate and concrete. The skills it's building in systems integration, embedded programming, and iterative hardware design translate directly to professional work in a way that purely academic projects rarely do.

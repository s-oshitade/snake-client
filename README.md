# Snake Client Project
## Author
[Seun Oshitade](https://www.linkedin.com/in/seun-oshitade-53001120b/)
## Purpose

NOTE: This project was completed by [me](https://www.linkedin.com/in/seun-oshitade-53001120b/) as part of my learnings at Lighthouse Labs, with targeted learning outcomes. In-scope concepts include the creation of TCP clients using Node's built-in net module; as well as callbacks, asynchronous control flow, modules in Node, writing modular code, refactoring code, working with stdin.

## About 
The Snake Game is a very popular video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/lighthouse-labs/snek-multiplayer). 

## Final Product

![](https://docs.replit.com/images/tutorials/19-snake-pygame/snake-game.gif)


## Getting Started

- Follow steps inside the [snek server repo](https://github.com/lighthouse-labs/snek-multiplayer) to set up the server side. Upon installation, run the server with the command `npm run play`.
- Clone [this](https://github.com/s-oshitade/snake-client) Client repository, cd into the cloned folder and use the `node play.js` command to start playing!.
- `Specify the initials of the player` for each instance of the client as a command line input after entering the `node play.js` command.


## Controlling the Snake

Use the following keyboard commands to control the snake:

> `w` - move up one square (unless facing down) 

>`a` - move down one square (unless facing up)

>`s` - move left one square (unless facing right)

>`d` - move right
 one square (unless facing left)

## Getting the Snake to sssssspeak!

Use keyboard inputs `x, y, z and c` to pass fun comments on-screen. Find out what the snake has to ssssay! 🙂


 ## Acknowledgement
 Credit to Lighthouse Labs for providing a rich platform that offered needed guidance in the course of this project.

 ## Continuous Improvement
 With time, further development may be undertaken to enrich the multi-user features of this application.

 ## License
 This project is open source and available under the MIT license.

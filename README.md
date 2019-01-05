# gameOfLife

The Game of Life is a cellular automaton invented by Cambridge mathematician John Conway. It consists of a collection of cells that can live, die, or multiply according to a few basic rules, implemented here in JavaScript. Depending on the initial conditions, the cells form various patterns throughout the course of the game.

For a cell that is filled, or "alive": 
-If it has one or no neighbors, it dies, as if by solitude.
-If it has four or more neighbors, it dies, as if by overpopulation.
-If it has two or three neighbors, it survives.

For a cell that is empty, or "dead":
-If it gains three neighbors, it becomes "alive."

I initally implemented a game of life in vanilla JavaScript as part of a workshop while studying at the Grace Hopper Academy. In this project, I implemented it using React and Redux. 

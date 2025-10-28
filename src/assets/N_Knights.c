// N-Knights Chess Problem Simulation
// A Twist to the Eight Queens Problem
// Vasupradha Ramji

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

//A macro constant for n
#define N 6

//Function prototypes
int ** createBoard (int n); //Initializes board
void printSolution (int ** boardArr); //Prints solution board
int isSafe(int ** boardArr, int numRow, int numCol); //Checks if square is safe
int countSafe(int ** boardArr, int n); //Counts knights previously placed
int solveKnights(int ** boardArr, int n, int maxK, int row, int col); //A wrapper function to solve problem

int main(void) {
  int ** board = createBoard(N); //Creates a board with n * n

  printf("Displaying initial board...\n");
  //Iterates through each square
  for(int i = 0; i < N; i++) {
    for(int j = 0; j < N; j++) {
      printf(" %d ", board[i][j]); //Prints initial unoccupied board
    }
    printf("\n");
  }

  //Logic to calculate maximum knights placed
  int maxK;

  //If n is even case
  if(N % 2 == 0) {
    maxK = (N * N) / 2; //Divides total squares by 2
  }

  //If n is odd case
  else {
    maxK = (N * N + 1) / 2; //Rounds up for case odd n
  }

  //Calls solveKnights to simulate problem
  if(solveKnights(board, N, maxK, 0, 0) == 0) {
    //If no solution exists, 0 returned
    printf("No solution exists.\n");
  }

  //If solution was found
  else {
    //Prints board solution
    printSolution(board);
  }

  //Iterates through each row
  for(int i = 0; i < N; i++) {
    free(board[i]); //Frees each row of board
  }

  free(board); //Frees board memory

  return 0;
}

//creates a 2D array to fit the board with specified size n (size of each row and column)
int ** createBoard (int n)
{
  //Dynamic memory allocation for board
  int ** board = malloc(n * sizeof(int *));

  for(int i = 0; i < n; i++) {
    board[i] = malloc(n * sizeof(int));
  }

  //Initializes each square to 0
  for(int i = 0; i < n; i++) {
    for(int j = 0; j < n; j++) {
      board[i][j] = 0;
    }
  }

  return board; //Returns board 2D array
}

//function that will print the board
void printSolution (int ** boardArr)
{
  printf("Printing a solution in matrix format...\n");

  //Iterates through each square, matrix form
  for(int i = 0; i < N; i++) {
    for(int j = 0; j < N; j++) {
      printf(" %d ", boardArr[i][j]); //Prints value at each square
    }
    printf("\n");
  }

  printf("Printing the whole solution...\n");

  int knightCount = 0; //Counter variable for knights

  //Iterates through board
  for(int i = 0; i < N; i++) {
    for(int j = 0; j < N; j++) {
      //If square holds 1
      if(boardArr[i][j] == 1) {
        knightCount++; //Increments knight counter
        printf("K%d ", knightCount); //Displays knight in square
      }

      //If square holds 0, print dash
      else {
        printf(" - ");
      }
    }

    printf("\n");
  }

  printf("%d Knights have been placed on the board.\n", knightCount);
}

//determines if there is a conflict between knights
int isSafe(int ** boardArr, int numRow, int numCol)
{
  //Arrays defining 8 possible knight moves
  int rowMoves[] = {-2, -2, -1, -1, 1, 1, 2, 2};
  int colMoves[] = {-1, 1, -2, 2, -2, 2, -1, 1};

  //Iterats through each move
  for(int i = 0; i < 8; i++) {
    int rowMove = numRow + rowMoves[i]; //Calculates row of move
    int colMove = numCol + colMoves[i]; //Calculates column of move

    //If row and column are within bounds
    if(rowMove >= 0 && rowMove < N && colMove >= 0 && colMove < N) {

      //If knight found at square, return 0
      if(boardArr[rowMove][colMove] == 1) {
        return 0;
      }
    }
  }

  return 1; //Otherwise, return 1
}

int countSafe(int ** boardArr, int n)
{
  int count = 0; //Counter variable

  //Iterates through board
  for(int i = 0; i < n; i++) {
    for(int j = 0; j < n; j++) {
      //If knight is at square
      if(boardArr[i][j] == 1) {
        count++; //Increments counter
      }
    }
  }

  return count; //Returns number of knights placed
}

/* Recursively iterates through each square in
board. Simulates the problem by checking
if square is safe and backtracking. */
int solveKnights(int ** boardArr, int n, int maxK, int row, int col)
{
  //Loops until a value is returned
  while(1) {
    //If the current square is safe
    if(isSafe(boardArr, row, col)) {
      boardArr[row][col] = 1; //Places knight on square

      int safeCount = countSafe(boardArr, n); //Calculates knights placed

      //Base Case:
      //If maximum knights placed
      if (safeCount == maxK)
        return 1; //Returns 1

      col++; //Moves to next column

      /* If column goes out of bounds,
      wrap around to next row */
      if(col >= n) {
        col = col % n; //Modulus calculates new column
        row++; //Moves up one row

        //If row goes out of bounds
        if(row >= n) {
          return 0; //Returns 0, arrangement not possible
        }
      }

      //Recursive call for next square
      if(solveKnights(boardArr, n, maxK, row, col)) {
        return 1; //If 1 returned, return 1
      }

      //If 0 is returned, backtracking needed
      else {
        col--; //Moves back one column

        //If column out of bounds
        if(col < 0) {
          col = n - 1; //Calculates new column at last column
          row--; //Moves to previous row

          //If row out of bounds
          if(row < 0) {
            return 0; //Returns 0, no solution possible
          }
        }
      }

      boardArr[row][col] = 0; //Removes previous knight
    }

    col++; //Moves up one column

    //If column out of bounds
    if(col >= n) {
      col = col % n; //Modulus calculates new column
      row++; //Moves up one row

      //If row out of bounds
      if(row >= n) {
        return 0; //Returns 0, arrangement not possible
      }
    }
  }
}
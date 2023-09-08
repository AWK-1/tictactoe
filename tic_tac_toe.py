# Tic Tac Toe game logic

# Create an empty board
board = [' '] * 9

# Function to print the board
def print_board():
    print(board[0] + ' | ' + board[1] + ' | ' + board[2])
    print('---------')
    print(board[3] + ' | ' + board[4] + ' | ' + board[5])
    print('---------')
    print(board[6] + ' | ' + board[7] + ' | ' + board[8])

# Function to check if the board is full
def is_board_full():
    return ' ' not in board

# Function to check if there is a winner
def is_winner(player):
    winning_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # columns
        [0, 4, 8], [2, 4, 6]              # diagonals
    ]
    for combination in winning_combinations:
        if board[combination[0]] == board[combination[1]] == board[combination[2]] == player:
            return True
    return False

# Function to make a move
def make_move(player, position):
    board[position] = player

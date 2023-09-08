// Tic Tac Toe game interface

// Array to represent the Tic Tac Toe board
var board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

// Function to make a move
function makeMove(position) {
    // Check if the selected position is already occupied
    if (board[position] !== ' ') {
        return;
    }

    // Make the move
    board[position] = 'X'; // Assuming the player is always X

    // Update the UI
    var cell = document.getElementsByClassName('cell')[position];
    cell.innerHTML = 'X'; // Assuming X represents the player's move

    // Call the Python backend to update the game logic
    fetch('/make_move', {
        method: 'POST',
        body: JSON.stringify({
            position: position
        })
    })
    .then(response => response.json())
    .then(data => {
        // Update the game logic based on the response from the Python backend
        board = data.board;

        // Update the UI based on the updated game logic
        for (var i = 0; i < 9; i++) {
            var cell = document.getElementsByClassName('cell')[i];
            cell.innerHTML = board[i];
        }

        // Check for a winner or a tie
        if (data.winner) {
            alert('You win!');
        } else if (data.tie) {
            alert('It\'s a tie!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

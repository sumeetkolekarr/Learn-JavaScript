// if else else-if
// switch-case
// early return Statements

// Rock-Paper-Scissors game with early return statements

function rps(user, comp){
    if (user === comp) return 'draw';

    if (user === 'rock' && comp === 'scissor') return 'user';
    if (user === 'scissor' && comp === 'paper') return 'user';
    if (user === 'paper' && comp === 'rock') return 'user';

    return 'computer'
}

console.log(rps('rock', 'paper'))
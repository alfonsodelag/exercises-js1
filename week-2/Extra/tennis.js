function tennisScore(aPoints, bPoints) {
    const isGameStarting = aPoints <= 3 && bPoints <= 3;
    if (isGameStarting) {
        return startingGameScore(aPoints, bPoints)
    } else {
        const scoreDifference = aPoints - bPoints;
        return endGameScore(scoreDifference)
    }
}

function startingGameScore(aPoints, bPoints) {
    return calculateScore(aPoints) + ", " + calculateScore(bPoints);
}

// Función auxiliar
function calculateScore(points) {
    // ! Intentar usando switch
    if (points === 0) {
        return "Love"
    } else if (points === 1) {
        return "Fifteen"
    } else if (points === 2) {
        return "Thirty"
    } else if (points === 3) {
        return "Forty"
    }
}

function endGameScore(scoreDifference) {
    if (scoreDifference === 0) {
        return "Deuce";
    } else if (scoreDifference === 1) {
        return "Advantage for Player A"
    } else if (scoreDifference === -1) {
        return "Advantage for Player B"
    } else if (scoreDifference >= 2) {
        return "Player A won"
    } else {
        return "Player B won"
    }
}

console.log("Love, Love ===", tennisScore(0, 0));
console.log("Fifteen, Love ===", tennisScore(1, 0));
console.log("Love, Fifteen ===", tennisScore(0, 1));
console.log("Thirty, Fifteen ===", tennisScore(2, 1));
console.log("Thirty, Love ===", tennisScore(2, 0));
console.log("Thirty, Forty ===", tennisScore(2, 3));
console.log("Forty, Forty ===", tennisScore(3, 3));
console.log("Advantage for Player A ===", tennisScore(4, 3));
console.log("Player A won ===", tennisScore(5, 1));
console.log("Deuce ===", tennisScore(4, 4));
console.log("Advantage for Player B ===", tennisScore(4, 5));
console.log("Deuce ===", tennisScore(5, 5));
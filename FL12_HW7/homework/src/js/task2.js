const RANGE1 = 0;
const RANGE2 = 8;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
let currentPrize = 100;
let userNumber;
let userWon = false;
let wannaPlay = confirm('Do you want to play a game?');

if (wannaPlay === false) {
  alert('You did not become a millionaire, but can.');
} else {

  let randomNumber = Math.round(Math.random() * (RANGE2 - RANGE1));
  let prize = 0;
  let currentAttemptPrize = 0;
  let attempt = 3;
  let second = false;

  while (userNumber !== randomNumber || second === true && attempt > 0) {
    if (attempt === THREE) {
      currentAttemptPrize = currentPrize;
    } else if (attempt === TWO) {
      currentAttemptPrize = currentPrize / TWO;
    } else if (attempt === ONE) {
      currentAttemptPrize = currentPrize / FOUR;
    }

    let output = `
Enter a number from ${RANGE1} to ${RANGE2}
Attempts left: ${attempt}
Total prize: ${prize}$
Possible prize on a current attempt: ${currentAttemptPrize}$ `;
    userNumber = +prompt(output, '');
    if (userNumber === randomNumber) {
      if (attempt === THREE) {
        prize += currentPrize;
      } else if (attempt === TWO) {
        prize += currentPrize / TWO;
      } else if (attempt === ONE) {
        prize += currentPrize / FOUR;
      }

      alert(`Thank you for your participation. Your prize is: ${prize}… $`);
      userWon = confirm('Would you like to play again?');
      if (userWon === true) {
        randomNumber = Math.round(Math.random() * (RANGE2 + FOUR - RANGE1));
        attempt = THREE;
        currentPrize *= TWO;

        while (userNumber !== randomNumber && userWon === true && attempt > 0) {
          if (attempt === THREE) {
            currentAttemptPrize = currentPrize;
          } else if (attempt === TWO) {
            currentAttemptPrize = currentPrize / TWO;
          } else if (attempt === ONE) {
            currentAttemptPrize = currentPrize / FOUR;
          }
          output = `
Enter a number from ${RANGE1} to ${RANGE2 + FOUR}
Attempts left: ${attempt}
Total prize: ${prize}$
Possible prize on a current attempt: ${currentAttemptPrize}$ `

          userNumber = +prompt(output, '');
          if (userNumber === randomNumber) {
            if (attempt === THREE) {
              prize += currentPrize;
            } else if (attempt === TWO) {
              prize += currentPrize / TWO;
            } else if (attempt === 1) {
              prize += currentPrize / FOUR;
            }
          }
          attempt--;
          if (attempt === 0) {
            alert(`Thank you for your participation. Your prize is: ${prize}… $`);
            second = confirm('Would you like to play again?');
            userWon = false;
            prize = 0;
            attempt = THREE;
            if (second === false) {
              attempt = 0;
              break;
            }
          }
        }
      }

    }
    attempt--;
    if (attempt === 0) {
      alert(`Thank you for your participation. Your prize is: ${prize}… $`);
      second = confirm('Do you want play again?');
      attempt = THREE;
      if (second === false) {
        attempt = 0;
        break;
      }
    }
  }
}

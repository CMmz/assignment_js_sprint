/* Questions
1. Why isn't my final line triggering a bet placement window prompt?
2. How do I ask for 2 numbers? (right now I only ask for 1)
3. How could I have set this up to run on the command line, instead of using window prompts? My thought is to enter the script name into bash, and rewrite the script to output to the console
4. Does the game logic appear to be sound?
 */

function roulette (x) {
    this.balance = x
    this.spin = function (a, b) {
        // spin puts $10 on 2 numbers, $20 total. A payout equals $350 (since only one number is hit). A random number function determines the ball landing number.. Balance is updated. Player is notified and asked about another spin.

        ball_landing = 1 + Math.floor(math.random() * 37)

        if (ball_landing === (a || b)) {
            this.balance += 350
            if (window.confirm("${ball_landing}.${\n} You won $350. New balance: ${this.balance}. Play again?")) {
                roulette.spin(window.prompt(("Enter a number to place $10 on"))
            }

        } else {
            this.balance -= 20
            if (window.alert("${ball_landing}.${\n} You lost $20. New balance: ${this.balance} Play again?")) {
                roulette.spin(window.prompt(("Enter a number to place $10 on"))
            }
        }

    }
}

//Trigger the game to begin. User chooses bank balance
roulette(Math.floor(window.prompt("Enter your starting bankroll")))

//Accept 2 inputs
roulette.spin(window.prompt("Enter a number to place $10 on"))

// make sure to console.log a text output

/*
constants


Data stores (var/let)
-- bankroll


Decisions/Conditionals (if/switch)
--
-- turn win/lose determination
-- game win/lose determination
-- amount


Repeats (for)

Functions (actions)
-- spin
-- turn
-- bet amount

*/










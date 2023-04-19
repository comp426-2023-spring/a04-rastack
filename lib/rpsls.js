// Main file; exports RPS and RPSLS
export { rps, rpsls };


function rps(shot) {
    /* Importable RPS function */
    
    // Possible choices
    let choices = ['rock', 'paper', 'scissors'];
    
    // No argument supplied: return single play shot
    if (shot == undefined) {
	let rand_choice = Math.floor(Math.random() * choices.length);
	if (rand_choice == 0) {
	    return {"player":"rock"};
	} else if (rand_choice == 1) {
	    return {"player":"paper"};
	} else {
	    return {"player":"scissors"};
	}
    }

    // Error if shot is not a valid option
    if (!choices.includes(shot)) {
        throw new RangeError();
    }

    // Computer
    let clu_choice;
    let clu_num = Math.floor(Math.random() * choices.length);
    if (clu_num == 0) {
        clu_choice = 'rock';
    } else if (clu_num == 1) {
        clu_choice = 'paper';
    } else {
	clu_choice = 'scissors';
    }
    
    // Result calculation
    let result;
    shot = shot.toLowerCase();
    if (shot == 'rock' && clu_choice == 'paper' || shot == 'paper' && clu_choice == 'scissors' || shot == 'scissors' && clu_choice == 'rock') {
	result = "lose";
    } else if (shot == 'rock' && clu_choice == 'scissors' || shot == 'paper' && clu_choice == 'rock' || shot == 'scissors' && clu_choice == 'paper') {
	result = "win";
    } else {
	result = "tie";
    }

    // Returns the score
    return { 
        player: shot,
	opponent: clu_choice,
	result: result
    }
}


function rpsls(shot) {
    /* Importable RPSLS function */

    let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    if (shot == undefined) {
	let rand_choice = Math.floor(Math.random() * choices.length);
	if (rand_choice == 0) {
	    return {"player":"rock"};
	} else if (rand_choice == 1) {
	    return {"player":"paper"};
	} else if (rand_choice == 2) {
	    return {"player":"scissors"};
	} else if (rand_choice == 3) {
	    return {"player":"lizard"};
	} else {
	    return {"player":"spock"};
	}
    }

    if (!choices.includes(shot)) {
        throw new RangeError();
    }


    let clu_choice;
    let clu_num = Math.floor(Math.random() * choices.length);
    if (clu_num == 0) {
	clu_choice = 'rock';
    } else if (clu_num == 1) {
	clu_choice = 'paper';
    } else if (clu_num == 2) {
	clu_choice = 'scissors';
    } else if (clu_num == 3) {
	clu_choice = 'lizard';
    } else {
	clu_choice = 'spock';
    }

    let result;
    shot = shot.toLowerCase();
    if (shot == 'rock' && (clu_choice == 'paper' || clu_choice == 'spock') || shot == 'paper' && (clu_choice == 'scissors' || clu_choice == 'lizard') || shot == 'scissors' && (clu_choice == 'rock' || clu_choice == 'spock') || shot == 'lizard' && (clu_choice == 'rock' || clu_choice == 'scissors') || shot == 'spock' && (clu_choice == 'lizard' || clu_choice == 'paper')) {
	result = "lose";
    } else if (shot == clu_choice) {
	result = "tie";
    } else {
	result = "win";
    }
    
    return {
	player: shot,
	opponent: clu_choice,
	result: result
    }
}


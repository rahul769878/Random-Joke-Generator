const jokes = [
            "Where do hamburgers go to dance? The meat-ball.",
             "If you think swimming with dolphins is expensive, you should try swimming with sharks--it cost me an arm and a leg!",
             "Mountains aren't just funny, they are hill areas",
             "Where do you take someone who’s been injured in a peek-a-boo accident? To the I.C.U.",
             "So, I heard this pun about cows, but it’s kinda offensive so I won’t say it. I don’t want there to be any beef between us.",
             "What did Yoda say when he saw himself in 4K? 'HDMI",
             "Why was the broom late for the meeting? He overswept.",
]


function randomJoke() {
    let randomJokes = Math.floor(Math.random() * jokes.length);
     let value = jokes[randomJokes];
     display(value);
};



function display(value) {    
    let output = document.getElementById("joke");
    output.innerHTML = `${value}`;
}



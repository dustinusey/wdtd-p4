// quotes array housing quote objects
const quotes = [
    {
        quote: "Knowledge is power",
        source: "Francis Bacon",
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        source: "Albert Einstein",
    },
    {
        quote: "Hello everyone! I am new to Treehouse and excited to learn frontend web development!",
        source: "Dustin Usey",
        year: "2019",
    },
    {
        quote: "Hello awesome coders! I will be around checking the channels throughout the day. ",
        source: "Brian Jensen",
        citation: "Slack",
        year: "2021",
        tags: [
            'slack', 'greatness', 'SSS', 'nubcake'
        ]
    },
    {
        quote: "Hi, I'm Guil, an instructor here at Treehouse!",
        source: "Guil Hernandez",
        citation: "teamtreehouse.com/",
        year: "400BC",
        tags: [
            'the goat', 'the best to ever do it', 'ole guily guily',
        ]
    }
];

// classNames for the body tag to change bg color/theme
const color_pairs = [
    "ocean", "nord", "bubblegum", "forest", "purplehaze", "sunlight"
]



// event listener on the button to show a new quote by calling printQuote
// event listener on the button to add a class to the body for the bg color/theme
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    printQuote();
    getRandomColor();
});
// function that randomly chooses and returns a quote object from the quotes array
const getRandomQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}
// function to choose a name in an array that corresponds to a CSS rule containing a background color/theme
const getRandomColor = () => {
    const index = Math.floor(Math.random() * color_pairs.length);
    document.querySelector('body').classList = color_pairs[index];
}


// printQuote
const printQuote = () => {
    // gets the randomly selected quote from getRandomQuote
    let current_quote = getRandomQuote();
    // DOM elements object
    let ui = {
        card: document.querySelector('.card'),
        quote: document.querySelector('.quote'),
        source: document.querySelector('.source'),
        citation: document.querySelector('.citation'),
        year: document.querySelector('.year'),
        tags: document.querySelector('.tags ul')
    }
    // resets animation for quote card
    ui.card.addEventListener('animationend', e => {
        ui.card.style.animation = 'none';
    });
    ui.card.style.animation = 'fadeInUp 1s ease forwards';
    // sets DOM elements textContent for quote information
    ui.quote.textContent = current_quote.quote;
    ui.source.textContent = current_quote.source;
    ui.citation.textContent = current_quote.citation;
    ui.year.textContent = current_quote.year;

    // checks if the citation property exists
    const handleCitation = () => {
        if (current_quote.citation) {
            ui.citation.textContent = ` / ${current_quote.citation} `
        }
    }
    // checks if the year property exists
    const handleYear = () => {
        if (current_quote.year) {
            ui.year.textCOntent = ` / ${current_quote.year}`;
        }
    }
    // checks if there are any tags
    const handleTags = () => {
        ui.tags.innerHTML = '';
        if (current_quote.tags) {
            ui.tags.innerHTML = '<li>Tags:</li>';
            current_quote.tags.forEach((tag) => {
                ui.tags.innerHTML += `<li>${tag}</li>`
            })
        }
    }
    // function calls for handlers
    handleCitation();
    handleYear();
    handleTags();
}

// automates the random shuffle of quotes with a 5 second interval
// calls the printQuote function
// calls the getRandomColor function

const setTimer = setInterval(() => {
    printQuote();
    getRandomColor();
}, 4000);

// initializes the quote and bg color on page load
printQuote();
getRandomColor();
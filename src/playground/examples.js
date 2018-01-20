console.log('App.js is running!');

// JSX - Javascript XML
// this can only be run and rendered in conjunction with Babel


//data
const content = {
    title: "Zac's App",
    paragraph: "This is a paragraph.",
    options: []
};


const onFormSubmit = (e) => {
    // stops full-page refresh
    e.preventDefault();

    const option = e.target.elements.option.value;

    // b/c we get a string back for option no matter what
    // we can analyze if it's 'truthy' b/c if it's an empty
    // string, then that will return as false
    if (option) {
        content.options.push(option);

        // wipes the input after submitting
        e.target.elements.option.value = '';

        renderContentApp();
    }
};

const onRemoveAll = () => {

    content.options = [];

    renderContentApp();

};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * content.options.length);
    const option = content.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderContentApp = () => {
    // referencing onFormSubmit, not calling it
    const template = (
        <div>
            <h1>{content.title}</h1>
            {content.paragraph && <p>{content.paragraph}</p>}
            <p>{content.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={content.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    content.options.map((item) => {
                        return <li key={item}>{item}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

// renderContentApp();



















// Visibility App
// following app works
const toggleVisibility = () => {
    visibility = !visibility;

    render();
};

let visibility = false;


const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>This is some text</p>
                </div>
            )}
        </div>

    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

//render();





// practice examples



// the data
const user = {
    name: 'Zac',
    age: 29,
    location: 'New York'
};

// the function, which determines what is rendered
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}



const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());






// the template variable
const templateTwo = (
    
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}

    </div>
);



// button example
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const renderCounterApp = () => {
    const templateFour = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateFour, appRoot);
};

//renderCounterApp();







class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi! I am ${ this.name }!`;
    }
    getDescription() {
        return `${ this.name } is ${ this.age } years(s) old.`
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        
        if (this.location) {
            greeting += ` My location is ${this.location}.`;
        }

        return greeting;
    }

}

const me = new Traveler('Zac Moss', 29, 'Lafayette');
console.log(me.getGreeting());
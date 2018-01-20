class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
                {/* Not calling handlePick here, just referencing it, hence no () */}
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }
    removeAll() {
        console.log(this.props.options);
    }
    render() {
        return (
            <div>
                <button onClick={this.removeAll}>Remove All</button>
                <ol>
                    {
                        //this is accessing the array of options, looping through
                        // with the .map() and using each individual option
                        // as the key and printing it to the ordered list
                        this.props.options.map((option) => {
                            return <Option key={option} optionText={option}/>;
                        })
                    }
                </ol>
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption (e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            alert('Must enter an option');
        } 
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
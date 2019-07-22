import React, {Component} from 'react';

class Search extends Component {
    state = {
        text: ''
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        if (this.state.text === '' ) {
            this.props.setAlert('Пожалуйста введите что-нибудь', 'light');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
    };

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit.bind(this)} >
                    <input type="text" name="text" placeholder="Найти пользователей" value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Искать" className="btn btn-dark btn-block"/>
                </form>
                {this.props.showClear && (<button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Очистить</button>)}
            </div>
        );
    }
}

export default Search;
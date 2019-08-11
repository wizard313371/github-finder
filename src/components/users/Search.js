import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
    const githubContext = useContext(GithubContext);

    const [text, setText] = useState('');

    const onChange = e => setText(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            githubContext.setAlert('Пожалуйста введите что-нибудь', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    };

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input type="text" name="text" placeholder="Найти пользователей" value={text}
                       onChange={onChange}/>
                <input type="submit" value="Искать" className="btn btn-dark btn-block"/>
            </form>
            {githubContext.users.length > 0 && (
                <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Очистить</button>)}
        </div>
    );
}

export default Search;
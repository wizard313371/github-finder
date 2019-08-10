import React, { useState } from 'react';

const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {
    const [text, setText] = useState('');

    const onChange = e => setText(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            setAlert('Пожалуйста введите что-нибудь', 'light');
        } else {
            searchUsers(text);
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
            {showClear && (
                <button className="btn btn-light btn-block" onClick={clearUsers}>Очистить</button>)}
        </div>
    );
}

export default Search;
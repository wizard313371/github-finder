import React, {Component, Fragment} from 'react';
import Spinner from '../layouts/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';


class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            company,
            followers,
            following,
            public_repos,
            public_gists,
            hireable

        } = this.props.user;

        const { loading, repos } = this.props;

        if (loading) return <Spinner/>;

        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>Назад</Link>
                В поиске работы:{' '}
                {hireable ? (<i className='fas fa-check text-success' />) : (<i className='fas fa-times-circle text-danger' />)}
                <div className='card grid-2'>
                    <div className="all-center">
                        <img src={avatar_url} className='round-img' alt="" style={{width:'150px'}}/>
                        <h1>{name}</h1>
                        <p>Местоположение: {location}</p>
                    </div>
                    <div>
                        {bio && (
                            <Fragment>
                                <h3>О себе:</h3>
                                <p>{bio}</p>
                            </Fragment>
                        )}
                        <a href={html_url} className='btn btn-dark my-1'>Профиль на Github</a>
                        <ul>
                            <li>
                                {login && (
                                    <Fragment>
                                        <strong>Имя пользователя: </strong> {login}
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                {company && (
                                    <Fragment>
                                        <strong>Компания: </strong> {company}
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                {blog && (
                                    <Fragment>
                                        <strong>Сайт:  </strong> {blog}
                                    </Fragment>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Подписчики: {followers}</div>
                    <div className="badge badge-success">Подписки: {following}</div>
                    <div className="badge badge-light">Публичные репозитории: {public_repos}</div>
                    <div className="badge badge-dark">GISTS: {public_gists}</div>
                </div>

                <Repos repos={repos}/>
            </Fragment>
        );
    }
}

export default User;
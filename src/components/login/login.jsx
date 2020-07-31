import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {withHeader} from '../../hocs/with-header/with-header.jsx';
import {APP_ROUTE} from '../../data/constants';

class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    const {onLogin} = this.props;

    evt.preventDefault();

    onLogin({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    return (
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={this._handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email"
                  placeholder="Email" required="" ref={this.loginRef} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password"
                  placeholder="Password" required="" ref={this.passwordRef} />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={`${APP_ROUTE.ROOT}Amsterdam`} className="locations__item-link">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default withHeader(Login);

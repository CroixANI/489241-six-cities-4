import React from 'react';

import Footer from '../footer/footer.jsx';

const NotFound = () => {
  return (
    <>
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Page not found</h1>
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">404 - Page not found</b>
              <p className="cities__status-description">We could not find requested page</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;

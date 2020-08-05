import React from 'react';

import Footer from '../footer/footer.jsx';

const OfferLoading = () => {
  return (
    <>
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Loading...</h1>
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">Please wait</b>
              <p className="cities__status-description"></p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OfferLoading;

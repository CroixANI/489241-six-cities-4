import React from 'react';
import PropTypes from 'prop-types';

import ReviewsList from '../reviews-list/reviews-list.jsx';
import OfferRating from './offer-rating.jsx';
import OfferMap from './offer-map.jsx';
import OfferCard from '../offer-card/offer-card.jsx';

const MAX_NEAR_PLACES = 3;

const Offer = (props) => {
  const {offer, onOfferTitleClick} = props;
  const {
    title,
    price,
    rating,
    type,
    luxuryType,
    isBookmarked,
    images,
    capacity,
    features,
    host,
    description,
    reviews,
    nearPlaces,
    location
  } = offer;

  const limitedNearPlaces = nearPlaces.slice(0, MAX_NEAR_PLACES);
  const locations = limitedNearPlaces.map((nearOffer) => nearOffer.location);

  const tag = luxuryType
    ? <div className="property__mark">
      <span>{luxuryType}</span>
    </div>
    : <></>;

  const additionalAvatarClass = host.isPro ? `property__avatar-wrapper--pro` : ``;
  const hostAvatarClass = `property__avatar-wrapper user__avatar-wrapper ${additionalAvatarClass}`;

  const additionalClass = isBookmarked ? `property__bookmark-button--active` : ``;
  const bookmarkButtonClass = `property__bookmark-button button ${additionalClass}`;

  return (
    <>
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((url, index) => (
                  <div key={`${index}-${url}`} className="property__image-wrapper">
                    <img className="property__image" src={url} alt={type} />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {tag}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className={bookmarkButtonClass} type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <OfferRating rating={rating} />
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {capacity.bedRoomsCount} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {capacity.adultsCount} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {features.map((feature) => (
                      <li key={feature} className="property__inside-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={hostAvatarClass}>
                      <img className="property__avatar user__avatar" src={host.imageUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    {description.split(/\r?\n/).map((text, index) => (
                      <p key={index} className="property__text">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
                <ReviewsList reviews={reviews} />
              </div>
            </div>
            <OfferMap activeLocation={location} locations={locations} />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {limitedNearPlaces.map((place) => (
                  <OfferCard key={place.id} offer={place} onHover={() => {}}
                    onTitleClick={onOfferTitleClick} containerCssClass='near-places__card'
                    imageWrapperCssClass='near-places__image-wrapper' />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

Offer.propTypes = {
  onOfferTitleClick: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    luxuryType: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    capacity: PropTypes.shape({
      bedRoomsCount: PropTypes.number.isRequired,
      adultsCount: PropTypes.number.isRequired
    }),
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      imageUrl: PropTypes.string.isRequired
    }),
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }).isRequired,
    description: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      reviewText: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isPro: PropTypes.bool.isRequired,
        imageUrl: PropTypes.string.isRequired
      }).isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    })).isRequired,
    nearPlaces: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          rating: PropTypes.number.isRequired,
          type: PropTypes.string.isRequired,
          luxuryType: PropTypes.string.isRequired,
          isBookmarked: PropTypes.bool.isRequired,
          images: PropTypes.arrayOf(PropTypes.string).isRequired,
          location: PropTypes.shape({
            city: PropTypes.string.isRequired,
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired
          }),
        })
    ).isRequired
  }).isRequired
};

export default Offer;

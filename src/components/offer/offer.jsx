import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OfferLoading from '../offer-loading/offer-loading.jsx';
import NotFound from '../not-found/not-found.jsx';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import Rating from '../rating/rating.jsx';
import Map from '../map/map.jsx';
import OfferCard from '../offer-card/offer-card.jsx';
import Error from '../error/error.jsx';
import {withClassName} from '../../hocs/with-class-name/with-class-name.jsx';
import {withHeader} from '../../hocs/with-header/with-header.jsx';
import {getOfferById, getIsDataLoaded} from '../../reducer/data/selectors';
import {getNearBy} from '../../reducer/offer-data/selectors';
import {OperationCreator as DataOperationCreator} from '../../reducer/data/data';
import {OperationCreator as OfferDataOperationCreator} from '../../reducer/offer-data/offer-data';

const MAX_NEAR_PLACES = 3;

class Offer extends PureComponent {
  constructor(props) {
    super(props);

    this._handleFavoriteToggle = this._handleFavoriteToggle.bind(this);
  }

  componentDidMount() {
    const {onComponentUpdate} = this.props;
    const id = Number(this.props.match.params.id);
    onComponentUpdate(id);
  }

  componentDidUpdate(prevProps) {
    const {onComponentUpdate} = this.props;
    const id = Number(this.props.match.params.id);
    if (Number(prevProps.match.params.id) !== id) {
      onComponentUpdate(id);
      window.scrollTo(0, 0);
    }
  }

  _handleFavoriteToggle() {
    const {onFavoriteToggle, offer} = this.props;
    onFavoriteToggle(offer);
  }

  render() {
    const {offer, nearBy, onFavoriteToggle, isDataLoaded} = this.props;

    if (!offer && isDataLoaded) {
      return (<NotFound />);
    } else if (!offer && !isDataLoaded) {
      return (<OfferLoading />);
    }

    const {
      id,
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
      location,
    } = offer;

    const limitedNearPlaces = nearBy.slice(0, MAX_NEAR_PLACES);
    const locations = limitedNearPlaces.map((nearOffer) => nearOffer.location);
    const OfferMap = withClassName(`property__map`, Map);
    const OfferRating = withClassName(`property__stars`, Rating);

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
      <main className="page__main page__main--property">
        <Error />
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
                <button onClick={this._handleFavoriteToggle} className={bookmarkButtonClass} type="button">
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
                    <img className="property__avatar user__avatar" src={`/${host.imageUrl}`} width="74" height="74" alt="Host avatar" />
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
              <ReviewsList currentOfferId={id} />
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
                  onFavoriteToggle={onFavoriteToggle} containerCssClass='near-places__card'
                  imageWrapperCssClass='near-places__image-wrapper' />
              ))}
            </div>
          </section>
        </div>
      </main>
    );
  }
}

Offer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onComponentUpdate: PropTypes.func.isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
      city: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired,
        }),
      }),
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }).isRequired,
    description: PropTypes.string.isRequired,
  }),
  nearBy: PropTypes.arrayOf(PropTypes.shape({
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
      city: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired,
        }),
      }),
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }).isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  nearBy: getNearBy(state),
  offer: getOfferById(state, Number(ownProps.match.params.id)),
  isDataLoaded: getIsDataLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteToggle(offer) {
    dispatch(DataOperationCreator.toggleFavoriteFlag(offer));
  },
  onComponentUpdate(offerId) {
    dispatch(OfferDataOperationCreator.loadReviews(offerId));
    dispatch(OfferDataOperationCreator.loadNearBy(offerId));
  },
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(withHeader(Offer));

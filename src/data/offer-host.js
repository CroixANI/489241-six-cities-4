class OfferHost {
  constructor(id, name, imageUrl, isPro) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.isPro = isPro;
  }
}

const createOfferHost = (hostData) =>
  new OfferHost(hostData.id, hostData.name, hostData.avatar_url, hostData.is_pro);

export {createOfferHost};

export default OfferHost;

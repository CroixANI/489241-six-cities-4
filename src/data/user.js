class User {
  constructor(id, name, imageUrl, isPro) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.isPro = isPro;
  }
}

const createUser = (hostData) =>
  new User(hostData.id, hostData.name, hostData.avatar_url, hostData.is_pro);

export {createUser};

export default User;

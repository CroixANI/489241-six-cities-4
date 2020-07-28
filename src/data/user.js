class User {
  constructor(id, name, email, imageUrl, isPro) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.imageUrl = imageUrl;
    this.isPro = isPro;
  }
}

const createUser = (hostData) =>
  new User(hostData.id, hostData.name, hostData.email, hostData.avatar_url, hostData.is_pro);

const createUserDto = (user) => ({
  'avatar_url': user.imageUrl,
  'email': user.email,
  'id': user.id,
  'is_pro': user.isPro,
  'name': user.name
});

export {createUser, createUserDto};

export default User;

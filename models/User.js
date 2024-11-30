const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  clan: String,
  village: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}) 
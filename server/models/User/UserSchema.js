const { Schema, model } = require('mongoose');
const schema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  person: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
}, { collection: 'users' });

const UserSchema = model('User', schema);

module.exports = UserSchema;
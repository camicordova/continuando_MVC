var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var Schema = mongoose.Schema;

var userSchema = Schema({
    name: {
        type: String,
        default: '',
        required: true
    },
    lastname: {
        type: String,
        default: '',
        required: true
    },
    password: {
        type: String,
        default: '',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    deleted: {
        type: Boolean,
        default: false
    },
}, {
    collection: 'user',
    usePushEach: true
});

userSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();
    if (typeof user.password != 'undefined') {
        bcrypt.genSalt(10, function (errr, salt) {
            bcrypt.hash(user.password, salt, function (err, hash) {
                user.password = hash;
                next();
            });
        });
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User; 
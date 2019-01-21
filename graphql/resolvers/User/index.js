import User from "../../../models/User";
var mongodb = require('mongodb');

export default {
  Query: {
    user: (root, args) => {
      return new Promise((resolve, reject) => {
        User.findOne({ _id: args.id }).exec((err, res) => {
          console.log(res)
          err ? reject(err) : resolve(res);
        });
      });
    },
    users: () => {
      return new Promise((resolve, reject) => {
        User.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
    loginUser: (root, args) => {
      return new Promise((resolve, reject) => {
        User.findOne(args).exec((err, res) => {
          if (res === null) {
            reject("Email/Password are not valid")
          } else {
            err ? reject(err) : resolve(res);
          }
        });
      });
    }
  },
  Mutation: {
    addUser: (root, { name, email, password, address, city, gender, phoneNumber }) => {
      const newUser = new User({ name, email, password, address, city, gender, phoneNumber });

      return new Promise((resolve, reject) => {
        User.findOne({ email }).exec((err, res) => {
          if (err) {
            reject(err)
          } else if (res === null) {
            newUser.save((err, res) => {
              err ? reject(err) : resolve(res);
            });
          } else {
            reject("Email is already exists.")
          }
        });

      });
    },
    editUser: (root, args) => {
      return new Promise((resolve, reject) => {
        const id = args.id
        delete args.id
        args.updateDate = Date.now()

        User.findOneAndUpdate({ _id: id }, { $set: args }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteUser: (root, args) => {
      return new Promise((resolve, reject) => {
        User.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    changePasswordUser: (root, { id, currentPassword, newPassword }) => {
      return new Promise((resolve, reject) => {
        const info = {
          password: newPassword,
          updateDate: Date.now()
        }

        User.findOneAndUpdate({ _id: id, password: currentPassword }, { $set: info }, { new: true }).exec(
          (err, res) => {
            if (err) {
              reject(err)
            } else if (res !== null) {
              resolve(res)
            } else {
              reject("Current Password is not valid.")
            }
          }
        );
      });
    },
    changeUserService: (root, args) => {
      return new Promise((resolve, reject) => {
        const id = args.id
        delete args.id
        args.updateDate = Date.now()

        User.findOneAndUpdate({ _id: id }, { $set: args }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
  }
};
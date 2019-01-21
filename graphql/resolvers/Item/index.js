import Item from "../../../models/Item";
var mongodb = require('mongodb');

export default {
  Query: {
    item: (root, args) => {
      return new Promise((resolve, reject) => {
        Item.findOne({ _id: args.id }).exec((err, res) => {
          console.log(res)
          err ? reject(err) : resolve(res);
        });
      });
    },
    items: () => {
      return new Promise((resolve, reject) => {
        Item.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
    filterItem:(root, args) => {
      return new Promise((resolve, reject) => {
        Item.find(args)
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addItem: (root, args) => {
      const newItem = new Item(args);

      return new Promise((resolve, reject) => {
        Item.findOne({ name:args.name, company: args.company, category: args.category, type: args.type }).exec((err, res) => {
          if (err) {
            reject(err)
          } else if (res === null) {
            newItem.save((err, res) => {
              err ? reject(err) : resolve(res);
            });
          } else {
            reject("Item is already exists.")
          }
        });

      });
    },
    editItem: (root, args) => {
      return new Promise((resolve, reject) => {
        const id = args.id
        delete args.id
        args.updateDate = Date.now()

        Item.findOneAndUpdate({ _id: id }, { $set: args }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteItem: (root, args) => {
      return new Promise((resolve, reject) => {
        Item.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
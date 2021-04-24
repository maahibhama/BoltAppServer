import Plan from "../../../models/Plan";
var mongodb = require("mongodb");
export default {
  Query: {
    plan: (root, args) => {
      return new Promise((resolve, reject) => {
        Plan.findOne({ _name: args.name }).exec((err, res) => {
          console.log(res);
          err ? reject(err) : resolve(res);
        });
      });
    },
    plans: () => {
      return new Promise((resolve, reject) => {
        Plan.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
  },
  Mutation: {
    addPlan: (root, { name, description, price, rating, rating_comments }) => {
      const newPlan = Plan({
        name,
        description,
        price,
        rating,
        rating_comments,
      });

      return new Promise((resolve, reject) => {
        Plan.findOne({ name }).exec((err, res) => {
          if (err) {
            reject(err);
          } else if (res === null) {
            newPlan.save((err, res) => {
              err ? reject(err) : resolve(res);
            });
          } else {
            reject("Something went wrong while adding Plan");
          }
        });
      });
    },
    editPlan: (root, args) => {
      return new Promise((resolve, reject) => {
        const name = args.name;
        delete args.name;

        Plan.findOneAndUpdate(
          { _name: name },
          { $set: args },
          { new: true }
        ).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    deletePlan: (root, args) => {
      return new Promise((resolve, reject) => {
        Plan.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
  },
};

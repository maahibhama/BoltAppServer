import Booking from "../../../models/Booking";
var mongodb = require("mongodb");

export default {
  Query: {
    booking: (root, args) => {
      return new Promise((resolve, reject) => {
        Booking.findOne({ _id: args.id }).exec((err, res) => {
          console.log(res);
          err ? reject(err) : resolve(res);
        });
      });
    },
    bookings: () => {
      return new Promise((resolve, reject) => {
        Booking.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
    filterBooking: (root, args) => {
      return new Promise((resolve, reject) => {
        Booking.find(args)
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
  },
  Mutation: {
    addBooking: (root, args) => {
      const newItem = new Booking(args);

      return new Promise((resolve, reject) => {
        Booking.findOne({
          slot_id: args.slot_id,
          price: args.price,
          description: args.description,
          payment_mode: args.payment_mode,
          payment_status: args.payment_status,
          status: args.status,
          washer_rating: args.washer_rating,
          plan_rating: args.plan_rating,
          washer_rating_comment: args.washer_rating_comment,
          plan_rating_comment: args.plan_rating_comment,
        }).exec((err, res) => {
          if (err) {
            reject(err);
          } else if (res === null) {
            newItem.save((err, res) => {
              err ? reject(err) : resolve(res);
            });
          } else {
            reject("Booking is already exists.");
          }
        });
      });
    },
    editBooking: (root, args) => {
      return new Promise((resolve, reject) => {
        const id = args.id;
        delete args.id;
        args.updateDate = Date.now();

        Booking.findOneAndUpdate(
          { _id: id },
          { $set: args },
          { new: true }
        ).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    deleteBooking: (root, args) => {
      return new Promise((resolve, reject) => {
        Booking.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
  },
};

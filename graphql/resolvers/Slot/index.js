import Slot from "../../../models/Plan";
var mongodb = require("mongodb");

export default {
  Query: {
    slot: (root, args) => {
      return new Promise((resolve, reject) => {
        Slot.findOne({ id: args.id }).exec((err, res) => {
          console.log(res);
          err ? reject(err) : resolve(res);
        });
      });
    },
    slots: () => {
      return new Promise((resolve, reject) => {
        Slot.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
  },
  Mutation: {
    addSlot: (
      root,
      {
        id,
        start_time,
        durationInMinutes,
        washer_id,
        client_id,
        vehical_id,
        availablity,
        plan_id,
        booking_id,
        status,
      }
    ) => {
      const newSlot = new Slot({
        id,
        start_time,
        durationInMinutes,
        washer_id,
        client_id,
        vehical_id,
        availablity,
        plan_id,
        booking_id,
        status,
      });

      return new Promise((resolve, reject) => {
        Slot.findOne({ id }).exec((err, res) => {
          if (err) {
            reject(err);
          } else if (res === null) {
            newSlot.save((err, res) => {
              err ? reject(err) : resolve(res);
            });
          } else {
            reject("Something went wrong while adding Slot");
          }
        });
      });
    },
    editSlot: (root, args) => {
      return new Promise((resolve, reject) => {
        const id = args.id;
        delete args.id;

        Slot.findOneAndUpdate({ _id: id }, { $set: args }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteSlot: (root, args) => {
      return new Promise((resolve, reject) => {
        Slot.findOneAndRemove(args.id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
  },
};

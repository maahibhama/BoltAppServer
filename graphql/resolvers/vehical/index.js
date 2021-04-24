import Vehical from "../../../models/Vehical";
var mongodb = require("mongodb");

export default {
  addVehical: (
    root,
    { name, type, brand, year, vehical_no, client_id, slots }
  ) => {
    const newVehical = new Vehical({
      name,
      type,
      brand,
      year,
      vehical_no,
      client_id,
      slots,
    });

    return new Promise((resolve, reject) => {
      Vehical.findOne({ name }).exec((err, res) => {
        if (err) {
          reject(err);
        } else if (res === null) {
          newVehical.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        } else {
          reject("Something went wrong while adding vehical");
        }
      });
    });
  },
  editVehical: (root, args) => {
    return new Promise((resolve, reject) => {
      const id = args.id;
      delete args.id;

      Vehical.findOneAndUpdate({ _id: id }, { $set: args }, { new: true }).exec(
        (err, res) => {
          err ? reject(err) : resolve(res);
        }
      );
    });
  },
  deleteVehical: (root, args) => {
    return new Promise((resolve, reject) => {
      Vehical.findOneAndRemove(args).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  },
};

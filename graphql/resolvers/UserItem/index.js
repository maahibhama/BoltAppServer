import UserItem from "../../../models/UserItem";
var mongodb = require('mongodb');

export default {
    Query: {
        userItem: (root, args) => {
            return new Promise((resolve, reject) => {
                UserItem.findOne({ userId: args.id }).exec((err, res) => {
                    console.log(res)
                    err ? reject(err) : resolve(res);
                });
            });
        }
    },
    Mutation: {
        addFaviouriteItem: (root, args) => {
            return new Promise((resolve, reject) => {
                const id = args.userId
                UserItem.findOne({ userId: id }).exec((err, res) => {
                    console.log(err, res)
                    if (err) {
                        reject(err)
                    } else if (res === null) {
                        const newUserItem = new UserItem({ userId: id, faviouriteItems: [args.itemId] });
                        newUserItem.save((err, res) => {
                            err ? reject(err) : resolve(res);
                        });
                    } else {
                        UserItem.findOneAndUpdate({ userId: id }, { $set: { faviouriteItems: [...res.faviouriteItems, ...[args.itemId]], updateDate: Date.now() } }, { new: true }).exec(
                            (err, res) => {
                                err ? reject(err) : resolve(res);
                            }
                        );
                    }
                });

            });
        },
        addCartItem: (root, args) => {
            return new Promise((resolve, reject) => {
                const id = args.userId
                UserItem.findOne({ userId: id }).exec((err, res) => {
                    console.log(err, res)
                    if (err) {
                        reject(err)
                    } else if (res === null) {
                        const newUserItem = new UserItem({ userId: id, cartItems: [args.itemId] });
                        newUserItem.save((err, res) => {
                            err ? reject(err) : resolve(res);
                        });
                    } else {
                        UserItem.findOneAndUpdate({ userId: id },
                            {
                                $set: {
                                    cartItems: [...res.cartItems, ...[args.itemId]],
                                    updateDate: Date.now()
                                }
                            }, { new: true }).exec(
                                (err, res) => {
                                    err ? reject(err) : resolve(res);
                                }
                            );
                    }
                });

            });
        },
        deleteFavioriteItem: (root, args) => {
            return new Promise((resolve, reject) => {
                const id = args.userId
                UserItem.findOne({ userId: id }).exec((err, res) => {
                    if (err) {
                        reject(err)
                    } else if (res === null) {
                        reject("Item already unfaviorite.")
                    } else {
                        let faviouriteItems = args.faviouriteItems
            
                        UserItem.findOneAndUpdate({ userId: id },
                            {
                                $set: {
                                    updateDate: Date.now()
                                }
                            }, { new: true }).exec(
                                (err, res) => {
                                    err ? reject(err) : resolve(res);
                                }
                            );
                    }
                });

            });
        },
    }
};
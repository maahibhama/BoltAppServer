import UserItem, { CartItem } from "../../../models/UserItem";
var mongodb = require('mongodb');

export default {
    Query: {
        userItem: (root, args) => {
            return new Promise((resolve, reject) => {
                UserItem.findOne({ userId: args.userId }).exec((err, res) => {
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
                    if (err) {
                        reject(err)
                    } else if (res === null) {
                        const newCart = new CartItem({ itemId: args.itemId })
                        const newUserItem = new UserItem({ userId: id, cartItems: [newCart] });
                        
                        newUserItem.save((err, res) => {
                            err ? reject(err) : resolve(res);
                        });
                    } else {
                        const filterItem = res.cartItems.filter(cartItem => {
                            return cartItem.itemId == args.itemId
                        })
                        console.log("yes" + filterItem)
                        let allItems = []
                        if (filterItem.length > 0) {
                            allItems = res.cartItems.map(cartItem => {
                                if (cartItem.itemId === args.itemId) {
                                    cartItem.count = cartItem.count + 1
                                }
                                return cartItem
                            })
                            console.log(allItems)
                        } else {
                            const newCart = new CartItem({ itemId: args.itemId })
                            allItems = [...res.cartItems, ...[newCart]]
                            console.log("new" +allItems)
                        }
                        
                        UserItem.findOneAndUpdate({ userId: id },
                            {
                                $set: {
                                    cartItems: allItems,
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
                        const faviouriteItems = res.faviouriteItems.filter(id => {
                            return id !== args.itemId
                        })
                        UserItem.findOneAndUpdate({ userId: id },
                            {
                                $set: {
                                    faviouriteItems: faviouriteItems,
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
        deleteCartItem: (root, args) => {
            return new Promise((resolve, reject) => {
                const id = args.userId
                UserItem.findOne({ userId: id }).exec((err, res) => {
                    if (err) {
                        reject(err)
                    } else if (res === null) {
                        reject("Item already removed from cart.")
                    } else {
                        const filterItem = res.cartItems.filter(cartItem => {
                            return cartItem.itemId == args.itemId
                        })
                        console.log("yes" + filterItem)
                        let allItems = res.cartItems
                        if(filterItem.length > 0 && filterItem[0].count == 1){
                            allItems = res.cartItems.filter(cartItem => {
                                return cartItem.itemId !== args.itemId
                            })
                        }
                        else if (filterItem.length > 0) {
                            allItems = res.cartItems.map(cartItem => {
                                if (cartItem.itemId === args.itemId) {
                                    cartItem.count = cartItem.count - 1
                                }
                                return cartItem
                            })
                        } else {
                            reject("Item already removed from cart.")
                        }
                        
                        UserItem.findOneAndUpdate({ userId: id },
                            {
                                $set: {
                                    cartItems: allItems,
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
        }
    }
};
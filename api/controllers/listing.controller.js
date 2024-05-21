const Listing = require("../models/listing.model");

const createListing = async(req, res, next) => {
    try {
        const newListing = new Listing({
            name: req.body.name,
            description: req.body.description,
            address: req.body.address,
            regularPrice: req.body.regularPrice,
            discountedPrice: req.body.discountedPrice,
            bedrooms: req.body.bedrooms,
            bathrooms: req.body.bathrooms,
            furnished: req.body.furnished,
            parking: req.body.parking,
            type: req.body.type,
            offer: req.body.offer,
            imageUrls: req.body.imageUrls,
            userRef: req.user.id,
        });

        const savedListing = await newListing.save();
        res.status(201).json(savedListing);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = { createListing };
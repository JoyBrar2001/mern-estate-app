const Listing = require("../models/listing.model");
const errorHandler = require("../utils/error");

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

const deleteListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    
    if(!listing){
        return next(errorHandler(404, 'Listing not found'));
    }
    
    if(req.user.id !== listing.userRef){
        return next(errorHandler(401, 'You can only delete your own listings!'));
    }

    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json(`Listing has been deleted`);
    } catch (error) {
        next(error);
    }

}

const updateListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);

    if(!listing){
        return next(errorHandler(404, 'Listing not found!'));
    }
    
    if(req.user.id !== listing.userRef){
        return next(errorHandler(401, 'You can only edit your own listing!'));
    }

    try {
        const updatedListing = await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedListing);
    } catch (error) {
        next(error);
    }
}

module.exports = { createListing, deleteListing, updateListing };
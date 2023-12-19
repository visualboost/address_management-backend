const router = require("express").Router();
const mongoose = require("mongoose");
const AddressData = require("./../../db/generated/AddressData");

/**
 * Get a AddressData by _id
 **/
router.get("/addressdata/:_id", async (req, res, next) => {
    try {
        if (!req.params._id) {
            return res
                .status(400)
                .json({
                    error: "Parameter '_id' is required but not provided.",
                });
        }

        const addressdata = await AddressData.findOne(
            { _id: req.params._id },
            "-__v",
            { minimize: true },
        );

        if (!addressdata) {
            return res.status(404).send("Not Found");
        }

        return res.json(addressdata);
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
});

/**
 * Get all AddressData
 **/
router.get("/addressdatas", async (req, res, next) => {
    try {
        const addressdata = await AddressData.find({}, "-__v", {
            minimize: true,
        });

        return res.json(addressdata);
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
});
/**
 * Get all AddressData
 **/
router.get("/addressdatas_1", async (req, res, next) => {
    try {
        const addressdata = await AddressData.find({}, "-__v", {
            minimize: true,
        });

        return res.json(addressdata);
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
});

/**
 * Creates a new AddressData
 **/
router.post("/addressdata", async (req, res, next) => {
    try {
        const input = req.body;

        if (!input.firstname) {
            return res
                .status(400)
                .json({ error: "firstname is required but not provided." });
        }
        if (!input.email) {
            return res
                .status(400)
                .json({ error: "email is required but not provided." });
        }

        let addressdata = await AddressData.create({ ...input });
        addressdata = await AddressData.findOne({ _id: addressdata._id });

        return res.json(addressdata);
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
});

/**
 * Update an existing AddressData
 **/
router.put("/addressdata/:_id", async (req, res, next) => {
    try {
        if (!req.params._id) {
            return res
                .status(400)
                .json({
                    error: "Parameter '_id' is required but not provided.",
                });
        }

        const id = req.params._id;
        const input = req.body;

        if (!input.firstname) {
            return res
                .status(400)
                .json({ error: "firstname is required but not provided." });
        }
        if (!input.email) {
            return res
                .status(400)
                .json({ error: "email is required but not provided." });
        }

        const addressdata = await AddressData.findOneAndUpdate(
            { _id: req.params._id },
            { ...input },
            { new: true, lean: true },
        );

        if (!addressdata) {
            return res.status(404).send("Not Found");
        }

        return res.json(addressdata);
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
});

/**
 * Delete an existing AddressData
 **/
router.delete("/addressdata/:_id", async (req, res, next) => {
    try {
        if (!req.params._id) {
            return res
                .status(400)
                .json({
                    error: "Parameter '_id' is required but not provided.",
                });
        }

        const id = req.params._id;
        const addressdata = await AddressData.findOneAndDelete(
            { _id: req.params._id },
            { __v: 0 },
        );

        if (!addressdata) {
            return res.status(404).send("Not Found");
        }

        return res.json(addressdata);
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
});

module.exports = router;

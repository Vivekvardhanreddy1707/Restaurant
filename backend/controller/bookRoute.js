const express = require("express");
const bookSchema = require("../model/bookSchema");
const { default: mongoose } = require("mongoose");
const bookRoute = express.Router();

bookRoute.post("/create-booking", async (req, res) => {
  console.log("Received request:", req.body);

  // Check if a booking with the same date already exists
  const existingBookings = await bookSchema.find({ date: req.body.date });

  // If there are existing bookings, delete the new booking and respond with an error
  if (existingBookings.length > 0) {
    console.log(`Existing bookings with the same date found. Deleting the new booking.`);
    return res.status(400).json({ error: "Booking with the same date already exists." });
  }

  // Create the new booking
  bookSchema.create(req.body, (err, data) => {
    if (err) {
      console.error("Error creating booking:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Booking created:", data);
    res.json(data);
  });
});

bookRoute.get("/", (req, res) => {
  bookSchema.find((err, data) => {
    if (err) return err;
    else res.json(data);
  });
});

bookRoute
  .route("/update-booking/:id")
  .get((req, res) => {
    bookSchema.find(mongoose.Types.ObjectId(req.params.id), (err, data) => {
      if (err) return err;
      else res.json(data);
    });
  })
  .put((req, res) => {
    bookSchema.findByIdAndUpdate(
      mongoose.Types.ObjectId(req.params.id),
      { $set: req.body },
      (err, data) => {
        if (err) return err;
        else res.json(data);
      }
    );
  });

bookRoute.delete("/delete-booking/:id", (req, res) => {
  bookSchema.findByIdAndRemove(
    mongoose.Types.ObjectId(req.params.id),
    (err, data) => {
      if (err) return err;
      else res.json(data);
    }
  );
});

module.exports = bookRoute;

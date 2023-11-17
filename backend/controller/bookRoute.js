const express = require("express");
const bookSchema = require("../model/bookSchema");
const { default: mongoose } = require("mongoose");
const bookRoute = express.Router();

bookRoute.post("/create-booking",(req,res)=>{
  bookSchema.create(req.body, (err,data) => {
      if(err)
          return err;
      else
          res.json(data);
  })
})

bookRoute.get("/",(req,res)=>{
  bookSchema.find((err,data)=>{
      if(err)
          return err;
      else
          res.json(data);
  })
})

bookRoute.route("/update-booking/:id")
  .get((req, res) => {
    bookSchema.findById(mongoose.Types.ObjectId(req.params.id), (err, data) => {
      if (err)
       return err;
      else 
      res.json(data);
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

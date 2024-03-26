const express = require("express");
const router = express.Router();
const Person = require("./../person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("Data Saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// get method to get person

router.get("/:workType", async (req, res) => {
  const workType = req.params.workType; // extract worktype
  if (workType == "chef" || workType == "manager" || workType == "waiter") {
    const response = await Person.find({ work: workType });
    console.log("Response Fetches");
    res.status(200).json(response);
  } else {
    res.status(404).json({ error: "Invalid work type" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!response) {
      return res.status(404).json({ error: "Person Not Found" });
    }

    console.log("Data Updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async () => {
  try {
    const pId = req.params.id;
    const res = await Person.findOneAndDelete(pId);
    if (!response) {
      return res.status(404).json({ error: "Person Not Found" });
    }
    console.log("Data Deleted");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

const router = require("express").Router();
const User = require("../model/User");
const UserService = require("../service/UserService");

router.post("/", async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      image: req.body.password,
      role: "user",
    };

    await UserService.createUser(user);
    res.status(201).end();
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await UserService.getAllUser();

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserService.getUserById(userId);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

router.put("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    await UserService.updateUser(userId, req.body);

    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
});

router.delete("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    await UserService.deleteUser(userId);
    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

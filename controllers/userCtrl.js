const User = require('../models/User');

//get users
const getUsers = async (req, res) => {
    const users = await User.findAll();
    res.send(users);
}

//create user
const createUser = async (req, res) => {
    await User.create(req.body);
    res.send('User created');
}

//get user by id
const getSingleUser = async (req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    res.send(user);
}

//update user
const updateUser = async (req, res) => {
    const user = await User.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.send(user);
}

//delete user
const deleteUser = async (req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    await user.destroy();
    res.sendStatus(200).json({
        message: 'User deleted'
    });
}


module.exports = {
    getUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser
};
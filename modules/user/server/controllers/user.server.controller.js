'use strict';

import mongoose from 'mongoose';
import User from './../models/user.server.model'

function list(req, res) {
    User.find((err, results) => {
        if (err) { console.log(err); }

        res.send({ users: results });
    });
}

function post(req, res) {
    const data = {
        name: {
            first: req.body.first,
            mi: req.body.mi,
            last: req.body.last
        },
        address: req.body.address || null,
        photo: req.body.photo || null,
        sex: req.body.sex || null,
        group: req.body.group || [],
        birthday: req.body.birthday || null,
        email: req.body.email,
        password: req.body.password,
        mobileNumber: req.body.mobileNumber || null,
        privilege: {
            read: req.body.read || [],
            write: req.body.write || [],
            admin: req.body.admin || []
        }
    }

    function start() {
        if (data instanceof Error) {
            return res.status(400).send({message: data.message})
        }

        const user = new User(data);

        user.save(function(err, obj) {
            if(err) return res.status(400).send(err);
            else return res.status(200).send('Successfully created user.');
        });
    }

    start();
}

export default { list, post };

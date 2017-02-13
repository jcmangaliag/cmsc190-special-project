'use strict';

import mongoose from 'mongoose';
import Group from './../models/groups.server.model'
import User from './../../../user/server/models/user.server.model'

function list(req, res) {
    Group.find((err, results) => {
        if (err) { console.log(err); }

        res.send({ groups: results });
    });
}

function post(req, res) {
    const data = {
        name: req.body.name,
        status: req.body.status,
        description: req.body.description || null,
        photo: req.body.photo || null,
        accessibility: req.body.accessibility || null,
        membership: req.body.membership || null
    }

    function start() {
        if (data instanceof Error) {
            return res.status(400).send({message: data.message})
        }

        const group = new Group(data);

        group.save(function(err, obj) {
            if(err) return res.status(400).send(err);
            else return res.status(200).send('Successfully created group.');
        });
    }

    start();
}

function getMode(req, res) {
    const data = {
        origin: req.body.origin
    }

    data.origin = 'Community' // test
    const email = 'jmmangaliag@up.edu.ph' // test

    function start() {
        User.findOne({'email':email}, 'name privilege', function(err, user) {
            if(err) return res.status(400).send(err);
            else return res.status(200).send(user)
        });
    }

    start();
}

export default { list, post, getMode };

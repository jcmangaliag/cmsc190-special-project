'use strict';

import mongoose from 'mongoose';
import User from './../models/user.server.model'

function list(req, res) {
    User.find((err, results) => {
        if (err) { console.log(err); }

        res.send({ users: results });
    });
}

export default { list };

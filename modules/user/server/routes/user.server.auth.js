import express from 'express';
import passport from 'passport';

import UserSchema from './../models/user.server.model';
import authCtrl from './../controllers/auth.server.controller';

const authRoutes = app => {

    app.route('/auth/register')
      .post(authCtrl.post);

    app.route('/auth/access')
      .post(authCtrl.requestLogin);

    app.post('/auth/login', passport.authenticate('local'),
        function(req, res) {
            res.redirect('/');
        }
    );

    app.get('/auth/session', function(req, res) {
        res.status(200).send(req.user);
    });


    app.all('/auth/logout', function(req, res, next) {
        req.logout();
        res.redirect('/user/entry');
    });

};

export default authRoutes;

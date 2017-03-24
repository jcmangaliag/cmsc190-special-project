import userCtrl from '../controllers/user.server.controller';

const userRoutes = app => {

  app.route('/api/users')
    .get(userCtrl.list);

};

export default userRoutes;

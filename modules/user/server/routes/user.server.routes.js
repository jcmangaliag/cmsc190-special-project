import userCtrl from '../controllers/user.server.controller';

const userRoutes = app => {

  app.route('/api/user')
    .get(userCtrl.list)
    .post(userCtrl.post);

};

export default userRoutes;

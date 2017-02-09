import groupCtrl from '../controllers/groups.server.controller';

const groupRoutes = app => {

  app.route('/api/groups')
    .get(groupCtrl.list)
    .post(groupCtrl.post);

};

export default groupRoutes;

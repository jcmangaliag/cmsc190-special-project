import groupCtrl from '../controllers/groups.server.controller';

const groupRoutes = app => {

  app.route('/api/groups')
    .get(groupCtrl.list)
    .post(groupCtrl.post);

  app.route('/api/groups/mode')
    .get(groupCtrl.getMode);

};

export default groupRoutes;

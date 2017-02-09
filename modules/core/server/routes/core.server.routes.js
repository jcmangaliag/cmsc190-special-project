import homeRoutes from '../../../home/server/routes/home.server.routes';
import groupRoutes from '../../../groups/server/routes/groups.server.routes';

const moduleRoutes = app => {
	homeRoutes(app),
    groupRoutes(app)
};

export default moduleRoutes;

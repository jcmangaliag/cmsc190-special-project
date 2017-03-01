<<<<<<< HEAD
import homeRoutes from '../../../home/server/routes/home.server.routes';
import groupRoutes from '../../../groups/server/routes/groups.server.routes';
=======
>>>>>>> master
import postRoutes from '../../../posts/server/routes/posts.server.routes';
import commentRoutes from '../../../comments/server/routes/comments.server.routes';
import userRoutes from '../../../user/server/routes/user.server.routes';
import authRoutes from '../../../user/server/routes/user.server.auth';

<<<<<<< HEAD
const moduleRoutes = app => {
	homeRoutes(app),
    groupRoutes(app),
=======
const moduleRoutes = (app) => {
>>>>>>> master
	postRoutes(app),
	commentRoutes(app),
    userRoutes(app),
    authRoutes(app)
};

export default moduleRoutes;

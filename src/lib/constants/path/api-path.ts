export enum ApiPath {
    // APP
    APP_INFO = '/app/info',
    APP_HEALTH = '/app/health',

    // AUTH
    AUTH_REGISTER = '/auth/register',
    AUTH_LOGIN = '/auth/login',
    AUTH_DELETE_TOKEN = '/auth/delete-token',
    AUTH_REFRESH_TOKEN = '/auth/refresh',

    // USER
    USER_INFO = '/user',
    USER_UPDATE = '/user',
    USER_DELETE = '/user',

    // POST
    POST_CREATE = '/post',
    POST_GET_ALL = '/post',
    POST_GET_BY_USER_ID = '/post/user/:userId',
    POST_GET_BY_POST_ID = '/post/detail/:postId',
    POST_UPDATE = '/post/:postId',
    POST_DELETE = '/post/:postId',
    POST_GET_BY_RADIUS = '/post/radius',
    POST_GET_BY_BEST = '/post/best',
    POST_GET_BY_MINE = '/post/mine',

    // COMMENT
    COMMENT_CREATE = '/comment',
    COMMENT_GET_BY_USER_ID = '/comment/user/',
    COMMENT_GET_BY_POST_ID = '/comment/post/:postId',
    COMMENT_GET_BY_COMMENT_ID = '/comment/:commentId',
    COMMENT_UPDATE = '/comment/:commentId',
    COMMENT_DELETE = '/comment/:commentId',
    COMMENT_GET_REPLIES = '/comment/:commentId/replies',
}
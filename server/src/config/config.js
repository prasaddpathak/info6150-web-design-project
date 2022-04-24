export const{
SESS_NAME = 'sid',
SESS_SECRET = 'secret!session',
SESS_LIFETIME = 1000 * 60 * 60 * 2
} = process.env;

//these are the environment variables required for the session management
//please dont change the variables
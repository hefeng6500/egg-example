
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 挂载鉴权路由
  app.passport.mount('github');

  router.prefix('/api') // 添加路由前缀

  router.get('/', controller.home.index); // app.jwt 代表该路由会验证 token
  router.get('/getCode', controller.login.getCode);
  router.post('/login', controller.login.login);
  router.get('/success', controller.login.success);
  router.get('/getArticles', controller.article.getArticles);
  router.post('/publishArticle', app.jwt, controller.article.publishArticle);
  
  router.get('/queryUser', controller.user.queryUser);

};

// возвращает страницу "Таблица"
module.exports = {
  get: async function(ctx, next) {

    const fillTablePg = require('../functions/fill_TablePage');
    
    const teamArr = await fillTablePg.fill_table(ctx);   

    await ctx.render('table', {teams: teamArr});    
  },
  getJSON: async function(ctx, next) {

    const fillTablePg = require('../functions/fill_TablePage');
    
    const teamArr = await fillTablePg.fill_table(ctx);   

    ctx.body = teamArr;
    ctx.status = 200;    
  }
}
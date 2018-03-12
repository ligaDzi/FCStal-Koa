// возвращает страницу "Клуб"
exports.get = async function(ctx, next) {

    const fillHistoryTb = require('../functions/fill_HistoryTable');
    
    const table = await fillHistoryTb.fill_historyTable(ctx);   

    await ctx.render('history', {tableResult: table});  
  }
module.exports = {
  port: process.env.PORT || 3000,
  secret: 'mysecret',
  mongoose: {
    uri:    process.env.MONGO_URL,
    options: {
      server: {
        socketOptions: {
          keepAlive: 1
        },
        poolSize:      5
      }
    }
  },
  months: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
            "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"],
  root: process.cwd()
};

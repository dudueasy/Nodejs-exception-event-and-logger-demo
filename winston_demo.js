const winston = require('winston')
require('winston-daily-rotate-file')

let {Logger, transports}  = winston

// define a logger that use two File transports of different levels
// let logger = new Logger({
//   transports: [
//     // transports.file will transport output to target file according to log level
//     new(transports.File)({
//       name: 'error_logger',
//       filename: 'logs/error.log',
//       level: 'error',
//     }),
//     new transports.Console,
//     new (transports.File)({
//       name: 'info_logger',
//       filename: 'logs/info.log',
//       level:'info'
//     })
//   ]
// })
//
// logger.info('log fron logger.info')
// logger.warn('log fron logger.warn')
// logger.error('log fron logger.error')


// define a logger using DailyRotateFile 
const reqLogger  = new Logger({
  transports:[
    new transports.Console,
    new transports.DailyRotateFile(
      {
        filename:'./logs/%DATE%.req_log.log',
        datePattern: 'YYYY_MM_DD',
        level: 'info',
      }
    ) 
  ]
})

const err = new Error('this is a error')
reqLogger.info('log from reqLogger.info', {error: err.stack})

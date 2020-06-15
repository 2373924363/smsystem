var express = require('express')
var router = express.Router()
var connection = require('../db/sql.js')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})
router.get('/list', function (req, res, next) {
  connection.query('select * from guang', function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.get('/yuan', function (req, res, next) {
  connection.query('select * from yuan', function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.get('/pu', function (req, res, next) {
  connection.query('select * from pu', function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.get('/zhong', function (req, res, next) {
  connection.query('select * from zhong', function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.get('/wen', function (req, res, next) {
  connection.query('select * from zong where lei="文具类"', function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.get('/ti', function (req, res, next) {
  connection.query('select * from zong where lei="体育类"', function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.get('/xs', function (req, res, next) {
  connection.query('select * from zong', function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.get('/ku', function (req, res, next) {
  connection.query('select * from zong', function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/tian', function (req, res) {
  let params = [req.body.name, req.body.xing, req.body.phone, req.body.nameid, req.body.pass] //  传来的参数
  let addsql = `insert into yuan(name,xing,phone,nameid,pass,lei) value (?,?,?,?,?,'2')` //  插入语句，?代表插入的值，要插入到test表内容
  connection.query(addsql, params, function (err, result) {
    if (err) throw err
  })
})
router.post('/den', function (req, res) {
  let param = [req.body.nameid1, req.body.nameid2]
  connection.query('select * from guang where nameid=? union select * from yuan where nameid=?', param, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.get('/den1', function (req, res) {
  connection.query('select * from guang union select * from yuan', function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/shan', function (req, res) {
  let params = [req.body.id]
  let ssql = `delete from guang where id=?`
  connection.query(ssql, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/shank', function (req, res) {
  let params = [req.body.id]
  let ssql = `delete from zong where id=?`
  connection.query(ssql, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/shany', function (req, res) {
  let params = [req.body.id]
  let ssql = `delete from yuan where id=?`
  connection.query(ssql, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/shanp', function (req, res) {
  let params = [req.body.id]
  let ssql = `delete from pu where id=?`
  connection.query(ssql, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/shanz', function (req, res) {
  let params = [req.body.id]
  let ssql = `delete from zhong where id=?`
  connection.query(ssql, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/xiu', function (req, res) {
  let params = [req.body.name, req.body.xing, req.body.phone, req.body.pass, req.body.id]
  let ssql = `update guang SET name=?,xing=?,phone=?,pass=? where id=?`
  connection.query(ssql, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/xiup', function (req, res) {
  let params = [req.body.name, req.body.xing, req.body.phone, req.body.jin, req.body.id]
  let ssql = `update pu SET name=?,xing=?,phone=?,jin=? where id=?`
  connection.query(ssql, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/xiuz', function (req, res) {
  let params = [req.body.name, req.body.xing, req.body.phone, req.body.jin, req.body.id]
  let ssql = `update zhong SET name=?,xing=?,phone=?,jin=? where id=?`
  connection.query(ssql, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/xiuk', function (req, res) {
  let params = [req.body.name, req.body.dan, req.body.ku, req.body.id]
  let ssql = `update zong SET name=?,dan=?,ku=? where id=?`
  connection.query(ssql, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/addg', function (req, res) {
  let params = [req.body.name, req.body.xing, req.body.phone, req.body.nameid, req.body.pass]
  let addsql = `insert into guang(name,xing,phone,nameid,pass,lei) value (?,?,?,?,?,'1')`
  connection.query(addsql, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/addp', function (req, res) {
  let params = [req.body.name, req.body.xing, req.body.phone, req.body.jin, req.body.time2]
  let addsql = `insert into pu(name,xing,phone,jin,time) value (?,?,?,?,?)`
  connection.query(addsql, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/addz', function (req, res) {
  let params = [req.body.name, req.body.xing, req.body.phone, req.body.jin, req.body.time2]
  let addsql = `insert into zhong(name,xing,phone,jin,time) value (?,?,?,?,?)`
  connection.query(addsql, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/addzong', function (req, res) {
  let params = [req.body.name, req.body.dan, req.body.ku, req.body.time2, req.body.lei]
  let addsql = `insert into zong(name,dan,ku,chu,tui,jin,time,lei) value (?,?,?,'0','0','0',?,?)`
  connection.query(addsql, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/yuanx', function (req, res) {
  let params = [req.body.id]
  let addsql = 'select * from yuan where id=?'
  connection.query(addsql, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/yuanxx', function (req, res) {
  let params = [req.body.name, req.body.xing, req.body.phone, req.body.pass, req.body.id]
  let addsql = 'update yuan SET name=?,xing=?,phone=?,pass=? where id=?'
  connection.query(addsql, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/yuanmai', function (req, res) {
  let params = [req.body.ku, req.body.chu, req.body.jin1, req.body.id]
  let addsql = 'update zong SET ku=?,chu=?,jin=? where id=?'
  connection.query(addsql, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/yuanaaa', function (req, res) {
  let param = [req.body.name, req.body.dan, req.body.jin, req.body.shu, req.body.time]
  let add = `insert into mai(name,dan,jin,shu,time) value (?,?,?,?,?)`
  connection.query(add, param, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.get('/yuanmaic', function (req, res) {
  let add = `select * from mai`
  connection.query(add, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/yuantui', function (req, res) {
  let params = [req.body.id]
  let add = `delete from mai where id=?`
  connection.query(add, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
router.post('/yuankuh', function (req, res) {
  let params = [req.body.shu1, req.body.shu, req.body.jin, req.body.name]
  let add = `update zong SET chu=chu - ?, tui=tui + ?,jin=jin - ? where name=?`
  connection.query(add, params, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
module.exports = router


var test = require('tape');
var fletcher = require('./');

test(function(t){
  t.plan(2);

  var data = Buffer([1,2,3,4]);

  t.equal(fletcher(data), 5130, 'buffer [1,2,3,4] is 5130');
  t.equal(fletcher(Buffer([])), 0xffff, 'empty buffer is 0xffff');
});

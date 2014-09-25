module.exports = fletcher16;

function fletcher16(buf) {
  var sum1 = 0xff, sum2 = 0xff;
  var i = 0;
  var len = buf.length;

  while (len) {
    var tlen = len > 20 ? 20 : len;
    len -= tlen;
    do {
      sum2 += sum1 += buf[i++];
    } while (--tlen);
    sum1 = (sum1 & 0xff) + (sum1 >> 8);
    sum2 = (sum2 & 0xff) + (sum2 >> 8);
  }
  /* Second reduction step to reduce sums to 8 bits */
  sum1 = (sum1 & 0xff) + (sum1 >> 8);
  sum2 = (sum2 & 0xff) + (sum2 >> 8);
  return sum2 << 8 | sum1;
}

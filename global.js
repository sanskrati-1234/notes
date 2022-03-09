var abc = "123";

function a() {
    var a=1;
  function b() {
      var b=2;
    function c() {
        var c=3;
        console.log(a,b,c,abc);
    }
    c();
  }
  b();
}
a();

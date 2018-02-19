//

QUnit.module("Funcion sumar", function () {
	QUnit.test( "1 + 1 = 2", function (assert) {
	  var resultado = sumar (1, 1);
	  assert.equal( (resultado == 2), "1 + 1 = 2");
	});
});
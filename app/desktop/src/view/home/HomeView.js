Ext.define('MyExtGenApp.view.home.HomeView',{
	xtype: 'homeview',
	cls: 'homeview',
	controller: {type: 'homeviewcontroller'},
	viewModel: {type: 'homeviewmodel'},
	requires: [],
	extend: 'Ext.Container',
  scrollable: true,
  html: `<div style="user-select: text !important;">
  <script type="text/javascript"> 
function trabaja(x){

// o parseFlaot si los queres flotantes
numero1=parseInt(document.getElementById('numero1').value); 
numero2=parseInt(document.getElementById('numero2').value);       

if (x=='suma') {
resultado=numero1+numero2;
document.getElementById('resultado').value=resultado.toFixed(2); 
// 2 decimales
}


if (x=='resta') {
resultado=numero1-numero2;
document.getElementById('resultado').value=resultado.toFixed(2); 
// 2 decimales
}

</script>

  <form name="calculos" action="" method="post">
                <p>
                    <label for="nom">Primer Numero</label>
                    <input type="numero1" name="number" placeholder="10"/>
				</p>
				<label for="cars">Elija una operación:</label>
					<select id="operacion" name="operacion">
						<option value="suma">+</option>
						<option value="resta">-</option>
						<option value="division">/</option>
						<option value="multiplicacion">*</option>
					</select>
				<p>
                    <label for="nom">Segundo Numero</label>
                    <input type="numero2" name="number" placeholder="10"/>
				</p>
                    <input type="submit" value="Enviar"/>
            </form>
</div>`
});
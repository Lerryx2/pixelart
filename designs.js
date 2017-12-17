//i defined the canvas and sizePicker to use them.
const designcanvas = $('#pixel_canvas');
const sizePicker = $('#sizePicker');

function makeGrid() {
          //i used "let" because  "var" allows us to define globaly but "let" allows us to define it in just block of code.
		 let height = $('#input_height').val();// $('#input_height') to acces the case of height and val() to get the value of case.
		 let width = $('#input_width').val();// - // - 
        // it remove the canvas when the user change the values of the inputs box and when user clicks again on submit ,it will appears conform new values..
		designcanvas.children().remove();
        // i used nested loops to create rows and columns 
		for (let x = 1; x <= height; x++) {
			var rowcolumn  = "";
			rowcolumn += "<tr>";
			for (let x = 1; x <= width; x++) {
				rowcolumn += "<td></td>";
			}
			designcanvas.append(rowcolumn + "</tr>");// it will be attached to canvas as a child and it will  return the rows and columns.
		}
}
// Function to color a cell:
function fillCell(clr) {
    clr.preventDefault();
    let color = '';
    switch (clr.buttons) {
        case 1: // when he clicks left it acces the color which user selected.
            color = $('#colorPicker').val();
            break;
        case 2:  // when he clicks right it will return the color white in the box.
            color = '#ffffff';
            break;
    }
    if (color !== '') // if statement which checking if the color is not qual to null 
	{
        $(this).css('background-color', color);// it will fill the the suqares
    }
}
designcanvas.on('mousedown mouseover contextmenu', 'td', fillCell);

//when user will click on submit with his values , it will return the grid.
sizePicker.submit(function(picker) {
    picker.preventDefault();
    makeGrid();
});

/* I'm so sorry for mistakes  */
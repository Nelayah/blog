import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { fade } from 'material-ui/utils/colorManipulator';

const $primary_color_dark = '#7b1fa2',
	$primary_color = '#9c27b0',
	$primary_color_light = '#e1bee7',
	$accent_color = '#cddc39',
	$primary_color_text = '#fff',
	$primary_text_color = '#212121',
	$secondary_text_color = '#757575',
	$divider_color = '#bdbdbd';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: $primary_color,
		primary2Color: $primary_color_dark,
		primary3Color: $primary_color_light,
		accent1Color: $accent_color,
		accent2Color: $secondary_text_color,
		textColor: $primary_text_color,
		alternateTextColor: $primary_color_text,
		borderColor: $divider_color,
		disabledColor: fade($primary_text_color, 0.3),
		clockCircleColor: fade($primary_text_color, 0.07)
	}
});
export default muiTheme;
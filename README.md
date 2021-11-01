## Native Tile Container
Easily create tiled dashboard or menu pages. Enlarge tiles a little to fit screen width.

## Why?
React Native and Mendix support flex layout so creating a responsive page with a few tiles should be easy right? 

Not really. It gets ugly when you want to support different screen sizes and still make sure the tiles fill the available space and are all the same size.

Using a grid layout becomes a problem with rotation and the many different screen sizes.

Using flex grow will only work if the number of buttons on each row is the same. For example if one tile does not fit on the flex row and gets wrapped, it will have a different size than the tiles that are spaced across the full row.

Then add some conditional visibility to the mix and it gets really difficult to achieve and maintain when options, or user roles, are added.

## Features
This widget aims to make life easier when creating responsive tile based pages that work well on a phone and tablet and play nice with the different screen sizes out there. 
- The result is responsive, reacts to device rotation and adjusts to the screen dimensions.
- Specify default and maximum tile width
- Widget adjust tiles to fill available width where possible
- Tiles will always be the same width
- Optionally center the tile set if smaller than available space. 

## Usage
Place the widget on the page. Create as many containers as required. Use the visibility expression to conditionally hide tiles to prevent creating gaps in the tile set.

The default width should accommodate the contents, while the maximum width prevents stretching the tiles beyond breaking point. Make sure the maximum width allows for sufficient space to adjust for different screen sizes, making the page layout similar on low end and high end devices.

## Styling
By default, the widget will add margin equal to `Spacing inner large` to the right and bottom of each tile. On your page, specify `Inner large` for `Spacing left`, do not specify spacing right. 

You can overrule the spacing by creating a custom class in your native theme.

The test project styling uses custom class `tileContainer` and Atlas class `card` to create the tile effect. To create the large button icons, the test project contains several sample classes.
[Link to the file on the GitHub repo](
https://github.com/Itvisors/mendix-NativeTileContainer/blob/main/test/theme/native/testNativeTileWidget.js)

You may of course create your own. The sample uses tiles, also larger containers to show lists can be used. As long as these can be shown using the same width. Height is up to you and could be different.

## Issues, suggestions and feature requests
[link to GitHub issues](https://github.com/Itvisors/mendix-NativeTileContainer/issues)


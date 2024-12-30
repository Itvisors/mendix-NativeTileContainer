import { View } from "react-native";
import { createElement } from "react";

export function DatasourceTileContainer(props) {
    const { dsItems, dsContent, layoutWidth, defaultTileWidth, maximumTileWidth } = props;
    if (!layoutWidth) {
        // console.info("DatasourceTileContainer.render: no layout");
        return null;
    }
    // Start with the default tile width.
    let tileWidth = defaultTileWidth;
    // How many tiles fit on a row?
    let tilesPerRow = Math.floor(layoutWidth / defaultTileWidth);
    // What is the available space left between the last tile and the end of the container?
    let availableSpace = 0;
    if (tilesPerRow <= dsItems.length) {
        availableSpace = layoutWidth % defaultTileWidth;
        // console.info(
        //     "DatasourceTileContainer availableSpace: " + availableSpace + " for " + tilesPerRow + " tiles per row"
        // );
    } else {
        tilesPerRow = dsItems.length;
        availableSpace = 0;
        // console.info("DatasourceTileContainer availableSpace: only " + tilesPerRow + " tiles, less than one row");
    }
    // console.info("DatasourceTileContainer.render: layoutWidth: " + layoutWidth + ", tilesPerRow: " + tilesPerRow);
    // Available space can be divided by the number of tiles?
    if (availableSpace >= tilesPerRow) {
        const additionalTileWidth = Math.floor(availableSpace / tilesPerRow);
        if (defaultTileWidth + additionalTileWidth < maximumTileWidth) {
            tileWidth = defaultTileWidth + additionalTileWidth;
            // console.info("DatasourceTileContainer.render adjust tile width to " + tileWidth);
        } else {
            tileWidth = maximumTileWidth;
            // console.info("DatasourceTileContainer.render adjust tile width to maximum " + tileWidth);
        }
    }
    return (
        <View style={props.styles.tileContainer} testID={`${props.widgetName}$DatasourceTileContainer`}>
            {dsItems.map((item, index) => (
                <View
                    key={"tile_" + index}
                    style={[props.styles.tile, { width: tileWidth }]}
                    testID={`${props.widgetName}$tile_${index}`}
                >
                    {dsContent.get(item)}
                </View>
            ))}
        </View>
    );
}

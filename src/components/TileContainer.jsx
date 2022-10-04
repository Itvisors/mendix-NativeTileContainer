import { View } from "react-native";
import { createElement } from "react";

export function TileContainer(props) {
    const { layoutWidth, defaultTileWidth, maximumTileWidth } = props;
    if (!layoutWidth) {
        // console.info("TileContainer.render: no layout");
        return null;
    }
    // Filter the tiles on visible tiles only
    const visibleTiles = props.tileList.filter(tileItem => !!tileItem.tileVisible.value);
    // Start with the default tile width.
    let tileWidth = defaultTileWidth;
    // How many tiles fit on a row?
    let tilesPerRow = Math.floor(layoutWidth / defaultTileWidth);
    // What is the available space left between the last tile and the end of the container?
    let availableSpace = 0;
    if (tilesPerRow <= visibleTiles.length) {
        availableSpace = layoutWidth % defaultTileWidth;
        // console.info("TileContainer availableSpace: " + availableSpace + " for " + tilesPerRow + " tiles per row");
    } else {
        tilesPerRow = visibleTiles.length;
        availableSpace = 0;
        // console.info("TileContainer availableSpace: only " + tilesPerRow + " tiles, less than one row");
    }
    // console.info("TileContainer.render: layoutWidth: " + layoutWidth + ", tilesPerRow: " + tilesPerRow);
    // Available space can be divided by the number of tiles?
    if (availableSpace >= tilesPerRow) {
        const additionalTileWidth = Math.floor(availableSpace / tilesPerRow);
        if (defaultTileWidth + additionalTileWidth < maximumTileWidth) {
            tileWidth = defaultTileWidth + additionalTileWidth;
            // console.info("TileContainer.render adjust tile width to " + tileWidth);
        } else {
            tileWidth = maximumTileWidth;
            // console.info("TileContainer.render adjust tile width to maximum " + tileWidth);
        }
    }
    return (
        <View style={props.styles.tileContainer}>
            {visibleTiles.map((tileItem, index) => (
                <View key={"tile_" + index} style={[props.styles.tile, { width: tileWidth }]}>
                    {tileItem.content}
                </View>
            ))}
        </View>
    );
}

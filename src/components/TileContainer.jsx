import { Component, createElement } from "react";
import { Tile } from "./Tile";
import { View } from "react-native";

export class TileContainer extends Component {
    render() {
        const { layoutWidth, defaultTileWidth, maximumTileWidth, tileList } = this.props;
        if (!layoutWidth) {
            console.info("TileContainer.render: no layout");
            return null;
        }
        // Start with the default tile width.
        let tileWidth = defaultTileWidth;
        // How many tiles fit on a row?
        let tilesPerRow = Math.floor(layoutWidth / defaultTileWidth);
        // What is the available space left between the last tile and the end of the container?
        let availableSpace = 0;
        if (tilesPerRow <= tileList.length) {
            availableSpace = layoutWidth % defaultTileWidth;
            console.info("TileContainer availableSpace: " + availableSpace + " for " + tilesPerRow + " tiles per row");
        } else {
            tilesPerRow = tileList.length;
            availableSpace = 0;
            console.info("TileContainer availableSpace: only " + tilesPerRow + " tiles, less than one row");
        }
        console.info("TileContainer.render: layoutWidth: " + layoutWidth + ", tilesPerRow: " + tilesPerRow);
        // Available space can be divided by the number of tiles?
        if (availableSpace >= tilesPerRow) {
            const additionalTileWidth = Math.floor(availableSpace / tilesPerRow);
            if (defaultTileWidth + additionalTileWidth < maximumTileWidth) {
                tileWidth = defaultTileWidth + additionalTileWidth;
                console.info("TileContainer.render adjust tile width to " + tileWidth);
            } else {
                tileWidth = maximumTileWidth;
                console.info("TileContainer.render adjust tile width to maximum " + tileWidth);
            }
        }
        return (
            <View style={this.props.styles.tileContainer}>
                {tileList.map((tileItem, index) => (
                    <Tile key={"tile_" + index} styles={this.props.styles} tileWidth={tileWidth}>
                        {tileItem.content}
                    </Tile>
                ))}
            </View>
        );
    }
}

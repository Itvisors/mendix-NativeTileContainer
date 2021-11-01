import { Component, createElement } from "react";
import { View } from "react-native";

export class Tile extends Component {
    render() {
        console.info("Tile.render: " + this.props.tileWidth);
        return <View style={[this.props.styles.tile, { width: this.props.tileWidth }]}>{this.props.children}</View>;
    }
}

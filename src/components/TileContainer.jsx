import { Component, createElement } from "react";
import { Text, View } from "react-native";

export class TileContainer extends Component {
    render() {
        const { layoutWidth } = this.props;
        if (!layoutWidth) {
            console.info("TileContainer.render: no layout");
            return null;
        }
        console.info("TileContainer.render: " + layoutWidth);
        return (
            <View style={this.props.styles.tileContainer}>
                <Text style={{ color: "green" }}>Container width: {layoutWidth}</Text>
            </View>
        );
    }
}

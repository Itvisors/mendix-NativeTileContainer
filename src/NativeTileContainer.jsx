import { Component, createElement } from "react";
import { TileContainer } from "./components/TileContainer";
import { View } from "react-native";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

const defaultStyle = {
    container: {
        alignItems: "flex-start",
        flex: 1
    },
    tileContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    tile: {
        paddingRight: 16,
        paddingBottom: 16
    }
};

export class NativeTileContainer extends Component {
    state = {
        layoutWidth: 0
    };

    render() {
        if (this.props.centerIfTooSmall?.value) {
            console.info("NativeTileContainer.render: center the contents");
            defaultStyle.container = {
                alignItems: "center"
            };
        }
        const styles = mergeNativeStyles(defaultStyle, this.props.style);
        if (this.state.layoutWidth > 0) {
            console.info("NativeTileContainer.render: " + this.state.layoutWidth);
        } else {
            console.info("NativeTileContainer.render: no layout");
        }
        return (
            <View style={styles.container} onLayout={event => this.handleLayoutEvent(event)}>
                {this.state.layoutWidth > 0 && (
                    <TileContainer
                        styles={styles}
                        layoutWidth={this.state.layoutWidth}
                        tileList={this.props.tileList}
                        defaultTileWidth={this.props.defaultTileWidth}
                        maximumTileWidth={this.props.maximumTileWidth}
                    />
                )}
            </View>
        );
    }

    handleLayoutEvent(event) {
        // console.info("handleLayoutEvent");
        const { layout } = event.nativeEvent;
        if (this.state.layoutWidth !== layout.width) {
            // console.info("handleLayoutEvent: set new width on state");
            this.setState({
                layoutWidth: layout.width
            });
        } else {
            // console.info("handleLayoutEvent: width not changed");
        }
    }
}

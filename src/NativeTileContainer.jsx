import { Component, createElement } from "react";
import { TileContainer } from "./components/TileContainer";
import { View } from "react-native";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

const defaultStyle = {
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flex: -1
    },
    tileContainer: {
        flex: -1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    tile: {
        paddingRight: 32,
        paddingBottom: 32
    }
};

export class NativeTileContainer extends Component {
    state = {
        layoutWidth: 0
    };

    render() {
        // Create a separate style class for the alignment.
        // Note that justifyContent must also exist on the default style for this to work.
        // Otherwise, mergeNativeStyles will ignore it.
        const alignmentStyle = {
            container: {
                justifyContent: "flex-start"
            }
        };
        if (this.props.centerIfTooSmall?.value) {
            console.info("NativeTileContainer.render: center the contents");
            alignmentStyle.container.justifyContent = "center";
        }
        const styles = mergeNativeStyles(defaultStyle, [alignmentStyle].concat(this.props.style));
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

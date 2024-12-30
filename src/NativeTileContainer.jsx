import { createElement, useCallback, useMemo, useState } from "react";
import { DatasourceTileContainer } from "./components/DatasourceTileContainer";
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

const TILESOURCE_FIXED_LIST = "fixedList";
const TILESOURCE_DATASOURCE = "datasource";

export function NativeTileContainer(props) {
    const [layoutWidth, setLayoutWidth] = useState(0);

    const handleLayoutEvent = useCallback(
        event => {
            // console.info("handleLayoutEvent");
            const { layout } = event.nativeEvent;
            if (layoutWidth !== layout.width) {
                // console.info("handleLayoutEvent: set new width on state");
                setLayoutWidth(layout.width);
            } else {
                // console.info("handleLayoutEvent: width not changed");
            }
        },
        [layoutWidth]
    );

    const { centerIfTooSmall, style } = props;
    const styles = useMemo(() => {
        // Create a separate style class for the alignment.
        // Note that justifyContent must also exist on the default style for this to work.
        // Otherwise, mergeNativeStyles will ignore it.
        const alignmentStyle = {
            container: {
                justifyContent: "flex-start"
            }
        };
        if (centerIfTooSmall?.value) {
            // console.info("NativeTileContainer.render: center the contents");
            alignmentStyle.container.justifyContent = "center";
        }
        return mergeNativeStyles(defaultStyle, [alignmentStyle].concat(style));
    }, [centerIfTooSmall, style]);

    switch (props.tileSource) {
        case TILESOURCE_FIXED_LIST:
            if (!props.tileList || props.tileList.length === 0) return null;
            break;

        case TILESOURCE_DATASOURCE:
            if (!props.ds?.items || !props.dsContent) return null;
            break;

        default:
            return null;
    }

    if (layoutWidth > 0) {
        // console.info("NativeTileContainer: " + layoutWidth);
    } else {
        // console.info("NativeTileContainer: no layout");
    }
    return (
        <View style={styles.container} onLayout={handleLayoutEvent} testID={`${props.name}$outercontainer`}>
            {layoutWidth > 0 && props.tileSource === TILESOURCE_FIXED_LIST && (
                <TileContainer
                    styles={styles}
                    layoutWidth={layoutWidth}
                    tileList={props.tileList}
                    defaultTileWidth={props.defaultTileWidth}
                    maximumTileWidth={props.maximumTileWidth}
                    widgetName={props.name}
                />
            )}
            {layoutWidth > 0 && props.tileSource === TILESOURCE_DATASOURCE && (
                <DatasourceTileContainer
                    styles={styles}
                    layoutWidth={layoutWidth}
                    dsItems={props.ds?.items}
                    dsContent={props.dsContent}
                    defaultTileWidth={props.defaultTileWidth}
                    maximumTileWidth={props.maximumTileWidth}
                    widgetName={props.name}
                />
            )}
        </View>
    );
}

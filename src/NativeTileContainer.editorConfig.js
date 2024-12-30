import { hidePropertyIn } from "@mendix/pluggable-widgets-tools";

export function getProperties(values, defaultProperties) {
    // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.
    if (values.tileSource !== "fixedList") {
        hidePropertyIn(defaultProperties, values, "tileList");
    }
    if (values.tileSource !== "datasource") {
        hidePropertyIn(defaultProperties, values, "ds");
        hidePropertyIn(defaultProperties, values, "dsContent");
    }
    return defaultProperties;
}

export function check(values) {
    const errors = [];
    // Add errors to the above array to throw errors in Studio Pro.
    if (values.tileSource === "fixedList" && values.tileList.length === 0) {
        errors.push({
            property: "tileList",
            message: "Add at least one tile to the list"
        });
    }
    if (values.tileSource === "datasource") {
        if (!values.ds) {
            errors.push({
                property: "ds",
                message: "Configure the datasource"
            });
        }
        if (values.dsContent.widgetCount === 0) {
            errors.push({
                property: "dsContent",
                message: "Configure the datasource item content"
            });
        }
    }

    return errors;
}

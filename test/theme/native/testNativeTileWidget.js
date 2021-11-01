import { brand, contrast, font, spacing } from "./custom-variables";
import adjustFont from "../../themesource/atlas_core/native/core/helpers/_functions/adjustfont";

export const tileContainer = {
    container: {
        aspectRatio: 1,
        paddingTop: spacing.large,
        alignItems: "center"
    }
};

const btnTileCommon = {
    container: {
        borderWidth: 0,
        borderRadius: 0,
        rippleColor: contrast.lowest,
        backgroundColor: "transparent",
        paddingVertical: 5,
        paddingHorizontal: 0,
        height: 80
    }
};

export const btnTileIcon = { ...btnTileCommon,
    icon: {
        color: brand.primary,
        fontWeight: font.weightBold,
        size: adjustFont(40)
    }
};

export const btnTileIconSuccess = { ...btnTileCommon,
    icon: {
        color: brand.success,
        fontWeight: font.weightBold,
        size: adjustFont(40)
    }
};

export const btnTileBadgePrimary = { ...btnTileCommon,
    caption: {
        fontWeight: font.weightBold,
        fontSize: adjustFont(40),
        lineHeight: adjustFont(40),
        color: brand.primary
    }
};

export const btnTileBadgeSuccess = { ...btnTileCommon,
    caption: {
        fontWeight: font.weightBold,
        fontSize: adjustFont(40),
        lineHeight: adjustFont(40),
        color: brand.success
    }
};

export const btnTileBadgeWarning = { ...btnTileCommon,
    caption: {
        fontWeight: font.weightBold,
        fontSize: adjustFont(40),
        lineHeight: adjustFont(40),
        color: brand.warning
    }
};

export const btnTileBadgedanger = { ...btnTileCommon,
    caption: {
        fontWeight: font.weightBold,
        fontSize: adjustFont(40),
        lineHeight: adjustFont(40),
        color: brand.danger
    }
};

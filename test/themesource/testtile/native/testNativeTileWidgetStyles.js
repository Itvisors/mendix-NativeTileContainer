import { brand, contrast, font, spacing } from "../../../theme/native/custom-variables";
import adjustFont from "../../atlas_core/native/core/helpers/_functions/adjustfont";


export const tileContainer = {
    container: {
        aspectRatio: 1,
        paddingVertical: spacing.regular,
        alignItems: "center",
        justifyContent: "space-between"
    }
};

const btnTileCommon = {
    container: {
        borderWidth: 0,
        borderRadius: 0,
        rippleColor: contrast.lowest,
        backgroundColor: "transparent",
        padding: 0,
        height: 70
    }
};

export const btnTileIcon = { ...btnTileCommon,
    icon: {
        color: brand.primary,
        fontWeight: font.weightBold,
        size: adjustFont(35)
    }
};

export const btnTileIconSuccess = { ...btnTileCommon,
    icon: {
        color: brand.success,
        fontWeight: font.weightBold,
        size: adjustFont(35)
    }
};

export const btnTileIconWarning = { ...btnTileCommon,
    icon: {
        color: brand.warning,
        fontWeight: font.weightBold,
        size: adjustFont(35)
    }
};

export const btnTileIconDanger = { ...btnTileCommon,
    icon: {
        color: brand.danger,
        fontWeight: font.weightBold,
        size: adjustFont(35)
    }
};

export const textTileBadgePrimary = {
    text: {
        fontWeight: font.weightBold,
        fontSize: adjustFont(35),
        lineHeight: adjustFont(35),
        color: brand.primary
    }
};

export const textTileBadgeSuccess = {
    text: {
        fontWeight: font.weightBold,
        fontSize: adjustFont(35),
        lineHeight: adjustFont(35),
        color: brand.success
    }
};

export const textTileBadgeWarning = {
    text: {
        fontWeight: font.weightBold,
        fontSize: adjustFont(35),
        lineHeight: adjustFont(35),
        color: brand.warning
    }
};

export const textTileBadgedanger = {
    text: {
        fontWeight: font.weightBold,
        fontSize: adjustFont(35),
        lineHeight: adjustFont(35),
        color: brand.danger
    }
};

import { StyleSheet } from "react-native";
import { padding, margin, themeColor } from "./Theme";

export default StyleSheet.create({
    // ========= Fonts ================= //

    // ========= Flex ================= //
    justifyContentStart: {
        justifyContent: "flex-start"
    },
    justifyContentCenter: {
        justifyContent: "center"
    },
    justifyContentEnd: {
        justifyContent: "flex-end"
    },
    justifyContentBetween: {
        justifyContent: "space-between"
    },
    justifyContentAround: {
        justifyContent: "space-around"
    },
    alignItemsStart: {
        alignItems: "flex-start"
    },
    alignItemsCenter: {
        alignItems: "center"
    },
    alignItemsEnd: {
        alignItems: "flex-end"
    },
    alignSelfCenter: {
        alignSelf: "center"
    },
    alignSelfEnd: {
        alignSelf: "flex-end"
    },
    alignSelfStart: {
        alignSelf: "flex-start"
    },
    justifyContentEvenly: {
        justifyContent: "space-evenly"
    },
    flexDirectionRow: {
        flexDirection: "row"
    },
    flexOne: {
        flex: 1
    },
    flexDirectionCol: {
        flexDirection: "column"
    },
    halfWidth: {
        width: "50%"
    },
    flexOneFullWidth: {
        width: "100%",
        flex: 1
    },
    flexGrow: {
        flexGrow: 1
    },
    flexBasis10: {
        flexBasis: "10%"
    },
    flexBasis20: {
        flexBasis: "20%"
    },
    flexBasis78: {
        flexBasis: "78%"
    },
    flexBasis75: {
        flexBasis: "75%"
    },
    flexBasis70: {
        flexBasis: "70%"
    },
    flexBasis80: {
        flexBasis: "80%"
    },
    flexBasis90: {
        flexBasis: "90%"
    },

    flexWrap: {
        flexWrap: "wrap"
    },
    // ========= Position ================= //
    positionRelative: {
        position: "relative"
    },
    positionAbsolute: {
        position: "absolute"
    },
    // ========= Height ================= //
    height0: {
        height: 0
    },
    height80: {
        height: "80%"
    },
    height100: {
        height: "100%"
    },
    // ========= Border ================= //
    borderRadius4: {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
    },
    borderRadius50: {
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    borderRadius100: {
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100
    },
    borderBubble: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 18,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18
    },
    borderBubble15: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15
    },
    borderBubble8: {
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    borderRounded8: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    borderLeftWidthOne: {
        borderLeftWidth: 1
    },
    borderRightWidthOne: {
        borderRightWidth: 1
    },
    borderBottomWidthZero: {
        borderBottomWidth: 0
    },
    borderBottomWidthOne: {
        borderBottomWidth: 1
    },
    borderTopWidthOne: {
        borderTopWidth: 1
    },
    borderWidth: {
        borderWidth: 1
    },
    borderWidthOne: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    borderTopWidthOne: {
        borderTopWidth: 1
    },
    borderRightWidthOne: {
        borderRightWidth: 1
    },
    borderLeftWidthOne: {
        borderLeftWidth: 1
    },
    borderBottomWidthOne: {
        borderBottomWidth: 1
    },
    borderTopWidthTwo: {
        borderTopWidth: 2
    },
    borderRightWidthTwo: {
        borderRightWidth: 2
    },
    borderWidthTwo: {
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderTopWidth: 2
    },
    borderLeftWidthTwo: {
        borderLeftWidth: 2
    },
    borderBottomWidthOne: {
        borderBottomWidth: 2
    },
    // ========= Margin ================= //
    marginVerticalXs: {
        marginVertical: margin.xs
    },
    marginVerticalSm: {
        marginVertical: margin.sm
    },
    marginVerticalMd: {
        marginVertical: margin.md
    },
    marginVerticalLg: {
        marginVertical: margin.lg
    },
    marginVerticalXl: {
        marginVertical: margin.xl
    },
    marginVerticalXxl: {
        marginVertical: margin.xxl
    },
    marginHorizontalXs: {
        marginHorizontal: margin.xs
    },
    marginHorizontalSm: {
        marginHorizontal: margin.sm
    },
    marginHorizontalMd: {
        marginHorizontal: margin.md
    },
    marginHorizontalLg: {
        marginHorizontal: margin.lg
    },
    marginHorizontalXl: {
        marginHorizontal: margin.xl
    },
    marginBottomXs: {
        marginBottom: margin.xs
    },
    marginBottomSm: {
        marginBottom: margin.sm
    },
    marginBottomMd: {
        marginBottom: margin.md
    },
    marginBottomLg: {
        marginBottom: margin.lg
    },
    marginBottomXl: {
        marginBottom: margin.xl
    },
    marginBottomXxl: {
        marginBottom: margin.xxl
    },
    marginBottomXxxl: {
        marginBottom: margin.xxxl
    },
    marginLeftXs: {
        marginLeft: margin.xs
    },
    marginLeftSm: {
        marginLeft: margin.sm
    },
    marginLeftMd: {
        marginLeft: margin.md
    },
    marginLeftLg: {
        marginLeft: margin.lg
    },
    marginLeftXxl: {
        marginLeft: margin.xxl
    },
    marginLeftXxxl: {
        marginLeft: margin.xxxl
    },
    marginLeftXl: {
        marginLeft: margin.xl
    },
    marginRightXs: {
        marginRight: margin.xs
    },
    marginRightSm: {
        marginRight: margin.sm
    },
    marginRightMd: {
        marginRight: margin.md
    },
    marginRightLg: {
        marginRight: margin.lg
    },
    marginRightXl: {
        marginRight: margin.xl
    },
    marginTopXs: {
        marginTop: margin.xs
    },
    marginTopSm: {
        marginTop: margin.sm
    },
    marginTopMd: {
        marginTop: margin.md
    },
    marginTopLg: {
        marginTop: margin.lg
    },
    marginTopXl: {
        marginTop: margin.xl
    },
    marginTopXxl: {
        marginTop: margin.xxl
    },
    marginTop0: {
        marginTop: 0
    },
    // ========= Width ================= //
    width10: {
        width: "10%"
    },
    width20: {
        width: "20%"
    },
    width30: {
        width: "30%"
    },
    width40: {
        width: "40%"
    },
    width50: {
        width: "50%"
    },
    width60: {
        width: "60%"
    },
    width70: {
        width: "70%"
    },
    width80: {
        width: "80%"
    },
    width90: {
        width: "90%"
    },
    width100: {
        width: "100%"
    },
    maxWidth10p: {
        maxWidth: "10%"
    },
    maxWidth20p: {
        maxWidth: "20%"
    },
    maxWidth30p: {
        maxWidth: "30%"
    },
    maxWidth40p: {
        maxWidth: "40%"
    },
    maxWidth50p: {
        maxWidth: "50%"
    },
    maxWidth60p: {
        maxWidth: "60%"
    },
    maxWidth70p: {
        maxWidth: "70%"
    },
    maxWidth80p: {
        maxWidth: "80%"
    },
    maxWidth90p: {
        maxWidth: "90%"
    },
    maxWidth100p: {
        maxWidth: "100%"
    },
    // ========= Padding ================= //
    paddingXs: {
        padding: padding.xs
    },
    paddingSm: {
        padding: padding.sm
    },
    paddingMd: {
        padding: padding.md
    },
    paddingLg: {
        padding: padding.lg
    },
    paddingXl: {
        padding: padding.xl
    },
    paddingVerticalXs: {
        paddingVertical: padding.xs
    },
    paddingVerticalSm: {
        paddingVertical: padding.sm
    },
    paddingVerticalMd: {
        paddingVertical: padding.md
    },
    paddingVerticalLg: {
        paddingVertical: padding.lg
    },
    paddingVerticalXl: {
        paddingVertical: padding.xl
    },
    paddingVerticalXxl: {
        paddingVertical: padding.xxl
    },
    paddingVerticalXxxl: {
        paddingVertical: padding.xxxl
    },
    paddingHorizontalXs: {
        paddingHorizontal: padding.xs
    },
    paddingHorizontalSm: {
        paddingHorizontal: padding.sm
    },
    paddingHorizontalMd: {
        paddingHorizontal: padding.md
    },
    paddingHorizontalLg: {
        paddingHorizontal: padding.lg
    },
    paddingHorizontalXl: {
        paddingHorizontal: padding.xl
    },
    paddingHorizontalXxl: {
        paddingHorizontal: padding.xxl
    },
    paddingBottomXs: {
        paddingBottom: padding.xs
    },
    paddingBottomSm: {
        paddingBottom: padding.sm
    },
    paddingBottomMd: {
        paddingBottom: padding.md
    },
    paddingBottomLg: {
        paddingBottom: padding.lg
    },
    paddingBottomXl: {
        paddingBottom: padding.xl
    },
    paddingBottomXxl: {
        paddingBottom: padding.xxl
    },
    paddingRightXs: {
        paddingRight: padding.xs
    },
    paddingRightSm: {
        paddingRight: padding.sm
    },
    paddingRightMd: {
        paddingRight: padding.md
    },
    paddingRightLg: {
        paddingRight: padding.lg
    },
    paddingRightXl: {
        paddingRight: padding.xl
    },
    paddingRightXxl: {
        paddingRight: padding.xxl
    },
    paddingTopXs: {
        paddingTop: padding.xs
    },
    paddingTopSm: {
        paddingTop: padding.sm
    },
    paddingTopMd: {
        paddingTop: padding.md
    },
    paddingTopLg: {
        paddingTop: padding.lg
    },
    paddingTopXl: {
        paddingTop: padding.xl
    },
    paddingTopXxl: {
        paddingTop: padding.xxl
    },
    paddingTopTwo: {
        paddingTop: 2
    },
    // ========= Opacity ================= //
    opacity50: {
        opacity: 0.5
    },

    opacity60: {
        opacity: 0.6
    },
    minHeight1: {
        minHeight: 1
    },
    // ========= Text ================= //
    textCenter: {
        textAlign: "center"
    },
    textLeft: {
        textAlign: "left"
    },
    textDecorationUnderline: {
        textDecorationLine: "underline"
    },
    textRight: {
        textAlign: "right"
    },
    textTransformCapitalize: {
        textTransform: "capitalize"
    },
    textTransformUppercase: {
        textTransform: "uppercase"
    },
    textTransformLowercase: {
        textTransform: "lowercase"
    },

    // ========= Background Color ================= //

    backgroundOverlay4: {
        backgroundColor: "rgba(1,1,1,0.1)"
    },
    backgroundColorTransparent: {
        backgroundColor: "transparent"
    },

    // ========= Image ================= //
    imgContain: {
        resizeMode: "contain"
    },
    // ========= Spacing ================= //
    letterSpacingP23: {
        letterSpacing: 0.23
    },
    LetterSpacing02: {
        letterSpacing: 0.22
    },
    // ========= Spacing ================= //
    dNone: {
        display: "none"
    },
    validation: {
        color: themeColor.error,
        fontSize: 10
    }
});

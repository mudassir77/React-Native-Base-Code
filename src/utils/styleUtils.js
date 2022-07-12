import { widthPercentageToDP as lwp, heightPercentageToDP as lhp } from "react-native-responsive-screen";

// here 428 is adobe design width (px)
const designWidth = 428;
// here 926 is adobe design height (px)
const designHeight = 926;

const getWidthValue = px => (px / designWidth) * 100;
const getHeightValue = px => (px / designHeight) * 100;

export const wp = px => lwp(getWidthValue(px));

export const hp = px => lhp(getHeightValue(px));

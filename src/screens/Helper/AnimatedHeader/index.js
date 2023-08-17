import { Text, View, Pressable } from "react-native";
import BackBtn from "../../Helper/SvgImg/BackBtn";
import FilterBtn from "../SvgImg/FilterBtn";
import FilterModal from "../../Dashboard/ProductCatalog/FilterModal";


const AnimatedHeader = ({
  label,
  mainWrapperStyle,
  innerWraperStyle,
  buttonWrapStyle,
  labelStyle,
  onPress,
  showFilterIcon,
  filterData,
  filterLoading,
  onSubmitModal,
}) => {

  return (
    <View style={[mainWrapperStyle]}>
      <Pressable style={innerWraperStyle} onPress={() => onPress()}>
        <View style={buttonWrapStyle}>
          <BackBtn />
        </View>
        <Text style={labelStyle}>{label}</Text>
      </Pressable>
      {showFilterIcon && showFilterIcon == true && <FilterModal filterData={filterData} filterLoading={filterLoading} onSubmitModal={onSubmitModal}/> }
    </View>
  );
};

export default AnimatedHeader;

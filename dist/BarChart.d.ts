import React from "react";
import { ViewStyle } from "react-native";
import AbstractChart, {
  AbstractChartConfig,
  AbstractChartProps
} from "./AbstractChart";
import { ChartData } from "./HelperTypes";
export interface BarChartProps extends AbstractChartProps {
  data: ChartData;
  width: number;
  height: number;
  fromZero?: boolean;
  withInnerLines?: boolean;
  yAxisLabel: string;
  yAxisSuffix: string;
  chartConfig: AbstractChartConfig;
  style?: Partial<ViewStyle>;
  horizontalLabelRotation?: number;
  verticalLabelRotation?: number;
  /**
   * Show vertical labels - default: True.
   */
  withVerticalLabels?: boolean;
  /**
   * Show horizontal labels - default: True.
   */
  withHorizontalLabels?: boolean;
  /**
   * The number of horizontal lines
   */
  segments?: number;
  showBarTops?: boolean;
  showValuesOnTopOfBars?: boolean;
  withCustomBarColorFromData?: boolean;
  flatColor?: boolean;
}
declare type BarChartState = {};
declare class BarChart extends AbstractChart<BarChartProps, BarChartState> {
  getBarPercentage: () => number;
  renderBars: ({
    data,
    width,
    height,
    paddingTop,
    paddingRight,
    barRadius,
    withCustomBarColorFromData
  }: Pick<
    Pick<
      AbstractChartConfig,
      | "color"
      | "style"
      | "backgroundColor"
      | "height"
      | "paddingRight"
      | "paddingTop"
      | "width"
      | "strokeWidth"
      | "propsForBackgroundLines"
      | "propsForLabels"
      | "labelColor"
      | "propsForVerticalLabels"
      | "propsForHorizontalLabels"
      | "count"
      | "horizontalLabelRotation"
      | "formatYLabel"
      | "labels"
      | "horizontalOffset"
      | "stackedBar"
      | "verticalLabelRotation"
      | "formatXLabel"
      | "verticalLabelsHeightPercentage"
      | "formatTopBarValue"
      | "backgroundGradientFrom"
      | "backgroundGradientFromOpacity"
      | "backgroundGradientTo"
      | "backgroundGradientToOpacity"
      | "fillShadowGradient"
      | "fillShadowGradientOpacity"
      | "fillShadowGradientFrom"
      | "fillShadowGradientFromOpacity"
      | "fillShadowGradientFromOffset"
      | "fillShadowGradientTo"
      | "fillShadowGradientToOpacity"
      | "fillShadowGradientToOffset"
      | "useShadowColorFromDataset"
      | "barPercentage"
      | "barRadius"
      | "propsForDots"
      | "decimalPlaces"
      | "linejoinType"
      | "scrollableDotFill"
      | "scrollableDotStrokeColor"
      | "scrollableDotStrokeWidth"
      | "scrollableDotRadius"
      | "scrollableInfoViewStyle"
      | "scrollableInfoTextStyle"
      | "scrollableInfoTextDecorator"
      | "scrollableInfoOffset"
      | "scrollableInfoSize"
    >,
    "height" | "paddingRight" | "paddingTop" | "width" | "barRadius"
  > & {
    data: number[];
    withCustomBarColorFromData: boolean;
  }) => React.JSX.Element[];
  renderBarTops: ({
    data,
    width,
    height,
    paddingTop,
    paddingRight
  }: Pick<
    Pick<
      AbstractChartConfig,
      | "color"
      | "style"
      | "backgroundColor"
      | "height"
      | "paddingRight"
      | "paddingTop"
      | "width"
      | "strokeWidth"
      | "propsForBackgroundLines"
      | "propsForLabels"
      | "labelColor"
      | "propsForVerticalLabels"
      | "propsForHorizontalLabels"
      | "count"
      | "horizontalLabelRotation"
      | "formatYLabel"
      | "labels"
      | "horizontalOffset"
      | "stackedBar"
      | "verticalLabelRotation"
      | "formatXLabel"
      | "verticalLabelsHeightPercentage"
      | "formatTopBarValue"
      | "backgroundGradientFrom"
      | "backgroundGradientFromOpacity"
      | "backgroundGradientTo"
      | "backgroundGradientToOpacity"
      | "fillShadowGradient"
      | "fillShadowGradientOpacity"
      | "fillShadowGradientFrom"
      | "fillShadowGradientFromOpacity"
      | "fillShadowGradientFromOffset"
      | "fillShadowGradientTo"
      | "fillShadowGradientToOpacity"
      | "fillShadowGradientToOffset"
      | "useShadowColorFromDataset"
      | "barPercentage"
      | "barRadius"
      | "propsForDots"
      | "decimalPlaces"
      | "linejoinType"
      | "scrollableDotFill"
      | "scrollableDotStrokeColor"
      | "scrollableDotStrokeWidth"
      | "scrollableDotRadius"
      | "scrollableInfoViewStyle"
      | "scrollableInfoTextStyle"
      | "scrollableInfoTextDecorator"
      | "scrollableInfoOffset"
      | "scrollableInfoSize"
    >,
    "height" | "paddingRight" | "paddingTop" | "width"
  > & {
    data: number[];
  }) => React.JSX.Element[];
  renderColors: ({
    data,
    flatColor
  }: Pick<AbstractChartConfig, "data"> & {
    flatColor: boolean;
  }) => React.JSX.Element[];
  renderValuesOnTopOfBars: ({
    data,
    width,
    height,
    paddingTop,
    paddingRight
  }: Pick<
    Pick<
      AbstractChartConfig,
      | "color"
      | "style"
      | "backgroundColor"
      | "height"
      | "paddingRight"
      | "paddingTop"
      | "width"
      | "strokeWidth"
      | "propsForBackgroundLines"
      | "propsForLabels"
      | "labelColor"
      | "propsForVerticalLabels"
      | "propsForHorizontalLabels"
      | "count"
      | "horizontalLabelRotation"
      | "formatYLabel"
      | "labels"
      | "horizontalOffset"
      | "stackedBar"
      | "verticalLabelRotation"
      | "formatXLabel"
      | "verticalLabelsHeightPercentage"
      | "formatTopBarValue"
      | "backgroundGradientFrom"
      | "backgroundGradientFromOpacity"
      | "backgroundGradientTo"
      | "backgroundGradientToOpacity"
      | "fillShadowGradient"
      | "fillShadowGradientOpacity"
      | "fillShadowGradientFrom"
      | "fillShadowGradientFromOpacity"
      | "fillShadowGradientFromOffset"
      | "fillShadowGradientTo"
      | "fillShadowGradientToOpacity"
      | "fillShadowGradientToOffset"
      | "useShadowColorFromDataset"
      | "barPercentage"
      | "barRadius"
      | "propsForDots"
      | "decimalPlaces"
      | "linejoinType"
      | "scrollableDotFill"
      | "scrollableDotStrokeColor"
      | "scrollableDotStrokeWidth"
      | "scrollableDotRadius"
      | "scrollableInfoViewStyle"
      | "scrollableInfoTextStyle"
      | "scrollableInfoTextDecorator"
      | "scrollableInfoOffset"
      | "scrollableInfoSize"
    >,
    "height" | "paddingRight" | "paddingTop" | "width"
  > & {
    data: number[];
  }) => React.JSX.Element[];
  render(): React.JSX.Element;
}
export default BarChart;
//# sourceMappingURL=BarChart.d.ts.map

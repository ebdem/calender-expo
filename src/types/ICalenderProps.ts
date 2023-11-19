export interface DatePickerProps {
    moment?: any;
    startDate?: any;
    endDate?: any;
    onChange?: any;
    displayedDate?: any;
    minDate?: any;
    date?: any;
    maxDate?: any;
    range?: any;
    dayHeaderTextStyle?: any;
    dayHeaderStyle?: any;
    backdropStyle?: any;
    containerStyle?: any;
    selectedStyle?: any;
    selectedTextStyle?: any;
    disabledStyle?: any;
    dayStyle?: any;
    dayTextStyle?: any;
    disabledTextStyle?: any;
    headerTextStyle?: any;
    monthButtonsStyle?: any;
    headerStyle?: any;
    monthPrevButton?: any;
    monthNextButton?: any;
    children?: any;
    buttonContainerStyle?: any;
    buttonStyle?: any;
    buttonTextStyle?: any;
    presetButtons?: any;
    open?: any;
  }

  export interface IDateProps {
    index?: number;
    selected?: boolean;
    disabled?: boolean;
    select?: any;
    selectedStyle?: any;
    selectedTextStyle?: any;
    disabledStyle?: any;
    dayStyle?: any;
    dayTextStyle?: any;
    disabledTextStyle?: any;
    empty?: boolean;
  }

  export interface IHeaderProps { 
    index?:  number;
    displayedDate?: any;
    dayHeaderTextStyle?: any;
    dayHeaderStyle?: any;
    day?: any;
 }
  
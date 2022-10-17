import React from "react";
import Checkbox from "@mui/material/Checkbox";
import CircleCheckedFilled from "@mui/icons-material/CheckCircle";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";

const CheckBoxItem = React.forwardRef((props, ref) => {
    const {checked} = props;
    return <Checkbox ref={ref}
                     {...props}
                     icon={<CircleUnchecked/>}
                     checkedIcon={<CircleCheckedFilled/>}
                     style={{
                         color: "#EE7500",
                     }}
                     checked={checked}
    />
});

export default CheckBoxItem;
import iconSet from './selection.json';
import IcomoonReact from "icomoon-react";

// the Prop ico referes the icon name inside the selection.json file
// The Icomoon component will render an svg tag with paht of the icon also found in selection.json
const IconFromList = ({icon, color, size, className}) => {
    return (
        <IcomoonReact
        className={className}
        iconSet={iconSet}
        color={color}
        size={size ? size : '1rem'}
        icon={icon}
      />
    )
}

export default IconFromList;
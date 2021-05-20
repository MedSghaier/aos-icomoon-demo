// the Prop icoClassName reference the icon variable Name found in sass/vendors/icomoon/variables
// This component will render a simple i tag with the icon as its before pseudo-eleemnt (handled by css)

const IconWebFont = ({icoClassName, className, ...otherProps}) => {

    return (
        <i className={`ico-${icoClassName} ${className}` } otherProps></i>
    )
}

export default IconWebFont
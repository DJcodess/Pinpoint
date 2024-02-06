const TextInput = ({
    label,
    placeholder,
    className,
    value,
    setValue,
    labelClassName,
    type,
}) => {
    return (
        <div
            className={`flex flex-col space-y-2 w-full ${className}`}
        >
            <label for={label} className={`font-semibold ${labelClassName}`}>
                {label}
            </label>
            
            <input type="email" 
                   name="email" 
                   className="mt-1 border shadow-sm text-2xl p-3 border border-solid border-dodgeblue bg-glass rounded placeholder-dodgeblue focus:outline-none focus:borde-dodgeblue focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                   placeholder="" />
        </div>
    );
};

export default TextInput;

// className="text-xl p-3 border border-solid border-dodgeblue bg-glass rounded placeholder-dodgeblue"
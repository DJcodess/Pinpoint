const TextInput = ({ label, placeholder, value, setValue }) => {
    return (
        <div className="textInputDiv flex flex-col space-y-2 w-full">
            <label for={label} className="font-semibold">
                {label}
            </label>
            <input
                type="password"
                placeholder={placeholder}
                className="text-xl p-3 border border-solid border-deepblue bg-glass rounded placeholder-deepblue"
                id={label}
                value={value}
                // onChange={(e) => {
                //     setValue(e.target.value);
                // }}
            />
        </div>
    );
};

export default TextInput;
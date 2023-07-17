const DropdownMultiSelect = () => {
  const optios = [
    { id: 1, name: "javascript" },
    { id: 2, name: "rust" },
    { id: 3, name: "python" },
    { id: 4, name: "java" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionsToggle = (optionId) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            id="dropdown-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {selectedOptions.length === 0
              ? "seleccionar opciones"
              : `${selectedOptions.length} optiones selecionadas`}
            <svg
              classname="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillrule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm0 14a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 14.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 17z"
                cliprule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
      {selectedOptions.length > 0 && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-menu"
        >
          <div
            className="py-1"
            role="none"
          >
            {options.map((option) => (
              <button
                key={option.value}
                className={`${
                  selectedOptions.includes(option.value)
                    ? "text-left bg-blue-500 text-white"
                    : "text-left text-gray-700"
                } block w-full px-4 py-2 text-sm`}
                onClick={() => handleOptionsToggle(option.value)}
                role="menuitem"
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMultiSelect;

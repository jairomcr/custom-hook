import { useState } from "react";

export const useForm = (initState = {}) => {
  const [value, setValue] = useState(initState);

  const reset = () => {
    setValue(initState);
  };

  const handleInputChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.value,
    });
  };
  return [value, handleInputChange, reset];
};

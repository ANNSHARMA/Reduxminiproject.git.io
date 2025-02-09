import { useDispatch } from "react-redux";
import { submitdata } from "../Action/Action";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Form = () => {
  const dispacth = useDispatch();

  const [name, setName] = useState("");
  const [score, setscore] = useState("");
  const [id, setid] = useState(uuidv4().slice(0, 5));

  // for error
  const [nameerror, setnameError] = useState("");
  const [scoreerror, setscoreerror] = useState("");
  const [formvalid, setFormvalid] = useState(false);

  // name validation.
  const nameValidation = (name) => {
    let error = nameerror;
    let valid = formvalid;

    if (name.trim() === "") {
      error = "Please enter a valid name";
      valid = false;
    } else if (name.length < 5) {
      error = "Name must be at least 5 characters";
      valid = false;
    } else {
      error = "";
      valid = true;
    }
    setName(name);
    setnameError(error);
    setFormvalid(valid);
    return valid;
  };

  // fom scorevalidation
  const scoreValidation = (score) => {
    let error = scoreerror;
    let valid = formvalid;
    let regX = /^[0-9]+$/g;
    if (!regX.test(score)) {
      error = "Enter valid score";
      valid = false;
    } else {
      error = "";
      valid = true;
    }
    setscore(score);
    setscoreerror(error);
    setFormvalid(valid);
    return valid;
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.id == "name") {
      nameValidation(e.target.value);
    } else if (e.target.id == "score") {
      scoreValidation(e.target.value);
    }
  };

  //handlesubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log();
    if (nameValidation(name) && scoreValidation(score)) {
      const userdata = {name, score, id}
      localStorage.setItem("userData", JSON.stringify(userdata));
      dispacth(submitdata(userdata));
      alert("Data is submitted!");
      setid("");
      setName("");
      setscore("");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 p-6">
      <form className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">

        <div className="mb-4">
          <label
            forHTML="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <p>{nameerror}</p>
        </div>

        <div className="mb-4">
          <label
            forHTML="score"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Score
          </label>
          <input
            type="text"
            id="score"
            placeholder="Enter your score"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <p>{scoreerror}</p>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";
import { context } from "../../context/context";
import { useContext, useState } from "react";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Registration Number?",
    "Roll Number",
  ];

  const { list } = useContext(context);
  const [flag, setFlag] = useState(false);
  const [str, setStr] = useState('');
  const [filteredList, setFilteredList] = useState([]); // State to store filtered list

  const handleChange = (e) => {
    console.log(e.target.value);
    setStr(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    setFlag(true);
    console.log("val ", str);

    // Set filtered list based on the search string
    const filtered = list.filter((it) => it.reg.includes(str));
    setFilteredList(filtered);
  };

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Search Student's Reg Number
      </h2>
      <PlaceholdersAndVanishInput 
        placeholders={placeholders} 
        onChange={handleChange} 
        onSubmit={onSubmit} 
      />
      
      {/* Conditionally render filtered list */}
      {flag && (
        <div className="m-4 p-4">
          {filteredList.map((it) => (
            <div key={it._id}>
              {it.reg} - {it.name}
            </div>
          ))}
          <h2 className="text-center">Total students = {filteredList.length}</h2>
        </div>
      )}
    </div>
  );
}

export default PlaceholdersAndVanishInputDemo;

import React from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import "./Addjob.css";

const Addjob = () => {
  return (
    <div className="Addjob-container">
      <div>
        <img
          src="https://image.freepik.com/photos-gratuite/homme-affaires-dans-son-bureau-loupe_1368-4641.jpg"
          alt="workspace"
        />
      </div>
      <div className="addJob-SearchBar">
        <h1> your dream job is waiting for you</h1>
        <p>
          Find a job that matched with your ability and interest is easier now.
          Just browse the Job and apply whenever and wherever you want .{" "}
        </p>

        <input
          type="text"
          id="myInput"
          onkeyup="myFunction()"
          placeholder="Search for Jobs"
        />
        <SearchSharpIcon />
      </div>
    </div>
  );
};

export default Addjob;

import React from "react";
import University from "./University";
import AddUniversity from "./AddUniversity";
import UpdateUniversity from "./UpdateUniversity";

const Universities = ({ universities, handleAddUniversity, handleUpdateUniversity, handleRemoveUniversity }) => {
  return (
      <div>
          <h4>Add API</h4><hr/>
          <AddUniversity handleAddUniversity={handleAddUniversity} />

          <br/><br/>
          <h4>Delete API</h4>

          {universities.map(university => (
            <University
              key={university.id}
              university={university}
              handleRemoveUniversity={handleRemoveUniversity}
            />
          ))}

        <br/><br/>
      <h4>Update API</h4><hr/>
      <UpdateUniversity handleUpdateUniversity={handleUpdateUniversity} universities={universities} />

    </div>
  );
};

export default Universities;

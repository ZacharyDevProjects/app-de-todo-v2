import React, { useState } from "react";
import Todo from "./todoPerso";

function ListeOfTodo() {
 const [Tasklist, setTasklist] = useState([]);
 return (
    <div className="table-responsive-sm" style={{ padding: "0px" }}>
      <table className="table text-white mb-0">
        <thead>
          <tr>
            <th scope="col">Team Member</th>
            <th scope="col">Task</th>
            <th scope="col">Priority</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Tasklist.map((Taske) => (
            <Todo key={Taske.id} Task={Taske} />
          ))}
        </tbody>
      </table>
    </div>
 );
}

export default ListeOfTodo;

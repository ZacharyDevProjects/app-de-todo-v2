import React from "react";

function Todo() {
  return (
    <div className="table-responsive-sm" style={{padding: "0px"}}>
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
          <tr className="fw-normal">
            <th>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1"
                style={{ width: "45px", height: "auto" }}
              ></img>
              <span className="ms-2">Alice Mayer</span>
            </th>
            <td className="align-middle">
              <span>Call Sam For payments</span>
            </td>
            <td className="align-middle">
              <h6 className="mb-0">
                <span className="badge bg-danger">High priority</span>
              </h6>
            </td>
            <td className="align-middle">
                <button type="button" className="btn btn-primary">
                    Done
                </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Todo;

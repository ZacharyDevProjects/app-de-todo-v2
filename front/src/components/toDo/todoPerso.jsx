function todo({Task}) {
  const {id, img, name, priority, task} = Task
  return (
    <tr className="fw-normal">
      <th>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
          alt="avatar 1"
          style={{ width: "45px", height: "auto" }}
        ></img>
        <span className="ms-2">Alice Mayer</span>
      </th>
      <td
        className="align-middle"
        style={{ maxWidth: "35vw", wordWrap: "break-word" }}
      >
        <span className="text-wrap">
          eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        </span>
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
  );
}

export default todo
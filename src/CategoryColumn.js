import { Link } from "react-router-dom";

function View() {
  let spinner = document.querySelector(".ViewdivFeaturedUsers");
  if (spinner.classList.contains("blurred")) {
    spinner.classList.remove("blurred");
  } else {
    spinner.classList.add("blurred");
  }
}

export const COLUMNS = [
  {
    Header: "SI.no",
    accessor: "id",
  },
  {
    Header: "Category Name",
    accessor: "name",
  },
  {
    Header: "Active",
    accessor: "Address",
  },
  {
    Header: "Action",
    button: true,
    Cell: ({ cell }) => {
      return (
        <div class="viewdeletebtn">
          <Link class="viewbutton Edit" to="/Categorylist/EditList"></Link>

          <Link class="deletebutton show" to="/Categorylist/ShowCL"></Link>

          <div class="viewdeletebtn">
            <button onClick={View} class="viewbutton"></button>
            <button class="deletebutton"></button>
          </div>
        </div>
      );
    },
  },
];

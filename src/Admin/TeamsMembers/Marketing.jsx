import * as React from "react";
import { Link } from "react-router-dom";
import { columns } from "../Tables/TeamMembersTable/Marketing/Columns";
import { rows } from "../Tables/TeamMembersTable/Marketing/rows";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function MarketingMembersTable() {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 text-center sm:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-[#173e81] uppercase tracking-wide text-center sm:text-left">
          Co-Operation & Marketing Members
        </h2>

        <Link
          to='/admin/teammembers/add'
          className="w-full sm:w-auto flex justify-center items-center bg-dblue text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black border-2  hover:border-blue-400 transition-all shadow-lg shadow-blue-900/20
  "
        >
          + Add New Members
        </Link>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          hideFooter
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </div>
    </div>
  );
}

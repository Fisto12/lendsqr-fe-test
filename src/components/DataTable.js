import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const DataTable = ({ rows, columns, loading, sx, Filters }) => {
  const [pageSize, setPageSize] = useState(10);

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      sx={sx}
      pagination
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[10, 20, 30, 50, 100]}
      components={Filters && { Toolbar: GridToolbar }}
    />
  );
};

export default DataTable;

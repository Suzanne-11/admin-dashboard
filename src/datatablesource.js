import './components/datatable/datatable.scss';

export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cell-with-img">
            <img className="cell-img" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
  
    {
      field: "phone",
      headerName: "Phone",
      width: 140,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <div className={`cell-with-status ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  
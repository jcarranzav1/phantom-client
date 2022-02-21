import './productList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { productRows } from '../../dummyData';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => (
        <div className="productListItem">
          <img alt="" className="productListImg" src={params.row.img} />
          {params.row.name}
        </div>
      ),
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <>
          <Link to={`/admin/product/${params.row.id}`}>
            <button className="productListEdit" type="button">
              Edit
            </button>
          </Link>
          <DeleteOutline
            className="productListDelete"
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <Topbar />
      <div className="d-flex mt-3">
        <Sidebar />

        <div className="productList">
          <DataGrid
            columns={columns}
            pageSize={8}
            rows={data}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </>
  );
}

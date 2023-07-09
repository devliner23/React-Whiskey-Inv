import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90},
    { field: 'whiskey_name', headerName: "Whiskey Name", flex: 1},
    { field: 'whiskey_brand', headerName: "Whiskey Brand", flex: 1},
    { field: 'whiskey_location', headerName: "Whiskey Location", flex: 1},
    { field: 'whiskey_price', headerName: "Whiskey Price", flex: 1},
]

function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { whiskeyData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        console.log('Selection Model: ', selectionModel)
        if (selectionModel[0]) {
            server_calls.delete(selectionModel[0])
            getData();
            console.log(`Selection model: ${selectionModel}`)
            setTimeout( () => {window.location.reload()}, 3000)
        } else {
            console.error('No valid id selected for deletion')
        }
    }



  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row justify-center">
            <div>
                <button
                    className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Add Whiskey
                </button>
            </div> 
            <Button  onClick={handleOpen} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Update</Button>
            <Button  onClick={deleteData} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col justify-center"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-slate-300 my-2 rounded flex justify-center">Whiskeys</h2>
            <DataGrid rows={whiskeyData} columns={columns} 
            checkboxSelection={true} 
            onRowSelectionModelChange={ (item:any) => {setSelectionModel(item)}}
            />
        </div>
    </>
  )
}

export default DataTable
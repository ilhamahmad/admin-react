import React, { forwardRef, useState, useEffect } from 'react'
import MaterialTable from 'material-table';
import {AddBox} from '@material-ui/icons';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {getPostsAdmin} from '../../services/PostService';
import { putDataWithHeaderToast, deleteDataToast } from '../../global';
import CKEditor from 'ckeditor4-react';


export default function EditPost() {

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    }
    
    const [posts,setPosts]=useState([]);

    const getInitials=async()=>{
        const response =await getPostsAdmin();
        setPosts(response.data);
    }


    useEffect(()=>{
        getInitials()
    },[])

    return (
        <div className="wrapper">
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
        <MaterialTable
                                        icons={tableIcons}
                                        title="Posts"
                                        options={{
                                            exportButton: true,
                                            // filtering: true,
                                            headerStyle: {
                                                backgroundColor: '#01579b',
                                                color: '#FFF'
                                            },
                                            cellStyle: { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: 200 },
                                            grouping: true,
                                            pageSizeOptions: [10, 15, 30],
                                            pageSize: 10
                                        }

                                        }
                                        editable={{
                                            onRowUpdate: (newData, oldData) =>
                                                new Promise((resolve, reject) => {
                                                    setTimeout(() => {
                                                        const dataUpdate = [...posts];
                                                        const index = oldData.tableData.id;
                                                        dataUpdate[index] = newData;
                                                        setPosts([...dataUpdate]);
                                                            putDataWithHeaderToast("/post/update", newData, "jwt","successfully update")                                                       
                                                        resolve();
                                                    }, 1000)
                                                }),
                                            onRowDelete: oldData =>
                                                new Promise((resolve, reject) => {
                                                    setTimeout(() => {
                                                        const dataDelete = [...posts];
                                                        const index = oldData.tableData.id;
                                                   

                                                            deleteDataToast("/post/delete/" + dataDelete[index].id, "jwt","succesfully deleted")
                                                            const response = dataDelete.splice(index, 1);
                                                            setPosts([...dataDelete]);
                                                       
                                                        resolve()
                                                    }, 100)
                                                }),
                                        }}
                                        columns={[
                                            { title: 'ID', field: 'id', filtering: false, editable: false },
                                            { title: 'Status', field: 'status', lookup: { true: 'enable', false: 'disable' } },
                                            { title: 'Creation date', field: 'createDate' },
                                            { title: 'Title', field: 'title' },
                                            { title: 'Time spending', field: 'timeSpending' },
                                            { title: 'Text', field: 'text' },
                                            { title: 'Short desc', field: 'shortDecription' },
                                            { title: 'Description', field: 'description' },
                                            { title: 'Description', field: 'description' },
                                            {title: 'Body', field: 'body' },
                                            {
                                                title: "Img Url", field: "imgUrl", render: rowData => (
                                                    <img
                                                        style={{ height: 36, borderRadius: '50%' }}
                                                        src={rowData.imgUrl}
                                                    />
                                                )
                                            },

                                        ]}
                                        data={posts}
                                        actions={[
                                            //     {
                                            //         icon:()=><Deleteicon/>,
                                            //         tooltip: 'Delete',
                                            //         onClick: (event, rowData) =>{

                                            //         }
                                            //     },
                                           
                                        ]}
                                    />
                                       </div>
          </section>
        </div>
      </div>
    )
}

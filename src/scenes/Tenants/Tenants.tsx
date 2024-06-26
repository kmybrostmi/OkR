import React,{useMemo} from 'react';
import {useGetAllTenantsInfo} from './Hooks/index'
import DyDataGrid from '../../components/GlobalComponents/DyDataGrid/DyDataGrid';
import {Grid, Box,Typography} from '@mui/material';
import LyBackdrop from '../../components/Layouts/BackDrop/BackDrop';
// import ProgressMeeting from '../Meeting/LComponents/ProgressMeeting/ProgressMeeting';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
const Tenants = () => {
  // if (loading) {
  //   return <Box columnGap={4} sx={{ width:'100%',display:'flex',justifyContent:'start',flexWrap:'wrap' }}>
  //     {
  //       scletList.map(()=>{
  //         return <Skeleton sx={{my:2}} variant="rounded" width={200} height={180} />
  //       })
  //     }
  //    </Box>
  // }

  const {data:tenantData,isLoading:tenantsDataLoading,isError:tenantsDataError}=useGetAllTenantsInfo();
  // console.log(tenantData)
  const tenantsColumns: any = useMemo(()=>[
    {
      field: "rowid",
      headerName: "ردیف",
      width: 75,
    
      sortable: false,
      align:'center',
      headerAlign:'center',
      renderCell: (params:any) => params.api.getAllRowIds().indexOf(params.id)+1
    },
    ,
        { field: 'name',
         align:'left',
         headerName: 'نام',
         headerAlign:'center',
         sortable:false,
         wrap:'wrap',
          width: 170,
          flex:1
      },
      { field: 'scale',
      align:'center',
      headerName: 'اندازه',
      headerAlign:'center',
      sortable:false,
      wrap:'wrap',
       width:90
      }
      // teamCount
      ,
      { field: 'teamCount',
      align:'center',
      headerName: 'تعداد تیم',
      headerAlign:'center',
      sortable:false,
      wrap:'wrap',
       width:90
      }
      ,
      { field: 'objectiveCount',
      align:'center',
      headerName: 'تعداد هدف',
      headerAlign:'center',
      sortable:false,
      wrap:'wrap',
       width:90
      }
      ,
      { field: 'meetingCount',
      align:'center',
      headerName: ' تعداد جلسه',
      headerAlign:'center',
      sortable:false,
      wrap:'wrap',
       width:90
      }
      // meetingCount
      ,
      { field: 'keyResultCount',
      align:'center',
      headerName: 'تعداد نتیجه',
      headerAlign:'center',
      sortable:false,
      wrap:'wrap',
       width:90
      }
      // objectiveCount
      ,
      // keyResultCount
      { field: 'creator',
      align:'center',
      headerName: 'ایجاد کننده',
      headerAlign:'center',
      sortable:false,
       width:120
      }
      ,
      { field: 'phoneNumber',
      align:'center',
      headerName: 'شماره همراه',
      headerAlign:'center',
      sortable:false,
       width:100
      }
      ,
      { field: 'role',
      align:'center',
      headerName: 'سمت',
      headerAlign:'center',
      sortable:false,
       width:80
      }
      ,
      { field: 'companyType',
      align:'center',
      headerName: ' نوع تننت',
      headerAlign:'center',
      sortable:false,
       width:80
      }
      ,
      { field: 'personCount',
      align:'center',
      headerName: 'تعداد کاربران',
      headerAlign:'center',
      sortable:false,
       width:60,
       
      }
      // dayRemainContract
      ,
      { field: 'dayRemainContract',
      align:'center',
      headerName: 'تعداد روز باقی مانده قرارداد',
      headerAlign:'center',
      sortable:false,
       width:90,
       
      }
      ,
      { field: 'createDate',
      align:'center',
      headerName: 'تاریخ ایجاد',
      headerAlign:'center',
      sortable:false,
       width:110,
       flex:1
      }
      ,
      { field: 'lastLoginDate',
      align:'center',
      headerName: 'تاریخ آخرین لاگین',
      headerAlign:'center',
      sortable:false,
       width:110,
       flex:1
      }
      
      ,
      { field: 'addLastPersonDate',
      align:'center',
      headerName: 'آخرین کاربر اضافه شده ',
      headerAlign:'center',
      sortable:false,
       width:120,
       
      }
      // addLastPersonDate
      //  آخرین کاربر اضافه شده 
      // تاریخ ایجاد
      //
      // 
    
  
    
    

  
    
     
  ],[]);

  
  const renderContent=()=>{
    if (tenantsDataLoading) {
      return (<Box  width={'100%'} py={16}   >
        <CircularProgress   />
      </Box>)
    }
    else {
      return <>
       <DyDataGrid
     rowHeight={10}
     data={tenantsDataError || tenantsDataLoading ? []:tenantData }
     columns={tenantsColumns || []}
     hideFooter={false}
     selectionModel={[]}
     initialOnRowClick={()=>{}}
     rowSelection={true}

     /></>
    }
  }
   

 

// data,columns,hideFooter,selectionModel,initialOnRowClick
  return (
    <>
    <Grid  sx={{bgcolor:'#F9F9F9',minHeight:'100vh',width:'100% !important',padding:'0px !important'}}   >
     <Grid item xs={12}   >
     <Box  mx={1} display={'flex'} my={1} justifyContent={'start'} borderRadius={2} boxShadow={2} bgcolor={'white'} py={1} sx={{padding:'0px !important'}}  >
     <Typography  px={2} py={1} color={'#00387C'} fontSize={'18px'} >لیست تننت ها</Typography>
     </Box>
     </Grid>
     <Grid item xs={12}   >
     <Box textAlign={'center'}  mx={1} borderRadius={2} boxShadow={2} bgcolor={'white'} my={3} py={tenantsDataLoading?8:3}   >
    {
      renderContent()
    }
     </Box>
     </Grid>
    </Grid>
    </>
  )
}

export default Tenants
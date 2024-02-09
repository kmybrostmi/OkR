import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';




interface LoginState {

}
type meetingsStateType = {
  priodId:string,
  meetingId:string,
  profileTenantId:string,
  profileName:string,
    periodList: any[],
    meetingsList:any[],
    teamsData:any[],
    teamInfo:any,
    teamList:any[],
    companyList:any[],
    objectivie:any[],
    keyResults:any[],
    loading:boolean,
    objUpdated:boolean,
    changeTenantMode:boolean

    
 
};


const initialState:meetingsStateType = {
priodId:'',
meetingId:'',
profileTenantId:'',
profileName:'',
periodList:[],
meetingsList:[],
teamsData:[],
teamInfo:{},
companyList:[],
teamList:[],
objectivie:[],
keyResults:[],
loading:false,
objUpdated:false,
changeTenantMode:false
}


const setPriodList=(state:any,action:PayloadAction<any>)=>{
    let {payload}=action
state.periodList=payload;
}


const setProfileTenantId=(state:any,action:PayloadAction<any>)=>{
  let {payload}=action
state.profileTenantId=payload.tenantId;
state.profileName=payload.tenantName;
// console.log('ihihhihi')
}

const setMeetingsList=(state:any,action:PayloadAction<any>)=>{
  let {payload}=action;
  state.meetingsList=payload;
}

const setLoading=(state:any,action:PayloadAction<any>)=>{
  let {payload}=action;
  state.loading=payload
}

const setTeamsData=(state:any,action:PayloadAction<any>)=>{
// webTeamCheckinMeetingDetailsQueryResultDtos
// webTeamHaveParentCheckinMeetingDetailsQueryResultDtos
// webTeamWithoutParentCheckinMeetingDetailsQueryResultDtos/////

let{payload:treeData}=action;
let{webTeamWithoutParentCheckinMeetingDetailsQueryResultDtos:treeStatus}=treeData;
// console.log(treeStatus,treeData)
if (treeStatus===null) {
  let{webTeamHaveParentCheckinMeetingDetailsQueryResultDtos:companyy}=treeData;
  let companyInfo=companyy[0];
  // console.log(treeData);
  // keyResultsCount
  // : 
  // 202
  // managerCompanyName
  // : 
  // "کیان فرزانه"
  // meetingId
  // : 
  // "f39882a0-f4b9-4793-afa2-9cef2de4883d"
  // name
  // : 
  // "اکلر"
  // objectivesCount
  // : 
  // 49
  // periodId
  // : 
  // "bba7c504-8a8c-4b9e-b92c-6f7386a54c7a"
  // tenantId
  // : 
  // "6cfd9a87-e09b-4f0e-bbe1-c1b65c8f170d"


  let{name,managerCompanyName,objectivesCount,keyResultsCount}=treeData;
  
  let totcompanyInfo={
    name:name,
    managerCompanyName:managerCompanyName,
    objectivesCount:objectivesCount,
    keyResultsCount:keyResultsCount,
    isCompany:true
  };
  state.teamInfo=totcompanyInfo;
  let{webTeamCheckinMeetingDetailsQueryResultDtos:teamsNode,...rest}=companyInfo;
  state.teamList=teamsNode;
  state.companyList=rest
  
}

}


const setTeamInfo=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
  // console.log(payload)


let teamInfoor={
  id:payload.id,
  name:payload.name,
  managerCompanyName:payload.managerCompanyName,
  keyResultsCount:payload.keyResultsCount,
  objectivesCount:payload.objectivesCount,
  isCompany:payload.isCompany


}

  state.teamInfo=teamInfoor
// console.log(payload)
}





const setObjectivie=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
  state.objectivie=payload;
}

const setKeyResults=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
  state.keyResults=payload;
}

const resetRValues=(state:any)=>{
state.teamInfo={};
state.objectivie=[]
}

const setProfileName=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
  console.log(payload)
  state.profileName=payload;
  // console.log(payload)
}

const updateObj=(state:any)=>{
state.objUpdated=!state.objUpdated
}

const resetTeamInfo=(state:any)=>{
  state.teamInfo={};
}
const setPriodId=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
  state.priodId=payload;
// console.log()
}

const setMeetingId=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
  // console.log(payload)
  state.meetingId=payload;
}
// changeTenantMode

const setChangeTenantMode=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
  state.changeTenantMode=payload;
}





export const meetingsSlice = createSlice({
  name: 'MeetingsSlice',
  initialState,
  reducers: {
    setPriodList,
    setProfileTenantId,
    setProfileName,
    setMeetingsList,
    setLoading,
    setTeamsData,
    setObjectivie,
    setKeyResults,
    resetRValues,
    updateObj,
    resetTeamInfo,
    setTeamInfo,
    setPriodId,
    setMeetingId,
    setChangeTenantMode
  
   
  },
})

export const {
    setPriodList:setPriodListR,
    setProfileTenantId:setProfileTenantIdR,
    setProfileName:setProfileNameR,
    setMeetingsList:setMeetingsListR,
    setLoading:setLoadingR,
    setTeamsData:setTeamsDataR,
    setTeamInfo:setTeamInfoR,
    setObjectivie:setObjectivieR,
    setKeyResults:setKeyResultsR,
    resetRValues:resetRValuesR,
    updateObj:updateObjR,
    resetTeamInfo:resetTeamInfoR,
    setPriodId:setPriodIdR,
    setMeetingId:setMeetingIdR,
    setChangeTenantMode:setChangeTenantModeR
 } = meetingsSlice.actions



export default meetingsSlice.reducer


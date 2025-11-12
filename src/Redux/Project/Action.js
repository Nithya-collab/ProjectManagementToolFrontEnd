import api from "@/config/api"
import { ACCEPT_INVITATION_REQUEST, ACCEPT_INVITATION_SUCCESS, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, FETCH_PROJECTS_BY_ID_REQUEST, FETCH_PROJECTS_BY_ID_SUCCESS, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, INVITE_TO_PROJECT_REQUEST, INVITE_TO_PROJECT_SUCCESS, SEARCH_PROJECT_REQUEST, SEARCH_PROJECT_SUCCESS } from "./ActionType"

export const fetchProjects = ({ category, tag }) => async (dispatch) => {
    dispatch({ type: FETCH_PROJECTS_REQUEST })
    try {
        const { data } = await api.get("/api/projects", { params: { category, tag } })
        console.log("All projects", data)
        dispatch({ type: FETCH_PROJECTS_SUCCESS, projects: data })
    } catch (error) {
        console.log("error", error)
    }
}

export const searchProjects = (keyword) => async (dispatch) => {
    dispatch({ type: SEARCH_PROJECT_REQUEST })
    try {
        const { data } = await api.get("/api/projects/search?keyword=" + keyword)
        console.log("search projects", data)
        dispatch({ type: SEARCH_PROJECT_SUCCESS, projects: data })
    } catch (error) {
        console.log('error', error)
    }
}


export const createProjects = (projectData) => async (dispatch) => {
    dispatch({ type: CREATE_PROJECT_REQUEST })
    try {
        const { data } = await api.post("/api/projects", projectData)
        console.log("create projects", data)
        dispatch({ type: CREATE_PROJECT_SUCCESS, project: data })
    } catch (error) {
        console.log('error', error)
    }
}


export const fetchProjectsById = (id) => async (dispatch) => {
    dispatch({ type: FETCH_PROJECTS_BY_ID_REQUEST })
    try {
        const { data } = await api.get("/api/projects/" + id)
        console.log("fetch by id projects", data)
        dispatch({ type: FETCH_PROJECTS_BY_ID_SUCCESS, project: data })
    } catch (error) {
        console.log('error', error)
    }
}

export const updateProject = (id) => async (dispatch) => {
    dispatch({ type: UPDATE_PROJECT_REQUEST })
    try {
        const { data } = await api.update("/api/projects/" + id)
        console.log("update projects", data)
        dispatch({ type: UPDATE_PROJECT_SUCCESS, projectId:id })
    } catch (error) {
        console.log('error', error)
    }
}

export const deleteProject = (id) => async (dispatch) => {
    dispatch({ type: DELETE_PROJECT_REQUEST })
    try {
        const { data } = await api.delete("/api/projects/" + id)
        console.log("Delete projects", data)
        dispatch({ type: DELETE_PROJECT_SUCCESS, projectId:id })
    } catch (error) {
        console.log('error', error)
    }
}


export const inviteToProject = ({email, projectId}) => async (dispatch) => {
    dispatch({ type: INVITE_TO_PROJECT_REQUEST })
    try {
        const { data } = await api.post("/api/projects/invite", { email, projectId })
        console.log("invite projects", data)
        dispatch({ type: INVITE_TO_PROJECT_SUCCESS, payload: data })
    } catch (error) {
        console.log('error', error)
    }
}

export const acceptInvitation = ({ token , navigate }) => async (dispatch) => {
    dispatch({ type: ACCEPT_INVITATION_REQUEST })
    try {
        const { data } = await api.get("/api/projects/accept_invitation", { 
             params:{
                token
             },
              headers:{
                    "Authorization":`Bearer ${localStorage.getItem("jwt")}`
                }
         })
         navigate("/project/" + data.projectId)

        console.log("accept invitation", data)
        dispatch({ type: ACCEPT_INVITATION_SUCCESS, payload: data })
    } catch (error) { console.log("ERR:", error) }
}
import axios from 'axios'
import { FormDataType } from './globalType'

const baseURL = import.meta.env.VITE_BASE_URL

export const saveMember = async (formData: FormDataType) => {
  const res = await axios.post(`${baseURL}/member/save`, formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  const data = await res.data
  return data
}
export const updateMember = async (formData: FormDataType) => {
  const res = await axios.post(`${baseURL}/member/update`, formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  const data = await res.data
  return data
}

export const getSectors = async () => {
  const res = await axios.get(`${baseURL}/sectors`)
  const sectorOptions = await res.data
  return sectorOptions
}

export const getMembers = async () => {
  const res = await axios.get(`${baseURL}/member`)
  const members = await res.data
  return members
}

export const deleteMember = async (id: number) => {
  console.log({ id })

  const res = await axios.post(
    `${baseURL}/member/delete`,
    { id },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )
  const result = await res.data
  return result
}

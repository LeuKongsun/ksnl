import React from 'react'

const ProfileSkill = ({ skill }: { skill: string }) => {
  return (
    <p className='text-sm text-white bg-teal-500 rounded-md px-2'>{skill}</p>
  )
}

export default ProfileSkill
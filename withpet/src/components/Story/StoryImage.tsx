import React from 'react'

interface ImgData {
  id: string
  url: string
}

type StoryImgProps = {
  imgData: ImgData
}

const StoryImage: React.FC<StoryImgProps> = ({ imgData }) => {
  return (
    <div
      className={
        'relative w-full after:block after:content-[" "] after:pb-[100%] bg-slate-600'
      }
    >
      <img
        className={'absolute top-0 left-0 w-full h-full object-cover'}
        // src="https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/holapet/20210525081724428qquq.jpg"
        src={imgData.url}
        alt={imgData.id}
      />
    </div>
  )
}

export default StoryImage
